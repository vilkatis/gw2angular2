import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

/*
 * Ngrx Store imports
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './reducers';
import { Gw2Actions } from './actions';
import { UiActions } from './actions/ui.actions';
import { Gw2Effects } from './effects';
import { Gw2Service } from './services';

/*
 * Custom Angular Components
 */
import { BankComponent } from './components/bank.component';
import { BankSlotComponent } from './components/bank-slot.component';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { AppComponent } from './app.component';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  Gw2Actions,
  Gw2Service,
  UiActions
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    BankComponent,
    BankSlotComponent,
    SecondsToTimePipe
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(Gw2Effects)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule { }
