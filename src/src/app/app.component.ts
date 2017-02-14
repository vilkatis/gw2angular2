import { Gw2State } from './store/gw2-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State } from './store/state';
import { Gw2Actions } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GW2 App';
  private _key = '0DBADFA3-6130-834F-90B0-3BCC56C14F4F4DC162EC-A4F4-4229-AB7A-77CED0013470';

  gw2State$: Observable<Gw2State>;

  constructor(
    private _store: Store<State>,
    private _gw2Actions: Gw2Actions
  ) {
    this.gw2State$ = _store.select('gw2State');
  }

  ngOnInit() {
    this._store.dispatch(this._gw2Actions.loadAccount(this._key));
    this._store.dispatch(this._gw2Actions.loadBank(this._key));
  }
}
