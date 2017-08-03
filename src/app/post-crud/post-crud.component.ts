import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.css']
})
export class PostCrudComponent implements OnInit {

  post: Post = new Post();
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  createPost(form: NgForm): void {
    this.post = new Post();
    this.post.title = form.value.title;
    this.post.content = form.value.content;

    this.postService.createPost(this.post);
    this.router.navigate(['/']);

  }

}
