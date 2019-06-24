import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'angular-web-storage';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginDetails: any;
  loggedIn: any;

  constructor(private local: LocalStorageService, private session: SessionStorageService) { }

  ngOnInit() {
    this.loginDetails = this.local.get('userDetails');
    this.loggedIn = this.local.get('loggedIn') || false;
  }

  logOut() {
    this.local.clear();
    this.loggedIn = false;
    location.reload();

  }

}
