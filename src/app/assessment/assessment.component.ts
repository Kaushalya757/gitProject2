import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styles:[`
  .mycheck{
    background-color: grey;
    border: 1px solid;
}
  
  `]
  // styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  // name:string='eka';
  Title:string =" Delhi";
  Value:string ="Incredible";
  Img:string ="assets/image/03.jpg";
  allowNewServer = false;
  serverCeationStatus:string ="no server was created" ; 
  serverName='checkServer';
  testwork='Monday , Tuesday ';
  checkInput="dataType";
  userName = '';
  inputUser= '';

  formName:string='';
  formEmail:string='';
  // property
  constructor() {
    setTimeout(() =>  {
      this.allowNewServer=true;
    }, 2000);
  }
  
 
  ngOnInit() {
  }

// event
  myDataTitle(){
    this.Title="chandigarh"
  }
  
  onCreateServer(){
    this.serverCeationStatus = "server was created! Name is" + this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  //Two way binding 
  changeName(testName: Event){
    console.log(event);
    this.userName = (<HTMLInputElement>testName.target).value;
    console.log(this.userName);
  }

  // addFormdata(mydata:Event){
  //   console.log(event)
  // this.formName + this.formEmail;
  // }
}
// mySecondValue(take: Event){
//    console.log(event);
//   this.inputUser = (<HTMLInputElement>take.target).value;
// }
// mySecondValue(){}
