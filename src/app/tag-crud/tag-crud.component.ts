import { Component, OnInit } from '@angular/core';
import { Tag } from '../../models/tag';
import { FirebaseListObservable } from 'angularfire2/database';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-tag-crud',
  templateUrl: './tag-crud.component.html',
  styleUrls: ['./tag-crud.component.css']
})
export class TagCrudComponent implements OnInit {

  tags: FirebaseListObservable<Tag[]>;
  constructor(private tagService: TagService) {
    this.tags = tagService.getTags();
  }

  ngOnInit() {
  }

}
