import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MineComponent } from './dip1/dip1.component';
import { Dip2Component } from './dip1/dip2/dip2.component';
import { Dip3Component } from './dip1/dip3/dip3.component';
import { Diya1Component } from './diya/diya1/diya1.component';
import { DiyaComponent } from './diya/diya.component';
import { diya2Component } from './diya/diya2/diya2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MineComponent,
    Dip2Component,
    Dip3Component,
    Diya1Component,
    DiyaComponent,
    diya2Component
    
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
