import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Account } from '../models';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccountService {
  private _url = 'https://api.guildwars2.com/v2';

  constructor(private _http: Http) {}

  getAccount(key: string): Observable<Account> {
    return this._http.get(this._url + '/account?access_token=' + key)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
