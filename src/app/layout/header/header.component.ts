import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HeaderService } from 'src/app/shared/card/services/header.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  

  constructor(public service:HeaderService){
    
  }

}
