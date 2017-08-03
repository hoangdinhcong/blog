import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/posts');
  }

  ngOnInit() {
  }

}
