import { Routes } from '@angular/router';
import { StudentList } from './pages/student-list/student-list';
import { StudentDetail } from './pages/student-detail/student-detail'; // Import your component
import { NotFound } from './pages/not-found/not-found'; // Import it


export const routes: Routes = [
    {path: 'students', component: StudentList},

  { path: 'student/:id', component: StudentDetail },
  { path: 'home', component: NotFound },
  { path :'not-found', component: NotFound}
];
