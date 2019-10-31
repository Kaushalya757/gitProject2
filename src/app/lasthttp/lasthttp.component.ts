import { Component, OnInit } from '@angular/core';
import { HttpService } from '../appService/http.service';

@Component({
  selector: 'app-lasthttp',
  templateUrl: './lasthttp.component.html',
  styleUrls: ['./lasthttp.component.css']
})
export class LasthttpComponent implements OnInit {
show='';
urldata=[];
git='';
giturl=[];
  constructor(private _get:HttpService) { }

  ngOnInit() {
    this._get.dataServer()
    .subscribe(cable=> this.urldata = cable)
    this.show = this._get.keshu;

    this._get.gitData().subscribe(net =>this.giturl = net);
  }

  
}
