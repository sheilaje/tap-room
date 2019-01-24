import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { ListKegComponent } from './list-keg/list-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { PricePipe } from './price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddKegComponent,
    ListKegComponent,
    EditKegComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
