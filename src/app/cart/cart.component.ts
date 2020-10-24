import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ToolCartService } from '../tool-cart.service';

import { Tool } from '../tool-list/tool';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //option 1: forma sin desuscripcion
  //cartList: Tool[];
  //----------------------------------------------//
  //option 2:
    cartList$: Observable<Tool[]>;
  //----------------------------------------------//

  constructor(private cart:ToolCartService) {

  //option 1: forma sin desuscripcion
  //cart.cartList.subscribe((observable)=>this.cartList=observable);
  //----------------------------------------------//
  //option 1: forma sin desuscripcion
    this.cartList$ = cart.cartList.asObservable();

   }

  ngOnInit(): void {
  }

}
