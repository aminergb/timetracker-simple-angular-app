import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TasksComponent} from './Component/tasks/tasks.component';
import{ProjectsComponent} from './Component/projects/projects.component';
import {HomeComponent} from './Component/home/home.component';
import{ TaskInfoModifComponent} from './Component/task-info-modif/task-info-modif.component';
import { AppComponent } from './app.component';
import { ProjectComponent } from './Component/add-project/project.component';
import { AddTaskComponent } from './Component/add-task/add-task.component';
const routes: Routes = [
  {path :'', component : HomeComponent },
  {path :'tasks', component : TasksComponent },
  {path :'projects', component : ProjectsComponent },
  {path :'new', component : ProjectComponent },
  {path :'taskinfomodif', component : TaskInfoModifComponent },
  {path :'addtask', component : AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
