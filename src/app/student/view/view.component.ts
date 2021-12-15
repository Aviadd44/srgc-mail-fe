import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student-model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  listOfStudents: Student[] = [];

  ngOnInit(): void {
    this.httpClient.get<Student>("http://localhost:8080/student/fetch").subscribe(
      data => console.log(data)
    );
  }

}
