import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {SnackbarService} from "../../services/snackbar.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  list: Array<any> = [];

  constructor(private _snackBar: SnackbarService, private postService: PostService) {
  }

  ngOnInit(): void {
    /*this.postService.findAll()
      .subscribe(response => {
        console.log(response)
        this.list = response;
        console.log(this.list)
      });*/
  }

  delete(id: any) {
    if (confirm('are you sure ' + id)) {
      /*this.postService.delete(id).subscribe(response => {
        if (response) {
          this._snackBar.trigger('deleted', 'close',)

          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id === id) {
              this.list.splice(i, 1)
              return;
            }
          }
        }
      });*/
    }
  }
}
