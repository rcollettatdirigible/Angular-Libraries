import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibModule } from 'my-lib';
import { HeroComponent } from 'projects/my-lib/src/lib/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }