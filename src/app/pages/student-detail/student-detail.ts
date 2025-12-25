import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, RouterLink } from '@angular/router'; 


@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './student-detail.html',
  styleUrl: './student-detail.css',
})
export class StudentDetail implements OnInit { 
  
  
  student: any = null; 

  students = [
    { id: 1, name: 'John Doe', major: 'Computer Science', enrollmentYear: 2022 },
    { id: 2, name: 'Jane Smith', major: 'Mathematics', enrollmentYear: 2023 },
    { id: 3, name: 'Alex Johnson', major: 'Physics', enrollmentYear: 2021 },
    { id: 4, name: 'Maria Garcia', major: 'Biology', enrollmentYear: 2024 },
    { id: 5, name: 'Ahmed Khan', major: 'Engineering', enrollmentYear: 2022 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the ID from the URL parameter
    const idFromRoute = Number(this.route.snapshot.paramMap.get('id'));

    // Find the student in the array using the ID
    this.student = this.students.find(s => s.id === idFromRoute);
  }
}