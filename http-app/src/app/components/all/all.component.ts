import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit{

  list:Array<any>=[];

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>("https://jsonplaceholder.typicode.com/posts").subscribe(respone=>{
      console.log(respone)
      this.list=respone;
      console.log(this.list)
    });
  }

}
