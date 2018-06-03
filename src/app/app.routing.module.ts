import { ViewClassStudentComponent } from './teacher/view-class-student/view-class-student.component';
import { NewCourseComponent } from './teacher/new-course/new-course.component';

import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AllResourcesComponent } from './home/all-resources/all-resources.component';
import { CourseListComponent } from './teacher/course-list/course-list.component';
import { NewTestComponent } from './teacher/new-test/new-test.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'all-resources', component: AllResourcesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'new-course', component: NewCourseComponent },
    { path: 'course-list', component: CourseListComponent },
    { path: 'new-test', component: NewTestComponent },
    { path: 'view-class-student', component: ViewClassStudentComponent }

];

export const routing = RouterModule.forRoot(routes);
