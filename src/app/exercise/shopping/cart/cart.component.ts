import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../product.model";
import {ShoppingCartService} from "../shopping-cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  total$: Observable<number>;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.products$ = shoppingCartService.products$;
    this.total$ = shoppingCartService.total$;
  }


  ngOnInit(): void {
  }

  onAddOne(product: ProductModel) {
    this.shoppingCartService.onProductAdd(product);
  }

  onSubOne(product: ProductModel) {
    this.shoppingCartService.onProductRemove(product);
  }

}
