import { Component, OnInit } from '@angular/core';
import { ToolCartService } from '../tool-cart.service';
import { Tool } from './tool';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss'],
})
export class ToolListComponent implements OnInit {
  tools: Tool[] = [
    {
      name: 'taladro stanley',
      description: 'funcionando',
      price: 6500,
      stock: 245,
      image: 'assets/img/stanley/taladro-rotacion.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'taladro ion litio stanley',
      description: 'funcionando',
      price: 8500,
      stock: 25,
      image: 'assets/img/stanley/taladro-ion-litio.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'taladro de banco stanley',
      description: 'funcionando',
      price: 12000,
      stock: 0,
      image: 'assets/img/stanley/taladro-banco-stanley.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'taladro inalambrico black-decker',
      description: 'funcionando',
      price: 9000,
      stock: 10,
      image: 'assets/img/black-decker/taladro-inalambrico.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'taladro percutor 550 black-decker',
      description: 'funcionando',
      price: 7000,
      stock: 9,
      image: 'assets/img/black-decker/taladro-percutor-550w.jpg',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'taladro rotacion black-decker',
      description: 'funcionando',
      price: 12000,
      stock: 0,
      image: 'assets/img/black-decker/taladro-rotacion.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'atornillador drywall bosch',
      description: 'funcionando',
      price: 12000,
      stock: 18,
      image: 'assets/img/bosch/atornillador-drywall.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'taladro gsb 13re bosch',
      description: 'funcionando',
      price: 15000,
      stock: 49,
      image: 'assets/img/bosch/taladro-gsb-13-re.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'taladro gsr 180 bosch',
      description: 'funcionando',
      price: 12500,
      stock: 49,
      image: 'assets/img/bosch/atornillador-gsr-180.jpg',
      clearance: true,
      quantity: 0,
    },
  ];

  constructor(private cart:ToolCartService) {
  }

  ngOnInit(): void {}

  addToCart(tool):void {
    this.cart.addToCart(tool);
    tool.stock -= tool.quantity;
    tool.quantity=0;
  }
}
