import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from './model/student-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'srgc-post-fe';

  constructor(private router: Router) {
    
  }

  moveToHome() {
    if(this.router.url.length > 1)    
      this.router.navigate(["/register"]);
  }
 
  logout() {
    this.router.navigate(["/"]);
  }
}
