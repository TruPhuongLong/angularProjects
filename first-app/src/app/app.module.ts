import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HomeModule} from './components/pages/home/home.module';
import {AboutModule} from './components/pages/about/about.module';
import { ListProductModule } from './components/pages/list-product/list-product.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    ListProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
