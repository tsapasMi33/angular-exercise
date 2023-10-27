import {Component} from '@angular/core';
import {ProductModel} from "../product.model";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 products: ProductModel[] = [
   {id: 0,name: 'Banana', category:'Fruit', price:1},
   {id:1,name:'Apple',category:'Fruit',price:1.25},
   {id:2,name:'Tomato',category:'Vegetable',price:0.80},
   {id:3,name:'Potato',category:'Vegetable',price:0.35}
 ];


  constructor(private shoppingCartService: ShoppingCartService) {}

  onAddProduct(product: ProductModel) {
    this.shoppingCartService.onProductAdd(product);
  }
}
