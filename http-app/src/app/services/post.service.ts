import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl='https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl+"posts/")
  }

  find(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl+"posts?id=" + id)
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(this.baseUrl+"posts" + id)
  }

  create(id: any, userId: any, title: any, body: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+"posts/", {
      id,
      userId,
      title,
      body
    })
  }

  update(id: any, userId: any, title: any, body: any): Observable<any> {
    return this.http.put<any>(this.baseUrl+"posts/",{
      id,
      userId,
      title,
      body
    })
  }
}

