import { MessageService } from './services/message.service';
import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { MDBSpinningPreloader } from './typescripts/pro/index';
import { TeacherFormComponent } from './teacher/teacher-form/teacher-form.component';
import { NewTaskComponent } from './teacher/new-task/new-task.component';
import { NavbarComponent } from './navbar.component';
import { TaskListComponent } from './teacher/task-list/task-list.component';
import { ViewClassStudentComponent } from './teacher/view-class-student/view-class-student.component';
import { routing } from './app.routing.module';
import { TaskService } from './services/task.service';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { LatestResourcesComponent } from './home/latest-resources/latest-resources.component';
import { HeaderComponent } from './home/header/header.component';
import { AllResourcesComponent } from './home/all-resources/all-resources.component';
import { TreeModule } from 'angular-tree-component';
@NgModule({
  declarations: [
    AppComponent,
    TeacherFormComponent,
    NewTaskComponent,
    NavbarComponent,
    TaskListComponent,
    ViewClassStudentComponent,
    LoginComponent,
    HomeComponent,
    LatestResourcesComponent,
    HeaderComponent,
    AllResourcesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    TreeModule,
    routing,
    ToastModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [MDBSpinningPreloader, TaskService, MessageService],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }