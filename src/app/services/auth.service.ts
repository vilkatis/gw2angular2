import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  public token: string;
  private _authUrl = 'https://account.guildwars2.com/oauth2/authorization';
  private _tokenUrl = 'https://account.guildwars2.com/oauth2/token';
  private _scope = 'account offline';
  
  constructor(private _http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(userKey): Observable<boolean> {
    var headers = new Headers();
    headers.append('response_type', 'code');
    headers.append('client_id', userKey);
    headers.append('redirect_uri', 'http://localhost:4200/');
    headers.append('scope', this._scope);
    var options = new RequestOptions({ headers: headers });
    return this._http.get(this._authUrl, options)
               .map((res:Response) => {
                 let token = res.json() && res.json().token;
               })
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
