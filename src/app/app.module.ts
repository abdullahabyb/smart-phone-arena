import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { PhonesComponent }      from './phones.component';
import { PhoneDetailComponent }  from './phone-detail.component';
import { PhoneService }          from './phone.service';
import { PhoneSearchComponent }  from './phone-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // simiulation of web API
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PhoneDetailComponent,
    PhonesComponent,
    PhoneSearchComponent
  ],
  providers: [ PhoneService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
