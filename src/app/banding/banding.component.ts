import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banding',
  templateUrl: './banding.component.html',
  styleUrls: ['./banding.component.css']
})
export class BandingComponent implements OnInit {
  useWord:string ="vishal";
  serName="assets/image/04.jpg";
  userName:string = "Keshu";
  userImage:string = 'assets/image/04.jpg';
  sererid:number = 10;
  btnStatus:boolean = false;
  link:string = 'https://www.google.com';
  inType: string = 'rama';
  head: string ="ankush";
  joint:"https://www.google.com";
  buttonTitle:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  changeTitle(){
    this.userName = 'Ruma';
  }
  mydata(){
    this.useWord ='komal';
  }
}
