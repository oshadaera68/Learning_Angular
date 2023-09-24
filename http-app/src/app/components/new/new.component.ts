import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../services/post.service";
import {SnackbarService} from "../../services/snackbar.service";
import Post from "../../dto/Post";


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

  constructor(private postService: PostService,
              private _snackBar: SnackbarService) {
  }

  createData() {
    /*this.postService.create(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
      this.form.get('body')?.value
    )
      .subscribe(response => {
        if (response) {
          this._snackBar.trigger('saved', 'close')
        }
      });*/

    let post = new Post(
      this.form.get('id')?.value!,
      this.form.get('userId')?.value!,
      this.form.get('title')?.value!,
      this.form.get('body')?.value!
    );

    this.postService.createDataFireStore(post).then()
  }
}
