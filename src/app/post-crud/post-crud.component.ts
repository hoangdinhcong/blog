import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Editor } from 'primeng/components/editor/editor';

@Component({
  selector: 'app-post-crud',
  templateUrl: './post-crud.component.html',
  styleUrls: ['./post-crud.component.css']
})
export class PostCrudComponent implements OnInit {

  post: Post;

  action: string;

  text: string;

  constructor(
    private postService: PostService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute) {

    let key: string;
    this.route.paramMap.subscribe(params => {
      key = params.get('id');
      if (!key) {
        this.action = 'create';
        this.post = new Post();
      } else {
        this.action = 'update';
        this.postService.getPost(key).subscribe(post => this.post = post);
      }
    });
  }

  ngOnInit() {

  }

  submitPost(form: NgForm): void {
    if (!this.post.$key) {
      this.createPost(form);
    } else {
      this.updatePost(form);
    }
    this.router.navigate(['/']);
  }

  createPost(form: NgForm): void {
    this.postService.createPost(this.post);
  }

  updatePost(form: NgForm): void {
    this.postService.updatePost(this.post.$key, this.post);
  }

  deletePost(id: string): void {
    const confirmation = confirm(`Do you wanna delete post [${id}] ?`);
    if (confirmation) {
        this.postService.deletePost(id);
        this.router.navigate(['/']);
    }
  }

  goBack(): void {
    this.location.back();
  }

}
