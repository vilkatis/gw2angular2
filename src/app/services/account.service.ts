import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Account } from '../models';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccountService {
  private _url = 'https://api.guildwars2.com/v2/account';
  private _key = '8003EBB3-7DB8-0841-A05D-E96E773E9FD58B1DB4A0-A9F2-438E-8ABB-E24157D51A87';
  private _headers;
  private _options;

  constructor(private _http: Http) {
    this._headers = new Headers({ 'Content-Type': 'application/json' }).append('Authorization','Bearer ' + this._key);
    this._options = new RequestOptions({ headers: this._headers });
  }

  getAccount(): Observable<Account> {
    return this._http.get(this._url + '/account',this._options)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
