import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { ToolCartService } from "../tool-cart.service";

import { Tool } from "../tool-list/tool";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  //option 1: forma sin desuscripcion
  //cartList: Tool[];
  //----------------------------------------------//
  //option 2:
  cartList$: Observable<Tool[]>;

  //----------------------------------------------//

  constructor(private cart: ToolCartService) {
    //option 1: forma sin desuscripcion
    //cart.cartList.subscribe((observable)=>this.cartList=observable);
    //----------------------------------------------//
    //option 2:
    this.cartList$ = cart.cartList.asObservable();
  }

  total = 0;
  ngOnInit(): void {}

  remove(tool: Tool) {
    this.num();
    this.cart.delete(tool);
  }

  //TODO buscar solucionar la obtencion del precio de los elemento en el carrito de una mejor manera
  num(): number {
    this.total = this.cart.price;
    setTimeout(() => {
      this.num();
    }, 3000);
    return this.total;
  }
}
