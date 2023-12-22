import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
    MyLibComponent,
    HeroComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    HeroComponent
  ]
})
export class MyLibModule { }
