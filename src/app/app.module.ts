import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './student/view/view.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddComponent } from './student/add/add.component';
import { EmailComponent } from './student/email/email.component';
import { LoginComponent } from './student/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent, 
    AddComponent, EmailComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent},
      { path: "register", component: AddComponent},
      { path: "view", component: ViewComponent },
      { path: "email", component: EmailComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
