import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  cardForm: FormGroup;
  initCardForm() {
    this.cardForm = this.fb.group({
      header: '',
      content: '',
      footer: '',
    })
  }
  constructor(private fb: FormBuilder) {
    this.initCardForm();
  }

  formSubmit() {
    console.log('form submit')
  }
}
