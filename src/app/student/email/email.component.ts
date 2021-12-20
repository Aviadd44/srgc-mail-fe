import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailContent } from 'src/app/model/email-content-model';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {


  @Input() name: string = "";
  @Input() email: string = "";

  message: string = "";

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params => {
        this.name = params['name'];
        this.email = atob(params['email']);
      });
  }

  sendEmail() {
    if (this.email === "" || this.email === null) {
      alert("Invalid email id");
      return;
    }
    let mailContent: EmailContent = { message: this.message, receiver: this.email };
    this.httpClient.post<EmailContent>("http://150.230.131.91:8080/student/send/email", mailContent)
      .subscribe( response => {
        alert(`EMail sent successfully to ${this.name}`)
        this.router.navigate(["/view"]);
      });
  }

}
