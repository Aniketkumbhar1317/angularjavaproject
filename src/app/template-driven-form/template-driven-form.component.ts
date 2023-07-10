import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  user=new User("ajay","aniket@gmail.com","student","male","pune");

  formSubmitted(userForm:NgForm){   //NgForm is class userForm is variable
// console.log(userForm);
// console.log(userForm.value);
// console.log(userForm.form.controls['name'].value);   //it will print name on console

this.user.name="aniket";
this.user.email="aniket@gmail.com";
this.user.about="student";
this.user.gender="male";
this.user.city="pune";


  }
}
