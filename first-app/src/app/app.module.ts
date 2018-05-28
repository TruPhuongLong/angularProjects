import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeModule} from './components/pages/home/home.module';
import {AboutModule} from './components/pages/about/about.module';
import { ListProductModule } from './components/pages/list-product/list-product.module';
import { ServiceModule } from './services/service.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '/', component: HomeComponent},
  {path: '/about', component: AboutComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    HomeModule,
    AboutModule,
    ListProductModule,
    RouterModule.forRoot(routes),  // , {useHash: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } //oke
