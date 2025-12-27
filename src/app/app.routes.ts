import { Routes } from '@angular/router';
import { StudentList } from './pages/student-list/student-list';
import { StudentDetail } from './pages/student-detail/student-detail'; 
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found'; 

 //routes for navigation
export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  {path: 'students', component: StudentList},
  { path: 'student/:id', component: StudentDetail },
  { path :'**', component: NotFound}
];
