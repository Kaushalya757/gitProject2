import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {
  angularTest:FormGroup;
  myArray:FormArray;

  constructor(private data: FormBuilder) { }

  ngOnInit() {
    this.angularTest = this.data.group({
      myArray:this.data.array([this.onAdd()])
    })
  }
  onAdd(){
    return this.data.group({
      'name':[''],
      'address':[''],
    })
  }

  onclick(){
    this.angularTest
    
  }
}
