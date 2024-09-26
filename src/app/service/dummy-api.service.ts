import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    const url='https://jsonplaceholder.typicode.com/posts/1'
   return  this.http.get(url);

  }
}
