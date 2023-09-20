import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  searchId = '';

  form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    userId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  })

  constructor(private postService:PostService, private _snackBar: MatSnackBar) {
  }

  updateData() {
    this.postService.update(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
      this.form.get('body')?.value
    )
      .subscribe(response => {
        if (response) {
          this._snackBar.open('updated', 'close', {
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            duration: 5000,
            direction: 'ltr',
          })
        }
      });
  }

  loadData() {
    this.postService.find(this.searchId)
      .subscribe(response => {
        this.form.patchValue({
          id: response[0].id,
          userId: response[0].userId,
          title: response[0].title,
          body : response[0].body,
        })
      });
  }
}
