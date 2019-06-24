import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularWebStorageModule } from 'angular-web-storage';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderComponent } from './header/header.component';
import { CommentBoxComponent } from './comments/comment-box/comment-box.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { LoginModalComponent } from './header/login-modal/login-modal.component';
import { CommentComponent } from './comments/comment/comment.component';
import { ActionBtnsComponent } from './comments/action-btns/action-btns.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    HeaderComponent,
    CommentBoxComponent,
    CommentListComponent,
    LoginModalComponent,
    CommentComponent,
    ActionBtnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
