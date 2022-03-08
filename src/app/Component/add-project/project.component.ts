import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Controller } from 'src/app/Service/Controller';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { Storage } from 'src/app/Service/Storage';
import { Subscribable, Subscription } from 'rxjs';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {
  TaskSubs: Subscription;
  AllTasks : Task[];
  constructor(private Contr : Controller , private routes : Router , private Stor : Storage) { }

  ngOnInit() {

  }

  AddProjects(f:NgForm){
    this.Stor.addNewProject(f.value['titlepro']);
    //this.Contr.AddProject();
    this.routes.navigate(['']);

  }


}
