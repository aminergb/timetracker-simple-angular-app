import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './Component/tasks/tasks.component';
import { ProjectsComponent } from './Component/projects/projects.component';
import { TaskInfoModifComponent } from './Component/task-info-modif/task-info-modif.component';
import { HomeComponent } from './Component/home/home.component';
import { ProjectComponent } from './Component/add-project/project.component';

import { Controller } from './Service/Controller';
import { Storage } from './Service/Storage';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AddTaskComponent } from './Component/add-task/add-task.component';
import { QuickiesComponent } from './Component/quickies/quickies.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ProjectsComponent,
    TaskInfoModifComponent,
    HomeComponent,
    ProjectComponent,

    AddTaskComponent,
    QuickiesComponent,


  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Controller,Storage],
  bootstrap: [AppComponent]
})
export class AppModule { }
