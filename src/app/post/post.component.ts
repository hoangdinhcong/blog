import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: FirebaseListObservable<any[]>;
  constructor(private postService: PostService) {
    this.posts = postService.getPosts();
  }

  ngOnInit() {
  }

}
