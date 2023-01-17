import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DhoniComponent } from './dhoni/dhoni.component';
import { KohliComponent } from './kohli/kohli.component';
import { APJComponent } from './apj/apj.component';
import { ModiComponent } from './modi/modi.component';
import { VijayComponent } from './vijay/vijay.component';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DhoniComponent,
    KohliComponent,
    APJComponent,
    ModiComponent,
    VijayComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
