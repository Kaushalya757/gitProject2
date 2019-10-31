import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators, FormArray } from '@angular/forms';
import { from } from 'rxjs';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
  
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male','female'];
  signupForm: FormGroup;
  myAllData:FormGroup;

  secondForm:FormGroup;
  constructor() { }
 
  ngOnInit() {
    // this.myAllData=new FormGroup({
    //   'Fname' :new FormArray([]),
    //   'lname' :new FormArray([])
    // });
    
    this.secondForm = new FormGroup({
      'name' :new FormControl(null),
      'height' :new FormControl(null),
      'weight' :new FormControl(null),
      'contact' :new FormControl(null),
      'address' :new FormControl(null)
    })
   
    // this.signupForm = new FormGroup({
    //   'userData': new  FormGroup({
    //     'name':new FormControl (null,Validators.required, Validators.maxLength(5)),
    //     'address':new FormControl(null,Validators.required),
    //     'email':new FormControl (null,[Validators.required,Validators.email]),
    //     'mobile':new FormControl (null,Validators.required),
    //   }),      
    //   'gender':new FormControl ('female') 

    // });
    // this.signupForm = new FormGroup({
    //   'name':new FormControl (null,Validators.required),
    //   'address':new FormControl(null,Validators.required),
    //   'email':new FormControl (null,[Validators.required,Validators.email]),
    //   'mobile':new FormControl (null,Validators.required),
    //   'gender':new FormControl (null,Validators.required) ,
    //   'hobbies' :new FormArray([])
    // });
  }
  onSubmit(){
    console.log(this.secondForm);
  }
  dataSubmit(){
    console.log(this.myAllData);
  }
  // onSubmit(){
  //   console.log(this.signupForm);
  // }

  // onAddHobby(){
  //   console.log('');
  //   const control =new FormControl(null,Validators.required);
  //   (<FormArray>this.signupForm.get('hobbies')).push(control);
  // }
  // onAddInfo(){
  //    const control =new FormControl();
  //   (<FormArray>this.myAllData.get('Fname')).push(control);
  //   (<FormArray>this.myAllData.get('lname')).push(control);
  // }
}
