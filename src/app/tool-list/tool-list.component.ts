import { Component, OnInit } from '@angular/core';
import { Tool } from './tool';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.scss']
})
export class ToolListComponent implements OnInit {

  tools: Tool[] = [
    {
      name:"taladro stanley",
      description:"funcionando",
      price:6500,
      stock:245,
      image:"assets/img/stanley/taladro-rotacion.jpg",
      clearance : false,
    },
    {
      name:"taladro ion litio stanley",
      description:"funcionando",
      price:8500,
      stock:25,
      image:"assets/img/stanley/taladro-ion-litio.jpg",
      clearance:true,
    },
    {
      name:"taladro de banco stanley",
      description:"funcionando",
      price:12000,
      stock:0,
      image:"assets/img/stanley/taladro-banco-stanley.jpg",
      clearance:false,
    },
    {
      name:"taladro inalambrico black-decker",
      description:"funcionando",
      price:9000,
      stock:10,
      image:"assets/img/black-decker/taladro-inalambrico.jpg",
      clearance:false,
    },
    {
      name:"taladro percutor 550 black-decker",
      description:"funcionando",
      price:7000,
      stock:9,
      image:"assets/img/black-decker/taladro-percutor-550w.jpg",
      clearance:true,
    },
    {
      name:"taladro rotacion black-decker",
      description:"funcionando",
      price:12000,
      stock:0,
      image:"assets/img/black-decker/taladro-rotacion.jpg",
      clearance:false,
    },
    {
      name:"atornillador drywall bosch",
      description:"funcionando",
      price:12000,
      stock:18,
      image:"assets/img/bosch/atornillador-drywall.jpg",
      clearance:false,
    },
    {
      name:"taladro gsb 13re bosch",
      description:"funcionando",
      price:15000,
      stock:49,
      image:"assets/img/bosch/taladro-gsb-13-re.jpg",
      clearance:false,
    },
    {
      name:"taladro gsr 180 bosch",
      description:"funcionando",
      price:12500,
      stock:49,
      image:"assets/img/bosch/atornillador-gsr-180.jpg",
      clearance:true,
    },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
