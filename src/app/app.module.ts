import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { HttpConfigInterceptor } from './core/interceptor/http-config.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    })
  ],
  providers: [
    { 
      provide:HTTP_INTERCEPTORS,
      useClass:HttpConfigInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
