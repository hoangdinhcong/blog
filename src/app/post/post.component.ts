import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: FirebaseListObservable<Post[]>;
  constructor(private postService: PostService) {
    this.posts = postService.getPosts();
  }

  ngOnInit() {
  }

  deletePost(id: string): void {
    const confirmation = confirm(`Do you wanna delete post [${id}] ?`);
    if (confirmation) {
        this.postService.deletePost(id);
    }
  }
}
