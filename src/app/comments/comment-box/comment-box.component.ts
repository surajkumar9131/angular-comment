import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { Comments } from '../comments.model';


@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  userComment: any;
  @Input() entity: string;
  @Input() content: any;
  @Output() closeComment = new EventEmitter<any>();


  loginDetails: any;
  commentList: any;
  details: any;

  constructor(private local: LocalStorageService, private session: SessionStorageService) { }

  ngOnInit() {
    this.userComment = null;
    this.loginDetails = this.local.get('userDetails');
    this.commentList = Comments.data;
  }

  saveComment() {
    this.details = {
        text: this.userComment,
        user: {
          like: false,
          name: this.loginDetails.user_name,
          profile: this.loginDetails.profile
        }
      };

    if (this.entity === 'newComment') {
      Comments.data.push(this.details);
    } else if (this.entity === 'sub_comment') {
      if (this.content.sub_comment && this.content.sub_comment.length > 0) {
        this.content.sub_comment.push(this.details);
      } else {
        this.content['sub_comment'] = [];
        this.content.sub_comment.push(this.details);
      }
      this.closeComment.emit(false);
    } else if (this.entity === 'reply') {
      if (this.content.reply && this.content.reply.length > 0) {
        this.content.reply.push(this.details);
      } else {
        this.content['reply'] = [];
        this.content.reply.push(this.details);
      }
      this.closeComment.emit(false);
    }
    this.userComment = null;
  }

}
