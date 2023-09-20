import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
  }

  find(id: any): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts?id=" + id)
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>("https://jsonplaceholder.typicode.com/posts" + id)
  }

  create(id: any, userId: any, title: any, body: any): Observable<any> {
    return this.http.post<any>("https://jsonplaceholder.typicode.com/posts", {
      id,
      userId,
      title,
      body
    })
  }

  update(id: any, userId: any, title: any, body: any): Observable<any> {
    return this.http.put<any>("https://jsonplaceholder.typicode.com/posts",{
      id,
      userId,
      title,
      body
    })
  }
}

