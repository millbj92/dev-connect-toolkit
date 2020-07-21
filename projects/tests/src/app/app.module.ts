import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevConnectModule } from '../../../dev-connect/src/lib/dev-connect.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, DevConnectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
