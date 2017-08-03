import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Post } from '../models/post';
@Injectable()
export class ItemService {
    private basePath = '/posts';
    items: FirebaseListObservable<Post[]> = null; //  list of objects
    item: FirebaseObjectObservable<Post> = null; //   single object

    constructor(private db: AngularFireDatabase) {

    }
}
