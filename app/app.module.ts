import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { OppDetailComponent } from './opp-detail.component';
import { OppService } from './opp.service';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    OppDetailComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [OppService]
})
export class AppModule { }
