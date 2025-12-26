import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  //array of student lists
students = [
  {
  id: 1,name: 'Ammara Saleem',major: 'Computer Science'},
  {id: 2,name: 'Sarah Johnson',major: 'Computer Science'},
  {id: 3,name: 'Eman Ghazi',major: 'Computer Science'},
  {id: 4,name: 'Michael Chen',major: 'Business Administration'},
  {id: 5,name: 'Emily Rodriguez',major: 'Electrical Engineering'},
  {id: 6,name: 'David Patel',major: 'Data Science'},
  {id: 7,name: 'Jessica Williams',major: 'Mechanical Engineering'},
  {id: 8,name: 'Diana',major: 'Mechanical Engineering'},
  {id: 9,name: 'Jessica Williams',major: 'Mechanical Engineering'},
  {id: 10,name: 'Meekah',major: 'Mechanical Engineering'},
  {id: 11,name: 'Fiza',major: 'Mechanical Engineering'},
  {id: 12,name: 'Irha',major: 'Mechanical Engineering'}
];

  filteredStudents = [...this.students];
 onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredStudents = this.students.filter(student => 
      student.name.toLowerCase().includes(searchTerm)
    );
  }
}
