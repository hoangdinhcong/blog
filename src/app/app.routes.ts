import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCrudComponent } from './post-crud/post-crud.component';
import { TagCrudComponent } from './tag-crud/tag-crud.component';


const routes: Routes = [
    { path: '', redirectTo: 'post', pathMatch: 'full' },
    { path: 'post', component: PostComponent },
    { path: 'post/:id', component: PostDetailComponent },
    { path: 'post-crud', component: PostCrudComponent },
    { path: 'post-crud/:id', component: PostCrudComponent },
    { path: 'tag', component: TagCrudComponent },
];

export const routing = RouterModule.forRoot(routes);
