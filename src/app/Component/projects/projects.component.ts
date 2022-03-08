import { Component, OnInit, Input } from '@angular/core';
import { Controller } from 'src/app/Service/Controller';
import { Project } from 'src/app/model/project';
import { Storage } from 'src/app/Service/Storage';
import { Task } from 'src/app/model/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  constructor(private Contr : Controller,private Stor: Storage) { }
TaskSubs : Subscription;
AllTasks : Task[]=[];
 @Input() ConcernedProject: Project;

  ngOnInit() {

  /*  this.TaskSubs=this.Stor.LocalTasksSubject.subscribe(
      (task : Task[])=>{
        this.AllTasks=task;
      }

    );*/

  }
  getController(){
    return this.Contr;
  }
  getStorage(){
    return this.Stor;
  }

  sendProject(project : Project){
    this.getStorage().ClickedProject=project;
    console.log(project.IdProject);
  }
 isEmpty(){
    let tr=this.getStorage().getConcernedTasks(this.ConcernedProject.IdProject).length;
    if(tr<=0){
      return true;
    }
    else return false;
  }

}
