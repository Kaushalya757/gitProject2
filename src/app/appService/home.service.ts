import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  title="You can enroll your self";

onclick(){
  alert("Your Form is successfully submitted ")
}

  constructor(private http:HttpClient) { }
  url="http://jsonplaceholder.typicode.com/users";
  urlGet():Observable<any>{
    return this.http.get(this.url)
  }
}
