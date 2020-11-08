import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer-range',
  templateUrl: './input-integer-range.component.html',
  styleUrls: ['./input-integer-range.component.scss']
})
export class InputIntegerRangeComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

   ngOnInit(): void {
  }


  upQuantity(): void {
    if (this.quantity < this.max)
      this.quantity++;
      this.quantityChange.emit(this.quantity);
  }

  downQuantity(): void {
    if (this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
  }
}
