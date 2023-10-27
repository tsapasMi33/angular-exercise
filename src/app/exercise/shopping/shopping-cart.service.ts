import { Injectable } from '@angular/core';
import {ProductModel} from "./product.model";
import {map, Observable, Subject} from "rxjs";

@Injectable()
export class ShoppingCartService {

  constructor() { }

  private productsInCart: ProductModel[] = [];
  private productsSubject: Subject<ProductModel[]> = new Subject<ProductModel[]>();

  onProductAdd($event: ProductModel) {
    const productFound = this.productsInCart.filter((e) => e.id === $event.id)[0];
    if (productFound === undefined) {
      this.productsInCart.push({...$event, qty: 1})
    } else {
      // @ts-ignore
      productFound.qty = productFound.qty + 1
    }
    this.productsSubject.next(this.products);
  }

  onProductRemove($event: ProductModel) {
    const productFound = this.productsInCart.filter((e) => e.id === $event.id)[0];
    // @ts-ignore
    productFound.qty = productFound.qty - 1;
    if (productFound.qty === 0) {
      this.productsInCart = this.productsInCart.filter(e => e.id !== productFound.id)
    }

    this.productsSubject.next(this.products);
  }


  get products() {
    return this.productsInCart.slice();
  }

  get products$(): Observable<ProductModel[]>{
    return this.productsSubject.asObservable();
  }

  get total$(): Observable<number>{
    return this.productsSubject.pipe(
      map( products =>  {
        let sum = 0;
        products.forEach(
          e => sum += e.price * (e.qty ? e.qty : 0)
        );
        return sum;
      })
    );
  }
}
