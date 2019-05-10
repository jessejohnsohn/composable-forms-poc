import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule, FlexLayoutModule ],
  declarations: [ AppComponent, AddressComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
