import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorAlerter } from './error-alerter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorAlerter,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
