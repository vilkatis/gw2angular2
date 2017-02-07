import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import reducer from './reducers';

import { Gw2Actions } from './actions';
import { Gw2Effects } from './effects';

import { AppComponent } from './app.component';

import { Gw2Service } from './services';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SecondsToTimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(Gw2Effects)
  ],
  providers: [Gw2Actions, Gw2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
