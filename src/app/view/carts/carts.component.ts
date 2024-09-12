import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeaderService } from 'src/app/shared/card/services/header.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent {


  quantity = new FormControl();

  constructor(public service:HeaderService){}


  incrementQuantity(item:any,quantity:number){
    this.service.updateQuantity(item,quantity+1);
  }

  decrementQuantity(item:any,quantity:number){
    this.service.updateQuantity(item,quantity-1);
  }

  removeItem(item:any){
    this.service.removeFromCart(item);
  }
}
