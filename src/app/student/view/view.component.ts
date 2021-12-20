import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student-model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  listOfStudents: Student[] = [];

  ngOnInit(): void {
    this.httpClient.get<Student[]>("http://localhost:8080/student/fetch").subscribe(
      data => {
        data.forEach(student => {
          this.listOfStudents.push(student);
        });
      }
    );
  }

  getStudents(): Student[] {
    return this.listOfStudents;
  }

  moveToHome() {
    this.router.navigate(["/register"]);
  }


  moveToMailPage(name: string, email: string) {
    const base64Email = btoa(email);
    this.router.navigate(["/email"], { queryParams: { name: name, email: base64Email } } );
  }

  delete(id: number, username: string) {
    if(username === "admin") {
      alert("Can't delete Admin record");
      return;
    }
    let sureToDelete = confirm("Do you really want to delete this student, press Ok to confirm");
    if (sureToDelete) {
      this.httpClient.delete<string>("http://localhost:8080/student/delete/"+id).subscribe(
        response => {
         this.moveToHome();
        }
      );
    }
  }

}
