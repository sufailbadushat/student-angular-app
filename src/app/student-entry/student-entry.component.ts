import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name = ""
  rollNo = ""
  adNo = ""
  phoneNo = ""
  collegeName = ""
  parentName = ""
  parentPhone = ""
  username = ""
  password = ""

  readValues = () => {
    let data: any={
      "name":this.name,
      "rollNo":this.rollNo,
      "adNo":this.adNo,
      "phoneNo":this.phoneNo,
      "collegeName":this.collegeName,
      "parentName":this.parentName,
      "parentPhone":this.parentPhone,
      "username":this.username,
      "password":this.password
    }
    console.log(data)
  }
}
