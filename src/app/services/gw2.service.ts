import { Bag } from '../models/bag.model';
import { Item } from '../models/item.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Gw2Account } from '../models';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Character } from '../models/character.model';

@Injectable()
export class Gw2Service {
  private _url = 'https://api.guildwars2.com/v2';
  private _key = '';

  constructor(private _http: Http) {
    this._key = '0DBADFA3-6130-834F-90B0-3BCC56C14F4F4DC162EC-A4F4-4229-AB7A-77CED0013470';
  }

  public getAccount(): Observable<Gw2Account> {
    return this._http.get(this._url + '/account?access_token=' + this._key)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getBankItems(): Observable<Item[]> {
    return this._http.get(this._url + '/account/bank?access_token=' + this._key)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  public getCharacterNames(): Observable<string[]> {
    return this._http.get(this._url + '/characters?access_token=' + this._key)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
  }

  public getCharacterInventory(characterName: string): Observable<Character> {
    return this._http.get(
      this._url + '/characters/' + encodeURI(characterName) + '/inventory?access_token=' + this._key
    )
      .map((res: Response) => {
      let character: Character;
      return character = {
        name: characterName,
        bags: res.json()
      };
    })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'server error');
      });
  }
}
