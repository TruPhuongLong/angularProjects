import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HomeModule} from './components/pages/home/home.module';
import {AboutModule} from './components/pages/about/about.module';
import { ListProductModule } from './components/pages/list-product/list-product.module';
import { ServiceModule } from './services/service.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    HomeModule,
    AboutModule,
    ListProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } //oke
