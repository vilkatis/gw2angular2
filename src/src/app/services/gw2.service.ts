import { Item } from './../models/item.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Account } from '../models';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Gw2Service {
  private _url = 'https://api.guildwars2.com/v2';

  constructor(private _http: Http) { }

  getAccount(key: string): Observable<Account> {
    return this._http.get(this._url + '/account?access_token=' + key)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getBankItems(key: string): Observable<Item[]> {
    return this._http.get(this._url + '/account/bank?access_token=' + key)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  getCharacters(key: string): Observable<Array<string>> {
    return this._http.get(this._url + '/characters?access_token=' + key)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  // getCharacterInventory(key: string, characterName: string): Observable<string> {return 'yes';}


}
