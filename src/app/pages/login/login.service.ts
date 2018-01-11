import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable()
export class LoginService {

  private loginUrl = 'api/login';  // URL to web api

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

    /* Login */
    doLogin (user: User): Observable<User> {
      return this.http.post(this.loginUrl, user, this.options)
               .map(function(res: Response) {
                	let body = res.json();
                        return body.data || {};
                })
               .catch(function(error: Response | any) {
                	console.error(error.message || error);
                	return Observable.throw(error.message || error);
                });
    }
}
