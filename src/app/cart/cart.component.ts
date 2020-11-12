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
  priceCart$: Observable<number>;

  //----------------------------------------------//

  constructor(private cart: ToolCartService) {
    //option 1: forma sin desuscripcion
    //cart.cartList.subscribe((observable)=>this.cartList=observable);
    //----------------------------------------------//
    //option 2:
    this.cartList$ = cart.cartList.asObservable();
    this.priceCart$ = cart.getPriceCart()
  }

  ngOnInit(): void {}

  remove(tool: Tool) {
    this.cart.delete(tool);
  }

}
