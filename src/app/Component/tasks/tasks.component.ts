import { Component, OnInit ,Input, OnChanges} from '@angular/core';
import { Controller } from 'src/app/Service/Controller';
import { Storage} from 'src/app/Service/Storage';
import { Task } from 'src/app/model/task';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit,OnChanges {
  timecounter;

  @Input() ConcernedTask : Task;
  AllTasks : Task[];
  AllQuickies : Task[]
  QuickieSubs :Subscription;
  TaskSubs : Subscription;
  countcurrent : number =0 ;
  constructor(private Contr : Controller,private Stor:Storage) {

   }

  ngOnInit() {

    console.log("salut");
    this.TaskSubs=this.Stor.LocalTasksSubject.subscribe(
      (task : Task[])=>{
        this.AllTasks=task;
      }
    );
    this.Stor.emitTasks();
    console.log("salut");
    this.QuickieSubs=this.Stor.LocalQuickiesSubject.subscribe(
      (task : Task[])=>{
        this.AllQuickies=task;
      }
    );
    this.Stor.emitTasks();
    this.Stor.emitQuickies();

   // if(this.Contr.getTask(this.ConcernedTask)){
     // this.ConcernedTask.TimeCurrent=this.Contr.getTask(this.ConcernedTask).TimeCurrent;
       //this.ConcernedTask.isFinished=this.Contr.getTask(this.ConcernedTask).isFinished;
   //   }


  }
  ngOnChanges(){
  //  if(this.Contr.getTask(this.ConcernedTask)){
      //this.ConcernedTask.TimeCurrent=this.Contr.getTask(this.ConcernedTask).TimeCurrent;
       //this.ConcernedTask.isFinished=this.Contr.getTask(this.ConcernedTask).isFinished;
     // }

   // console.log(" something changed");
  }

  getController(){
    return this.Contr;
  }

  getStorage(){
    return this.Stor;
  }

 StatusChangeOnClick (ConcernedTask : Task) {
   //this.Stor.getTasks();
 // this.ConcernedTask=ConcernedTask;

  //this.Contr.setTask(ConcernedTask);
 if(!ConcernedTask.DateStart){
  ConcernedTask.DateStart=new Date().getTime();
  //je suis la !

  if(ConcernedTask.IdProject===-1){
    this.Stor.setQuickie(ConcernedTask);
  }else{this.Stor.setTask(ConcernedTask);}

  //this.Stor.setTask(ConcernedTask);
 }else if(ConcernedTask.isPaused){
  ConcernedTask.isPaused=false;
  if(ConcernedTask.IdProject===-1){
    this.Stor.setQuickie(ConcernedTask);
  }else{this.Stor.setTask(ConcernedTask);}

  //this.Stor.setTask(ConcernedTask);

   clearInterval(this.timecounter);




 }else if (!ConcernedTask.isPaused){
  ConcernedTask.isPaused=true;
   this.timecounter = setInterval(()=>{
    //ConcernedTask.isPaused=true;
     ConcernedTask.TimeCurrent++;
     this.ConcernedTask=ConcernedTask;
    // this.Stor.setTask(ConcernedTask);

     //this.ConcernedTask=ConcernedTask;
     //this.Contr.setTask(this.ConcernedTask);
    // this.ConcernedTask.TimeCurrent = ConcernedTask.TimeCurrent;
     //this.Contr.setTask(ConcernedTask);
  },1000);
 // this.Stor.setTask(ConcernedTask);


 }

 this.ConcernedTask=ConcernedTask;
//this.Stor.setTask(ConcernedTask);
}


getLocalTask(task :Task){
  const index = this.AllTasks.findIndex(
    (t)=>{
      if(t===task){
        return true;
      }
    }
  );

task= this.AllTasks.find(x => x.IdTask === index);
return task;
}
repeatTime(){
  this.ConcernedTask.TimeCurrent=0;

  if(this.ConcernedTask.IdProject==-1){
  this.Stor.setQuickie(this.ConcernedTask);
  }else {
    this.Stor.setTask(this.ConcernedTask);
  }

}
getCurrentTime(){
  //this.ConcernedTask=this.findActualTask(this.ConcernedTask);
  if(!this.ConcernedTask.isFinished ){ return this.ConcernedTask.TimeCurrent;
  }else{
 return "Complete";
  }
}

}
