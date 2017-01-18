import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Account } from '../models';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccountService {
  private _url = "";
  private _key = "";
  private _headers = new Headers({ 'Content-Type': 'application/json' });
  private _options = new RequestOptions({ headers: this._headers });

  constructor(private _http: Http) {}

  setConfig(url: string, key: string) {
    this._url = url;
    this._key = key;
  }

  getAccount(): Observable<Account> {
    return this._http.get(this._url + '/account',this._options)
               .map(res => res.json());
  }

}
