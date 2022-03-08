import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';
import { Project } from '../model/project';
import { Observable, Subject } from 'rxjs';
import 'rxjs';
import { ProjectsComponent } from '../Component/projects/projects.component';
import * as firebase from 'firebase';

@Injectable()
export class Storage {
  IdTasks : number=0;
  IdQuickies : number=0;
  IdProjects : number;
  LocalTasks : Task[]=[];
  LocalTasksSubject = new Subject<Task[]>();
  LocalQuickies: Task[]=[];
  ClickedProject : Project;
  LocalQuickiesSubject = new Subject<Task[]>();
  LocalProjects: Project[]=[];
  LocalProjectsSubject = new Subject<Project[]>();

  constructor(){
  this.getIdProjects();
    this.getProjects();
    this.getIdTasks();
    this.getTasks();
    this.getQuickies();

  }

  getClickedProject(){
    return this.ClickedProject;
  }

    makeQuickieComplete(task : Task){
                            const index = this.LocalQuickies.findIndex(
                              (t)=>{
                                if(t===task){
                                  return true;
                                }
                              }
                            );
                          if(index!==-1){

                              console.log(this.LocalQuickies[index].Title);
                            this.LocalQuickies[index].isFinished=true;
                            this.LocalQuickies[index].DateFinish=new Date().getTime();


                          }
                          this.saveQuickies();

                          }

                        makeTaskComplete(task : Task){
                         //this.getTasks();
                            const index = this.LocalTasks.findIndex(
                              (t)=>{
                                if(t===task){
                                  return true;
                                }
                              }
                            );
                          if(index!==-1){

                              console.log(this.LocalTasks[index].Title);
                            this.LocalTasks[index].isFinished=true;
                            this.LocalTasks[index].DateFinish=new Date().getTime();
                            this.saveTasks();


                          }


                          }





              getConcernedTasks(IdProject){
                //this.getTasks();

                let concernedtasks=[];
                for (var task of this.LocalTasks) {
                  if(task.IdProject===IdProject){
                    concernedtasks.push(task);

                  }
                }
                return concernedtasks;
                }
                getCompleteTasks(){

                  let concernedtasks=[];
                  for (var task of this.LocalTasks) {
                    if(task.isFinished){
                      concernedtasks.push(task);

                    }
                  }
                  return concernedtasks;
                  }
                  getCurrentTasks(){

                    let concernedtasks=[];
                    for (var task of this.LocalTasks) {
                      if(task.DateStart  && !task.isFinished){
                        concernedtasks.push(task);

                      }
                    }
                    return concernedtasks;
                    }
                    getCurrentQuickies(){

                      let concernedtasks=[];
                      for (var task of this.LocalQuickies) {
                        if(task.DateStart){
                          concernedtasks.push(task);

                        }
                      }
                      return concernedtasks;
                      }
                      getCompleteQuickies(){

                        let concernedtasks=[];
                        for (var task of this.LocalQuickies) {
                          if(task.isFinished){
                            concernedtasks.push(task);

                          }
                        }
                        return concernedtasks;
                        }
                getLocalTask(task :Task){
                  const index = this.LocalTasks.findIndex(
                    (t)=>{
                      if(t===task){
                        return true;
                      }
                    }
                  );

                task= this.LocalTasks.find(x => x.IdTask === index);
                return task;
                }

                setTask(ConcernedTask : Task){
                  const index = this.LocalTasks.findIndex(
                    (t)=>{
                      if(t===ConcernedTask){
                        return true;
                      }
                    }
                  );
                  this.LocalTasks[index]=ConcernedTask;
                  this.saveTasks();

                }
                setQuickie(ConcernedTask : Task){
                  const index = this.LocalQuickies.findIndex(
                    (t)=>{
                      if(t===ConcernedTask){
                        return true;
                      }
                    }
                  );
                  this.LocalQuickies[index]=ConcernedTask;
                  this.saveTasks();

                  this.saveQuickies();

                }




              makeProjectComplete(index : number){
               // this.getTasks();
                let project : Project;
                let concernedtasks = this.getConcernedTasks(index);

                  if(index!==-1){
                    project = this.LocalProjects.find(x => x.IdProject == index);
                      project.isFinished=true;
                      project.DateFinish= new Date().getTime();
                      for(var task of concernedtasks){
                        this.makeTaskComplete(task);

                      }
                      this.saveProjects();

                    }else{console.log("ne veux pas ");}


              }

              isConcernedTasksComplete(concernedtasks : Task[]){
                let tr :boolean;
                for(var task of concernedtasks){
                  if(!task.DateStart || !task.isFinished ){
                     tr=false;
                  }else{
                    tr=true;
                  }


                }
                return tr;

              }

              emitTasks(){this.LocalTasksSubject.next(this.LocalTasks)}
              emitProjects(){this.LocalProjectsSubject.next(this.LocalProjects)}
              emitQuickies(){this.LocalQuickiesSubject.next(this.LocalQuickies)}

              saveIdQuickies(){
                firebase.database().ref("/idquickies").set(this.IdQuickies);
                }
              saveIdProjects(){
                firebase.database().ref("/idprojects").set(this.IdProjects);
                }
                saveIdTasks(){
                  firebase.database().ref("/idtasks").set(this.IdTasks);
                  }
                  getIdTasks(){
                    firebase.database().ref('/idtasks').on('value',(data)=>{
                      this.IdTasks=data.val()? data.val() : 0;

                    });
                  }
                  getIdProjects(){
                    firebase.database().ref('/idprojects').on('value',(data)=>{
                      this.IdProjects=data.val()? data.val() : 0;

                    });
                  }
                  getIdQuickies(){
                    firebase.database().ref('/idquickies').on('value',(data)=>{
                      this.IdQuickies=data.val()? data.val() : 0;

                    });
                  }

              saveTasks(){
              firebase.database().ref("/tasks").set(this.LocalTasks);
              }
              saveQuickies(){
                firebase.database().ref('/quickies').set(this.LocalQuickies);
              }
              saveProjects(){
                firebase.database().ref('/projects').set(this.LocalProjects );
              }

              getTasks(){

              firebase.database().ref('/tasks').on('value',(data)=>{
                this.LocalTasks=data.val()? data.val() : [];
                this.emitTasks();
              });
              }
              getQuickies(){

                firebase.database().ref('/quickies').on('value',(data)=>{
                  this.LocalQuickies=data.val()? data.val() : [];
                  this.emitQuickies();

              });
              }
              getProjects(){

                firebase.database().ref('/projects').on('value',(data)=>{
                  this.LocalProjects=data.val()? data.val() : [];
                  this.emitProjects();

              });

              }

              getTask(id: number){
                return new Promise((resolve,reject)=>{
                  firebase.database().ref('/tasks'+id).once('value').then(
                    (data)=>{
                      resolve(data.val());
                    },
                    (error)=>{
                      reject(error);
                    }
                    );

                }
                );

              }


              getProject(id: number){
                return new Promise((resolve,reject)=>{
                  firebase.database().ref('/project'+id).once('value').then(
                    (data)=>{
                      resolve(data.val());
                    },
                    (error)=>{
                      reject(error);
                    }
                    );

                }
                );

              }

              getQuickie(id: number){
                return new Promise((resolve,reject)=>{
                  firebase.database().ref('/quickies'+id).once('value').then(
                    (data)=>{
                      resolve(data.val());
                    },
                    (error)=>{
                      reject(error);
                    }
                    );

                }
                );

              }




              addNewTask(title){
                  this.getIdTasks();

                let newTask ={

                  IdTask :this.IdTasks++,
                IdProject :this.getClickedProject().IdProject,
                Title : title,
                isFinished : false,
                isPaused:false,
                DateCreate :new Date().getTime(),
                DateStart : null,
                DateFinish : null,
                TimeStart :0,
                timePause:0,
                TimeCurrent :0,
                };
                this.saveIdTasks();
                this.LocalTasks.push(newTask);

                this.saveTasks();
                this.emitTasks();
              }
              addNewQuickie(){
                this.getIdQuickies();
                let newTask ={

                  IdTask :this.IdQuickies++,
                IdProject :-1,
                Title : "Quickie "+this.IdQuickies,
                isFinished : false,
                isPaused:false,
                DateCreate :new Date().getTime(),
                DateStart : null,
                DateFinish : null,
                TimeStart :0,
                timePause:0,
                TimeCurrent :0,
                };
                this.saveIdQuickies();
                this.LocalQuickies.push(newTask)
                this.saveQuickies();
                this.emitQuickies();
              }



              addNewProject(titleProject){

                this.getIdProjects();
                ++this.IdProjects;
                let id=this.IdProjects;

                let newProject={

                  IdProject :id,
                  Title : titleProject,
                  TimeTotal : 0,
                  isFinished : false,
                  DateCreate : new Date().getTime(),
                   DateStart : null,
                   DateFinish : null
                };



                this.saveIdProjects();
                this.getProjects();
                this.LocalProjects.push(newProject);
                this.saveProjects();
                this.emitProjects();
              }

              removeTask(task:Task){
                const index = this.LocalTasks.findIndex(
                  (t)=>{
                    if(t===task){
                      return true;
                    }
                  }
                );
                this.LocalTasks.splice(index,1);
                this.saveTasks();
                this.emitTasks();
              }
              removeQuickie(task:Task){
                const index = this.LocalQuickies.findIndex(
                  (t)=>{
                    if(t===task){
                      return true;
                    }
                  }
                );
                this.LocalQuickies.splice(index,1);
                this.saveQuickies();
                this.emitQuickies();
              }


              removeProject(project:Project){
                let concernedtasks = this.getConcernedTasks(project.IdProject)
                const index = this.LocalProjects.findIndex(
                  (t)=>{
                    if(t===project){
                      return true;
                    }
                  }
                );
                if (index !== -1) {
                  //  this.LocalTasks.splice(index,1);

                    if(this.isConcernedTasksComplete(concernedtasks)){
                      this.getTasks();
                     for(var task of concernedtasks){
                        if(!task.isFinished || !task.DateStart){
                          this.makeTaskComplete(task.IdTask);

                        }

                        this.removeTask(task);


                     }
                     this.LocalProjects.splice(index,1);
                     this.saveProjects();
                     this.emitProjects();
                    }



                 }


              }






}
