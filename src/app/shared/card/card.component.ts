import { Component, Input } from '@angular/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input('cardDetails') cardDetails:any;

  constructor(private service:HeaderService){

  }

  updateCart(item:any){
    this.service.updateCart(item);
  }

}
