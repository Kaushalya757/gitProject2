import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormArrayName, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-keshu-form',
  templateUrl: './keshu-form.component.html',
  styleUrls: ['./keshu-form.component.css']
})
export class KeshuFormComponent implements OnInit {
login:FormGroup;
hobbies:FormArray;
  constructor() { }

  ngOnInit() {
    this.login = new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'address':new FormControl(null,Validators.required),
      'hobbies':new FormArray([
        new FormControl(null,Validators.required)
      ])
    })
  }

  onFormSubmit(){
    console.log(this.login);
  }

  onclick(){
    (<FormArray>this.login.get('hobbies')).push(new FormControl(null,Validators.required))
  }
}
