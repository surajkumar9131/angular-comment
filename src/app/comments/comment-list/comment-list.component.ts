import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { Comments } from '../comments.model';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  loginDetails: any;
  loggedIn: any;
  commentList: any;

  constructor(private local: LocalStorageService, private session: SessionStorageService) { }

  ngOnInit() {
    this.loginDetails = this.local.get('userDetails');
    this.loggedIn = this.local.get('loggedIn') || false;
    this.commentList = Comments.data;
  }


}
