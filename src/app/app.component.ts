/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from './models/app-state.model';
import { Gw2State } from './models/gw2-state.model';
import { Gw2Actions } from './actions/gw2.actions';
import { UiActions } from './actions/ui.actions';
import { UiState } from './models/ui-state.model';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'GW2 App';
  public key = '';

  public gw2State$: Observable<Gw2State>;
  public uiState$: Observable<UiState>;

  constructor(
    private _store: Store<AppState>,
    private _gw2Actions: Gw2Actions,
    private _uiActions: UiActions
  ) {
    this.gw2State$ = _store.select('gw2State');
    this.uiState$ = _store.select('uiState');
  }

  public ngOnInit() {
    this.uiState$.subscribe((val) => {this.key = val.key;return val;});
    this._store.dispatch(this._uiActions.loadUi());
    this._store.dispatch(this._gw2Actions.loadAccount());
    this._store.dispatch(this._gw2Actions.loadBank());
    this._store.dispatch(this._gw2Actions.loadCharacterNames());
  }

  public ngOnDestroy() {
  }
}
