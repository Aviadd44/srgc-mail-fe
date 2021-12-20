import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student-model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  firstName: string = "";
  lastName: string = "";
  address: string = "";
  username: string = "";
  emailId: string = "";

  constructor(private httpClient: HttpClient, private route: Router) {}

  saveStudent() {
    if (this.firstName === "" || this.lastName === "" || this.address === "" || this.emailId === "" || this.username === "") {
      alert("Please fill all fields!");
      return;
    }
    let student: Student = {
      address: this.address,
      firstName: this.firstName,
      lastName: this.lastName,
      emailId: this.emailId,
      username: this.username,
      id: 0
    };
    
    this.httpClient.post<Student>("http://localhost:8080/student/save", student).subscribe(
      response => {
        console.log(response);
        this.route.navigate(["/view"]);
      }
    );
  }

  moveToView() {
    this.route.navigate(["/view"]);
  }

}
