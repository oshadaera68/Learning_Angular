import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../services/post.service";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {


  form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    userId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  })

  constructor(private postService: PostService, private http: HttpClient, private _snackBar: MatSnackBar) {
  }

  createData() {
    this.postService.create(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
      this.form.get('body')?.value
    )
      .subscribe(response => {
        if (response) {
          this._snackBar.open('saved', 'close', {
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            duration: 5000,
            direction: 'ltr',
          })
        }
      });
  }
}
