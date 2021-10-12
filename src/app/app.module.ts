import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerConsentComponent } from './customer-consent/customer-consent.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ContentComponent } from './content/content.component';
import { NextComponent } from './next/next.component';
import { PrevComponent } from './prev/prev.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerConsentComponent,
    ProgressBarComponent,
    ContentComponent,
    NextComponent,
    PrevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
