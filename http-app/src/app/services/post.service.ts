import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import Post from "../dto/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'https://jsonplaceholder.typicode.com/'

  constructor(private fireStoreService: AngularFirestore) {
  }

  find(id: any): Observable<any> {
    return this.fireStoreService.collection('post-data').doc(id).valueChanges();
  }

  findAllDataFireStore() {
    return this.fireStoreService.collection('post-data').snapshotChanges();
  }

  deleteDataFireStore(id: any) {
    return this.fireStoreService.collection('post-data').doc(id).delete();
  }

  createDataFireStore(post: Post) {
    return new Promise<any>((resolve, reject) => {
      this.fireStoreService.collection('post-data')
        .add(post)
        .then(response => {
          console.log(response)
        }, error => {
          console.log(error)
        })
    })
  }

  updateDataFireStore(post: Post) {
    return this.fireStoreService.collection('post-data').doc(post.id)
      .update({
        userId: post.userId,
        title: post.title,
        body: post.body,
      })
  }
}

