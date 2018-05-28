import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listUser;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUserPlaceholder()
    .then(data => this.listUser = data)
    .catch(error => console.log(error));
  }

}
