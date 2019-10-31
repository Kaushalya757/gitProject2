import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators,} from '@angular/forms';
import { HomeService } from '../appService/home.service';
// import { from } from 'rxjs';
@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {
signupForm:FormGroup;
showvalue='';
  constructor(private _getvalue:HomeService) { }

  ngOnInit() {
    this.showvalue = this._getvalue.title;
    
    this.signupForm = new FormGroup({
      'email':new FormControl(null,[Validators.email]),
      'Password':new FormControl(null,Validators.maxLength(10)),

      'cpassword':new FormControl(null,Validators.required),
      'firstName':new FormControl(null,Validators.required),
      'lastName':new FormControl(null,Validators.required),
      'company':new FormControl(null,Validators.required),
      'phone':new FormControl(null,Validators.required),
      'address1':new FormControl(null,Validators.required),
      'address2':new FormControl(null,Validators.required),
      'city':new FormControl(null,Validators.required),
      'state':new FormControl(null,Validators.required),
      'zip':new FormControl(null,Validators.required),
      'checklength':new FormControl(null,Validators.maxLength(10)) 
    });
  }
  submitDetail(){
    console.log(this.signupForm);
  }
}
const control = new FormControl('ng', Validators.minLength(3));