import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Tool } from "./tool-list/tool";

@Injectable({
  providedIn: "root"
})

/**
 * Maneja la logica del servicio
 *
 */
export class ToolCartService {
  private _cartList: Tool[] = [];
  private _productList: Tool[] = [];

  price: number = 0;

  //observable
  cartList: BehaviorSubject<Tool[]> = new BehaviorSubject([]);
  productList: BehaviorSubject<Tool[]> = new BehaviorSubject([]);

  constructor() {}

  addToCart(tool: Tool) {
    let item: Tool = this._cartList.find(v1 => v1.name == tool.name);

    if (!item) {
      this._cartList.push({ ...tool });
    } else {
      item.quantity += tool.quantity;
    }

    //le dice a BehaviorSubject que actualize el valor en mi variable privada _cartList
    this.cartList.next(this._cartList); //equivalente al emitt de los eventos
  }

  maxCompra() {
    let aux: number = 0;
    this.cartList.forEach(element => {
      element.forEach(elem => {
        aux += elem.price * elem.quantity;
      });
    });
    this.price = aux;
  }

  delete(p: Tool) {
    let item = this._cartList.find(v1 => p.name == v1.name);
    if (item) {
      this._cartList.splice(this._cartList.indexOf(p), 1);
      let product = this._productList.find(v1 => item.name == v1.name);
      product.stock += item.quantity;
      this.maxCompra();
      this.productList.next(this._productList);
      this.cartList.next(this._cartList);
    }
  }

  refresh(products: Tool[]) {
    this._productList = [];

    products.forEach(p => {
      let item: Tool = this._cartList.find(v1 => v1.name == p.name);
      if (item) {
        p.stock -= item.quantity;
      }
      this._productList.push({ ...p });
    });
    this.productList.next(this._productList);
  }
}
