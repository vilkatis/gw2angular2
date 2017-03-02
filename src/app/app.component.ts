/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from './models/app-state.model';
import { Gw2State } from './models/gw2/gw2-state.model';
import { Gw2Actions } from './actions/gw2.actions';
import { UiActions } from './actions/ui.actions';
import { UiState } from './models/ui-state.model';
import { Gw2Service } from './services/gw2.service';
import { ItemSlot } from './models/gw2/account/item-slot.model';

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
  templateUrl: 'app.component.html',
  providers: [Gw2Service]
})
export class AppComponent implements OnInit {
  public title = 'Black Lion Trading Company';
  public key = '';

  public gw2State$: Observable<Gw2State>;
  public uiState$: Observable<UiState>;
  public bankState$: Observable<ItemSlot[]>;

  constructor(private _store: Store<AppState>,
              private _gw2Actions: Gw2Actions,
              private _uiActions: UiActions,
              private gw2Service: Gw2Service) {
    this.gw2State$ = _store.select('gw2State');
    this.uiState$ = _store.select('uiState');
    this.bankState$ = _store.select('gw2State.bank');
  }

  public ngOnInit() {
    this.uiState$.subscribe((val) => {
      this.key = val.key;
      return val;
    });
    this._store.dispatch(this._uiActions.loadUi());
    this._store.dispatch(this._gw2Actions.loadAccount());
    this._store.dispatch(this._gw2Actions.loadBank());
    this._store.dispatch(this._gw2Actions.loadCharacters());
  }
}
