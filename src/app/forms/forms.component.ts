import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators, FormArray } from '@angular/forms'
import { HomeService } from '../appService/home.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
information : FormGroup;
urldata={};
// interest:FormArray;
  constructor(private _get:HomeService) { }

  ngOnInit() {
    // service
this._get.urlGet()
.subscribe(company=> this.urldata =company)
    
  this.information = new FormGroup({
      'userName': new FormControl(null,[Validators.required, Validators.min(15)]),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'interest':new FormArray([
        new FormControl(null,Validators.required),
        // new FormControl(null,Validators.required),
      ]),
    });
  }
onSubmit(){
  console.log(this.information);
  // console.log('submit');
}


onAddSkill(){
  // const store = (new FormControl(null,Validators.required)); we can also define this
  (<FormArray>this.information.get('interest')).push(new FormControl(null,Validators.required))  //this is the main form array  =
}

// service
    addAlert(){
      this._get.onclick(); 
      }
}
