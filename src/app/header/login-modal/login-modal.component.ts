import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';
import { CommentsService } from '../../comments/comments.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  constructor(
    private local: LocalStorageService,
    private session: SessionStorageService,
    private commentsService: CommentsService
    ) {
      this.commentsService.listen().subscribe((m: any) => {
        this.onFilterClick(m);
    });
    }

  ngOnInit() {
  }

  login(f) {
    const details = {
      id: f.value.email,
      password: f.value.password,
      user_name: 'suraj kumar',
      profile: 'https://gyanapp.in/assets/images/team/suraj.png'
    };
    this.local.set('userDetails', details);
    this.local.set('loggedIn', true);
    location.reload();
  }

  onLogin() {
    document.getElementById('id01').style.display = 'block';
  }

    onFilterClick(event) {
      console.log(event);
      this.onLogin();
    }

}
