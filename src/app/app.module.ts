import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PostService } from '../services/post.service';

import { routing } from './app.routes';

import { EditorModule } from 'primeng/components/editor/editor';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCrudComponent } from './post-crud/post-crud.component';

@NgModule({
  declarations: [
    AppComponent,

    PostComponent,
    PostDetailComponent,
    PostCrudComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    EditorModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
