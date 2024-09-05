import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {


  categroies = [
    {
      text:'Grocery',
      image:'../../../assets/images/glocery.webp'
    },
    {
      text:'Mobile',
      image:'../../../assets/images/mobile.webp'
    },
    {
      text:'Fashion',
      image:'../../../assets/images/fashion.webp'
    },
    {
      text:'Electronics',
      image:'../../../assets/images/electronic.webp'
    },
    {
      text:'Home & Furniture',
      image:'../../../assets/images/furniture.webp'
    },
    {
      text:'Appliances',
      image:'../../../assets/images/appliances.webp'
    },
    {
      text:'Travel',
      image:'../../../assets/images/travel.webp'
    },
    {
      text:'Beauty, Toys & More',
      image:'../../../assets/images/toys.webp'
    },
    {
      text:'Two Wheelers',
      image:'../../../assets/images/two-wheelers.webp'
    }
    



  ]

}
