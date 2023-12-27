import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { HeroComponent } from './hero/hero.component';
import { TypewritterComponent } from './typewritter/typewritter.component';



@NgModule({
  declarations: [
    MyLibComponent,
    HeroComponent,
    TypewritterComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    HeroComponent,
    TypewritterComponent
  ]
})
export class MyLibModule { }
