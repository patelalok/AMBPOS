import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {ContextMenuModule} from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import {TabMenuModule} from 'primeng/primeng';


import { AppComponent } from './app.component';
import 'hammerjs';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ContextMenuModule,
    HttpModule
  ],
  declarations: [
    AppComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
