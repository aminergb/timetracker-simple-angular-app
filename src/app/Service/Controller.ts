import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';
import { Project } from '../model/project';
import { Observable } from 'rxjs';
import 'rxjs';
import { ProjectsComponent } from '../Component/projects/projects.component';


@Injectable()
export class Controller {
  TimerGlobal : number= 0;
  IdTasks : number=0;
  IdProjects : number=0;
LocalTasks : Task[]=[];
LocalQuickTasks : Task[]=[];

ClickedProject : Project=null;
IdClickedTask : number=null;

LocalProjects : Project[]=[];

LocalQuickie : Task;
//bdd :
myDate = new Date();

getLocalQuickTasks (){
  return this.LocalQuickTasks;
}
getLocalTasks (){
  return this.LocalTasks;
}
getLocalProjects(){
  return this.LocalProjects;
}
getLocalQuickie(){

return this.LocalQuickie;
}

/*

 AddProject(titleProject){
  console.log(this.IdProjects);

  let newProject={

    IdProject :this.IdProjects++,
    Title : titleProject,
    TimeTotal : 0,
    isFinished : false,
    DateCreate : this.myDate,
     DateStart : null,
     DateFinish : null
  };
  this.LocalProjects.push(newProject);
return newProject;
  }
  AddQuickTask(titleTask){
    console.log(this.IdTasks);

    let newQuickTask={

      IdTask :this.IdTasks++,
    IdProject :null,
    Title : titleTask,
    isFinished : false,
    isPaused:false,
    DateCreate :this.myDate,
    DateStart : null,
    DateFinish : null,
    TimeStart :0,
    timePause:0,
    TimeCurrent :0,
    };
    this.LocalQuickTasks.push(newQuickTask);

    }
 AddTask(titleTask){
  console.log(this.IdTasks);

  let newTask={

    IdTask :this.IdTasks++,
  IdProject : this.getClickedProject().IdProject,
  Title : titleTask,
  isFinished : false,
  isPaused:false,
  DateCreate :this.myDate,
  DateStart : null,
  DateFinish : null,
  TimeStart :0,
  timePause:0,
  TimeCurrent :0,
  };
  this.LocalTasks.push(newTask);

return newTask;
  }
  setClickedProject(project : Project){
    this.ClickedProject =project;

  }
getClickedProject(){
  return this.ClickedProject;
  }



   getConcernedTasks(IdProject,AllTasks){
  let concernedtasks=[];
  for (var task of AllTasks) {
    if(task.IdProject==IdProject){
      concernedtasks.push(task);

     }
   }
  return concernedtasks;
  }

getTimerGlobal(){
  return this.TimerGlobal;

}
setTimerGlobal(timecurrent){
  return this.TimerGlobal =timecurrent;
}
deleteTask(task : Task){
  let index = this.getIdTask(task);
if (index !== -1) {
    this.getLocalTasks().splice(index, 1);
}


}
isConcernedTasksComplete(concernedtasks : Task[]){
  let tr :boolean;
  for(var task of concernedtasks){
    if(task.DateStart==null || task.isFinished ){
       tr=true;
    }else{
      tr=false;
    }


  }
  return tr;

}

deleteProject(project :Project){
  let index =project.IdProject;
  let concernedtasks=this.getConcernedTasks(index,this.getLocalTasks());
  if (index !== -1) {
     if(!concernedtasks.length ){
     //  this.LocalTasks.splice(index,1);
       this.LocalProjects.splice(index,1);

     }else  {
       if(this.isConcernedTasksComplete(concernedtasks)){
        for(var task of concernedtasks){
           if(!task.isFinished){ this.makeTaskComplete(task.IdTask);}

          this.deleteTask(task);


        }
        this.LocalProjects.splice(index,1)
       }


     }
    }

}


makeTaskComplete(task : Task){
  const index = this.LocalTasks.findIndex(
    (t)=>{
      if(t===task){
        return true;
      }
    }
  );
 if(index!==-1){
  //  task = this.getLocalTasks().find(x => x.IdTask == index);

    //task.DateFinish=this.myDate;
    //task.isFinished=true;
    console.log(this.LocalTasks[index].Title);
   this.LocalTasks[index].isFinished=true;
   this.LocalTasks[index].DateFinish=this.myDate;
   //this.setTask(task);
    //mettre a jour dans la table
//this.setTask(task);

 }


}

makeProjectComplete(index : number){
  let project : Project;
  let concernedtasks = this.getConcernedTasks(index,this.getLocalTasks())

  if(index!==-1){
  project = this.getLocalProjects().find(x => x.IdProject == index);
    project.isFinished=true;
    project.DateFinish= this.myDate
    for(var task of concernedtasks){
      this.makeTaskComplete(task);

    }

  }
}

getIdProject(project : Project){
  return this.getLocalProjects().indexOf(project);
}
getIdTask(task : Task){
  return this.getLocalTasks().indexOf(task);

}
getTask(task :Task){
  const index = this.LocalTasks.findIndex(
    (t)=>{
      if(t===task){
        return true;
      }
    }
  );

task= this.getLocalTasks().find(x => x.IdTask === index);
return task;
}

CompletedTasks(){

}
CompletedProjects(){

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

}

StatusChangeOnClick (ConcernedTask : Task) {
 let timecounter;
  if(ConcernedTask.DateStart=null){
   ConcernedTask.DateStart=this.myDate;

  }else if(ConcernedTask.isPaused){
   ConcernedTask.isPaused=false;

    clearInterval(timecounter);




  }else if (!ConcernedTask.isPaused){
   ConcernedTask.isPaused=true;
    timecounter = setInterval(()=>{
      ConcernedTask.TimeCurrent++;
   },1000);

   this.setTask(ConcernedTask);



  }
 }





*/




















}
