import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  post: Post = null;

  id: string;
  private sub: any;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(parrams => {
      this.id = parrams.get('id');
      this.postService.getPost(this.id).subscribe(post => this.post = post);
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
