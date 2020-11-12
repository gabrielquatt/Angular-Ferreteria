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
  private _toolList: Tool[] = [];
  private precioPrueba: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  //observable
  cartList: BehaviorSubject<Tool[]> = new BehaviorSubject([]);
  toolList: BehaviorSubject<Tool[]> = new BehaviorSubject([]);

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

  priceCart() {
    let aux: number = 0;
    this.cartList.forEach(element => {
      element.forEach(elem => {
        aux += elem.price * elem.quantity;
      });
    });
     aux;
    this.precioPrueba.next(aux);
  }
  getPriceCart (): BehaviorSubject <number> {
    return this.precioPrueba;
  }

  delete(tool: Tool) {
    let item = this._cartList.find(v1 => tool.name == v1.name);
    if (item) {
      this._cartList.splice(this._cartList.indexOf(tool), 1);
      let product = this._toolList.find(v1 => item.name == v1.name);
      product.stock += item.quantity;
      this.priceCart();
      this.toolList.next(this._toolList);
      this.cartList.next(this._cartList);
    }
  }

  refresh(products: Tool[]) {
    this._toolList = [];

    products.forEach(tool => {
      let item: Tool = this._cartList.find(v1 => v1.name == tool.name);
      if (item) {
        tool.stock -= item.quantity;
      }
      this._toolList.push({ ...tool });
    });
    this.toolList.next(this._toolList);
  }
}
