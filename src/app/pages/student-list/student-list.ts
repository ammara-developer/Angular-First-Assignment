import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [RouterLink],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
students = [
  {
    id: 1,
    name: 'Ammara Saleem',
    major: 'Computer Science',
    enrollmentYear: 2022
  },{
    id: 2,
    name: 'Sarah Johnson',
    major: 'Computer Science',
    enrollmentYear: 2022
  },
  {
    id: 3,
    name: 'Eman Ghazi',
    major: 'Computer Science',
    enrollmentYear: 2022
  },
  {
    id: 4,
    name: 'Michael Chen',
    major: 'Business Administration',
    enrollmentYear: 2021
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    major: 'Electrical Engineering',
    enrollmentYear: 2023
  },
  {
    id: 4,
    name: 'David Patel',
    major: 'Data Science',
    enrollmentYear: 2022
  },
  {
    id: 5,
    name: 'Jessica Williams',
    major: 'Mechanical Engineering',
    enrollmentYear: 2024
  },
  {
    id: 6,
    name: 'Diana',
    major: 'Mechanical Engineering',
    enrollmentYear: 2024
  },
  {
    id: 5,
    name: 'Jessica Williams',
    major: 'Mechanical Engineering',
    enrollmentYear: 2024
  },
  {
    id: 7,
    name: 'Meekah',
    major: 'Mechanical Engineering',
    enrollmentYear: 2024
  },
  {
    id: 8,
    name: 'Fiza',
    major: 'Mechanical Engineering',
    enrollmentYear: 2024
  },
  {
    id: 9,
    name: 'Irha',
    major: 'Mechanical Engineering',
    enrollmentYear: 2024
  }
];

// 2. The array the HTML will "talk" to
  // Initially, it's a copy of the full list
  filteredStudents = [...this.students];

  // 3. The search function
  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    // We filter the MASTER list, but update the FILTERED list
    this.filteredStudents = this.students.filter(student => 
      student.name.toLowerCase().includes(searchTerm)
    );
  }
}
