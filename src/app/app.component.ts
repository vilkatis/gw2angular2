import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from './reducers';
import { AccountActions } from './actions';
import { Account } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GW2 App';
  private _key = '0DBADFA3-6130-834F-90B0-3BCC56C14F4F4DC162EC-A4F4-4229-AB7A-77CED0013470';

  account$: Observable<Account>;

  constructor(
    private _store: Store<AppState>,
    private _accountActions: AccountActions
  ) {
    this.account$ = _store.select('account');
  }

  ngOnInit() {
    this._store.dispatch(this._accountActions.loadAccount(this._key));
  }
}
