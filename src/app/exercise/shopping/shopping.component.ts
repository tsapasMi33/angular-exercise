import { Component } from '@angular/core';
import {ShoppingCartService} from "./shopping-cart.service";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers: [ShoppingCartService]
})
export class ShoppingComponent {

}
