import { Component, OnInit } from '@angular/core';
import { HomeService } from '../appService/home.service';
// import { HomeService } from '../appService/home.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  urldata=[];
  constructor(private _text:HomeService) { }

  ngOnInit() {
    this._text.urlGet()
    .subscribe(fetchdata => this.urldata = fetchdata)
    
  }

}
