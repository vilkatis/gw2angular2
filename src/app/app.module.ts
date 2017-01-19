import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import reducer from './reducers';

import { AccountActions } from './actions';
import { AccountEffects } from './effects';

import { AppComponent } from './app.component';

import { AccountService, AuthService } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(AccountEffects)
  ],
  providers: [AccountActions, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
