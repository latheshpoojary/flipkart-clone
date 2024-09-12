import { computed, Injectable, signal } from '@angular/core';


interface CartItem {
  name:string,
  image:string,
  price:number,
  quantity:number,
  type:string
}
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  cartItems = signal<CartItem[]>([]);

  total = computed(()=>this.cartItems().reduce((acc,item)=>
    acc + (item.price * Number(item.quantity)),0
  ))

  constructor() { }

  updateCart(selectedItem:any){
    this.cartItems.update(item => [...item,{
      name: selectedItem.name,
      image: selectedItem.image,
      price: selectedItem.price,
      type:selectedItem.productType,
      quantity:1
    }]);  
    console.log(this.total(),this.cartItems());
    
  }

  removeFromCart(selectedItem:any){
    this.cartItems.update(item=>item.filter(item=>item.name !== selectedItem.name));
  }

  updateQuantity(cartItem:any,quantity:number){
    this.cartItems.update(item=>item.map(item=>item.name === cartItem.name ? {...item,quantity:quantity} : item))
  }


}
