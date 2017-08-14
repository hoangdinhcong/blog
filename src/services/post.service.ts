import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Post } from '../models/post';

@Injectable()
export class PostService {

    private basePath = '/posts';

    posts: FirebaseListObservable<Post[]> = null; //  list of objects
    post: FirebaseObjectObservable<Post> = null; //   single object

    constructor(private db: AngularFireDatabase) {
        this.getPosts();
    }

    getPosts(query = {}): FirebaseListObservable<Post[]> {
        this.posts = this.db.list(this.basePath, { query: query });
        return this.posts;
    }
    getPost(key: string): FirebaseObjectObservable<Post> {
        const itemPath = `${this.basePath}/${key}`;
        this.post = this.db.object(itemPath);
        return this.post;
    }
    createPost(post: Post): void {
        this.posts.push(post).catch(error => this.handleError(error));
    }
    updatePost(key: string, value: any): void {
        this.posts.update(key, value).catch(error => this.handleError(error));
    }
    deletePost(key: string): void {
        const itemPath = `${this.basePath}/${key}`;
        this.db.object(itemPath).remove();
    }
    deleteAll(): void {
        this.posts.remove().catch(error => this.handleError(error));
    }

    // Default error handling for all actions
    private handleError(error) {
        console.log(error);
    }
}
