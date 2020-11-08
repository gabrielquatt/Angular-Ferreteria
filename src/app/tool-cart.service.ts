import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tool } from './tool-list/tool';

@Injectable({
  providedIn: 'root',
})

/**
 * Maneja la logica del servicio
 *
 */
export class ToolCartService {

  private _cartList: Tool[]=[];
  private _totalPrice: number =0;
  price:number=0;

  //observable
  cartList: BehaviorSubject<Tool[]> = new BehaviorSubject([]);

  constructor() {
    /* TODO: acá va el código que manejará
    el carrito de Herramientas */
  }

  addToCart(tool: Tool) {

    let item: Tool = this._cartList.find((v1)=>v1.name==tool.name);

    if(!item){
      this._cartList.push({... tool});

    }else{
      item.quantity+=tool.quantity;
    }

    //le dice a BehaviorSubject que actualize el valor en mi variable privada _cartList
    this.cartList.next(this._cartList);//equivalente al emitt de los eventos
  }

  maxCompra() {
    let aux : number = 0;
    this._totalPrice = 0;

    this.cartList.forEach(element => {
     element.forEach(elem => {
      aux = elem.price*elem.quantity
      this._totalPrice += aux;
      });
    });

    this.price=this._totalPrice;
    console.log(this.price);

  }

}
