import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
keshu="test service work ";

  constructor(private http:HttpClient) { }
  url="http://jsonplaceholder.typicode.com/users";
  dataServer():Observable<any>{
    return this.http.get(this.url);
  }

  gitData():Observable<any>{
    return this.http.get("https://api.github.com/users");
  }
}
