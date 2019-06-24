import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }
  private _listners = new Subject<any>();

  listen(): Observable<any> {
     return this._listners.asObservable();
  }

  checkLogin(loggedIn: boolean) {
     this._listners.next(loggedIn);
  }
}

