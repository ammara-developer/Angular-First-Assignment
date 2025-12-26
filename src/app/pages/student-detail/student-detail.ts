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
  //array of student details    
  students = [
  { id: 1, name: 'Ammara Saleem', major: 'Computer Science', imageUrl: 'images/std1.jpg' , enrollmentYear: 2010 },
  { id: 2, name: 'Sarah Johnson', major: 'Computer Science', imageUrl: 'images/std1.jpg' ,enrollmentYear: 2011},
  { id: 3, name: 'Eman Ghazi', major: 'Computer Science', imageUrl: 'images/std1.jpg', enrollmentYear: 2012 },
  { id: 4, name: 'Michael Chen', major: 'Business Administration', imageUrl: 'images/std1.jpg', enrollmentYear: 2013 },
  { id: 5, name: 'Emily Rodriguez', major: 'Electrical Engineering', imageUrl: 'images/std1.jpg', enrollmentYear: 2014    },
  { id: 6, name: 'David Patel', major: 'Data Science', imageUrl: 'images/std1.jpg', enrollmentYear: 2015 },
  { id: 7, name: 'Jessica Williams', major: 'Mechanical Engineering', imageUrl: 'images/std1.jpg',enrollmentYear: 2016 },
  { id: 8, name: 'Diana', major: 'Mechanical Engineering', imageUrl: 'images/std1.jpg', enrollmentYear: 2017 },
  { id: 9, name: 'Jessica Williams', major: 'Mechanical Engineering', imageUrl: 'images/std1.jpg', enrollmentYear: 2018 },
  { id: 10, name: 'Meekah', major: 'Mechanical Engineering', imageUrl: 'images/std1.jpg',enrollmentYear: 2019 },
  { id: 11, name: 'Fiza', major: 'Mechanical Engineering', imageUrl: 'images/std1.jpg', enrollmentYear: 2020 },
  { id: 12, name: 'Irha', major: 'Mechanical Engineering', imageUrl: 'images/std1.jpg',enrollmentYear: 2021 }
];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the ID from the URL parameter
    const idFromRoute = Number(this.route.snapshot.paramMap.get('id'));

    // Find the student in the array using the ID
    this.student = this.students.find(s => s.id === idFromRoute);
  }
}