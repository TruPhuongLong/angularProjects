import { Component } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  items;
  constructor() {
    this.items = [
      {id: 1, title: 'Victory1', footer: 'regard1', content: 'this is fun day!!!'},
      {id: 2, title: 'Victory2', footer: 'regard2', content: 'this is fun day!!!'},
      {id: 3, title: 'Victory3', footer: 'regard3', content: 'this is fun day!!!'},
      {id: 4, title: 'Victory4', footer: 'regard4', content: 'this is fun day!!!'},
      {id: 5, title: 'Victory5', footer: 'regard5', content: 'this is fun day!!!'},
      {id: 6, title: 'Victory6', footer: 'regard6', content: 'this is fun day!!!'},
      {id: 7, title: 'Victory7', footer: 'regard7', content: 'this is fun day!!!'},
      {id: 8, title: 'Victory8', footer: 'regard8', content: 'this is fun day!!!'},
      {id: 9, title: 'Victory9', footer: 'regard9', content: 'this is fun day!!!'},
    ]
  }

}
