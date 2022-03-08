import { Component, OnInit } from '@angular/core';
import { Controller } from 'src/app/Service/Controller';
import { Form, NgForm } from '@angular/forms';
import { Storage } from 'src/app/Service/Storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {

  constructor(private Contr:Controller , private Stor : Storage , private routes : Router) { }

  ngOnInit() {

  }

  AddTaskOnProject(f:NgForm){


    this.Stor.addNewTask(f.value['titletask']);
    this.routes.navigate(['']);
  }

}
