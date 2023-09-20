import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit{
  list:Array<any>=[];

  constructor(private _snackBar:MatSnackBar, private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.findAll()
      .subscribe(response => {
        console.log(response)
        this.list = response;
        console.log(this.list)
      });
  }

  delete(id:any) {
    if (confirm('are you sure '+id)){
      this.postService.delete(id).subscribe(response=>{
       if (response){
         this._snackBar.open('deleted', 'close', {
           horizontalPosition: 'end',
           verticalPosition: 'bottom',
           duration: 5000,
           direction: 'ltr',
         })

         for (let i = 0; i < this.list.length; i++) {
           if (this.list[i].id===id){
             this.list.splice(i,1)
             return;
           }
         }
       }
      });
    }
  }
}
