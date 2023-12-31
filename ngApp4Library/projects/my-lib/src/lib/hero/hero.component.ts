import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input()
  heading: string = "";
  
  @Input()
  description: string = "";

  @Input()
  typeWritter: boolean =false
}