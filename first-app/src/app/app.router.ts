import {Routes} from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ListProductComponent } from './components/pages/list-product/list-product.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'part/listproduct', component: ListProductComponent},
    {path: '**', component: HomeComponent}
]

