import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import localeKz from '@angular/common/locales/kk';

import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {FormComponent} from './form/form.component';

registerLocaleData(localeKz, 'kz');

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
