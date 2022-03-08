import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Controller } from 'src/app/Service/Controller';
import { Storage } from 'src/app/Service/Storage';
import { Project } from 'src/app/model/project';
import { Task} from 'src/app/model/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit  {

ProjectSubs : Subscription;

TaskSubs : Subscription;


  constructor(private Contr : Controller,private Stor:Storage) {



   }

  ngOnInit() {




  }


  getController(){
    return this.Contr;
  }
  getStor(){
    return this.Stor;
  }


  AddQuickieOnProject(){
    this.Stor.addNewQuickie();
  }
}
