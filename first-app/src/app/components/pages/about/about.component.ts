import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  viewProviders: [ApiService]
})
export class AboutComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
