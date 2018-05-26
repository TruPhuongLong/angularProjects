import { Component } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  items;
  initItems(){
    this.items = [
      {id: 1, header: 'Victory1', footer: 'regard1', content: 'this is fun day!!!'},
      {id: 2, header: 'Victory2', footer: 'regard2', content: 'this is fun day!!!'},
      {id: 3, header: 'Victory3', footer: 'regard3', content: 'this is fun day!!!'},
      {id: 4, header: 'Victory4', footer: 'regard4', content: 'this is fun day!!!'},
      {id: 5, header: 'Victory5', footer: 'regard5', content: 'this is fun day!!!'},
      {id: 6, header: 'Victory6', footer: 'regard6', content: 'this is fun day!!!'},
      {id: 7, header: 'Victory7', footer: 'regard7', content: 'this is fun day!!!'},
      {id: 8, header: 'Victory8', footer: 'regard8', content: 'this is fun day!!!'},
      {id: 9, header: 'Victory9', footer: 'regard9', content: 'this is fun day!!!'},
    ]
  }

  constructor() {
    this.initItems();
  }

  addCard(){
    console.log('add card')
  }

  _onCancel(){
    console.log('list screen cancel');
    document.getElementById('cardFormModal')
  }

  _onSubmit(form){
    console.log(form);
    this.items = [...this.items, form]
  }
}
