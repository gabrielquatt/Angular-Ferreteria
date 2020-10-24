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

  //observable
  cartList: BehaviorSubject<Tool[]>= new BehaviorSubject([]);

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
    console.log(this._cartList.length);
    //le dice a BehaviorSubject que actualize el valor en mi variable privada _cartList
    this.cartList.next(this._cartList);//equivalente al emitt de los eventos
  }


}
