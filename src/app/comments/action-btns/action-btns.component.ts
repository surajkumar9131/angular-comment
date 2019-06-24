import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-action-btns',
  templateUrl: './action-btns.component.html',
  styleUrls: ['./action-btns.component.scss']
})
export class ActionBtnsComponent implements OnInit {

  @Output() checkLogin = new EventEmitter<any>();
  @Input() content: any;
  @Input() entity: string;
  @Input() commentContent: any;

  loginDetails: any;
  loggedIn: any;
  showCommentBox: boolean;
  liked: boolean;
  disliked: boolean;

  constructor(
    private local: LocalStorageService,
    private session: SessionStorageService,
    private commentsService: CommentsService) { }

  ngOnInit() {
    this.loginDetails = this.local.get('userDetails');
    this.loggedIn = this.local.get('loggedIn') || false;
    this.showCommentBox = false;
    this.liked = false;
    this.disliked = false;
  }

  likeDislike(value) {
    if (this.loggedIn) {
      if (value === 'like') {
        this.liked = true;
        this.disliked = false;
        console.log(this.content.user);
      } else {
        console.log(this.content.user);
        this.liked = false;
        this.disliked = true;
      }
    } else {
      this.commentsService.checkLogin(this.loggedIn);
    }
  }

  reply() {
    if (this.loggedIn) {
      this.showCommentBox = !this.showCommentBox;
    } else {
      this.commentsService.checkLogin(this.loggedIn);
    }
  }

  toggleComment(e) {
    this.showCommentBox = e;
  }


}
