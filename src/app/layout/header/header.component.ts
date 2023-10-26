import { Component } from '@angular/core';
import {Link} from "../../core/link.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  links: Link[]  = [
    new Link("Demo","",[
      new Link("demo1","demo/demo1")
    ]),
    new Link("Exercises","", [
      new Link("Timer", "exercises/timer")
    ])
  ]
}
