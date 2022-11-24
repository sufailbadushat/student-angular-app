import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const myRoute:Routes=
[
  {
    path:"",
    component:StudentEntryComponent
  },
 
  {
    path:"view",
    component:StudentViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentViewComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
