import { Post } from '../../models/post';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

export interface IPostService {

    getPosts(query): FirebaseListObservable<Post[]>;

    getPost(key: string): FirebaseObjectObservable<Post>;

    createPost(post: Post): void;

    updatePost(key: string, value: any): void;

    deletePost(key: string): void;

    deleteAll(): void;
}
