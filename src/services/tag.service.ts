import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Post } from '../models/post';

@Injectable()
export class TagService {

    private basePath = '/tags';

    tags: FirebaseListObservable<Post[]> = null; //  list of objects
    tag: FirebaseObjectObservable<Post> = null; //   single object

    constructor(private db: AngularFireDatabase) {
        this.getTags();
    }

    getTags(query = {}): FirebaseListObservable<Post[]> {
        this.tags = this.db.list(this.basePath, { query: query });
        return this.tags;
    }
    getTag(key: string): FirebaseObjectObservable<Post> {
        const itemPath = `${this.basePath}/${key}`;
        this.tag = this.db.object(itemPath);
        return this.tag;
    }
    createTag(post: Post): void {
        this.tags.push(post).catch(error => this.handleError(error));
    }
    updateTag(key: string, value: any): void {
        this.tags.update(key, value).catch(error => this.handleError(error));
    }
    deleteTag(key: string): void {
        const itemPath = `${this.basePath}/${key}`;
        this.db.object(itemPath).remove();
    }
    deleteAll(): void {
        this.tags.remove().catch(error => this.handleError(error));
    }

    // Default error handling for all actions
    private handleError(error) {
        console.log(error);
    }
}
