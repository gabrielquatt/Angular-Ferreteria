import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Tool } from "./tool-list/Tool";

@Injectable({
  providedIn: "root"
})

/**
 * Maneja la logica del servicio
 */
export class ToolCartService {
  private _cartList: Tool[] = [];
  private _toolList: Tool[] = [];
  private _priceCart: BehaviorSubject<number> = new BehaviorSubject<number>(0);

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
    let aux: number = 0; //varible auxiliar para calcular el precio de los productos
    this.cartList.forEach(element => {
      //recorro todos los elemento
      element.forEach(elem => {
        //de cada elemento de cartList le pido su precio
        aux += elem.price * elem.quantity;
      });
    });
    this._priceCart.next(aux); //una vez terminado actualizo el precio del carrito
  }
  getPriceCart(): BehaviorSubject<number> {
    return this._priceCart;
  }

  delete(tool: Tool) {
    let item = this._cartList.find(v1 => tool.name == v1.name); //busco una herrmienta con el mismo nombre
    if (item) {
      //si "item" se encontro
      this._cartList.splice(this._cartList.indexOf(tool), 1); //splice elimina un elemento
      let productTool = this._toolList.find(v1 => item.name == v1.name);
      productTool.stock += item.quantity; //al elemento en toolList le actualizo la cantidad disponible en stock
      this.priceCart(); //llamo a la funcion para que se actualize el precio total
      this.toolList.next(this._toolList); //actualizo la lista
      this.cartList.next(this._cartList); //actualizo el carrito
    }
  }

  refresh(tool: Tool[]) {
    //actualiza la lista
    this._toolList = []; //vacio el arrglo de toolList primero

    tool.forEach(tool => {
      let item: Tool = this._cartList.find(v1 => v1.name == tool.name);
      if (item) {
        tool.stock -= item.quantity;
      }
      this._toolList.push({ ...tool });
    });
    this.toolList.next(this._toolList); //actualizo la lista de herramientas
  }
}
