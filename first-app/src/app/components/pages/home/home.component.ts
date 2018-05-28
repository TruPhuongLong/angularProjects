import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import 'rxjs/Rx';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data;
  searchField;
  loading;

  constructor(public apiService: ApiService, private router: Router) { console.log('home constructor')}

  ngOnInit() {
      this.searchField = new FormControl();
      this.data = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do( () => this.loading = true)
      .switchMap( term => this.apiService.search(term))
      .do( () => this.loading = false )
  }

  navigateAbout(){
    this.router.navigate(['about'])
  }

}
