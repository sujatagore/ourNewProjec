import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './shared/component/tables/table.component';
import { CardComponent } from './shared/component/cards/cards.component'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
