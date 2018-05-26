import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  // cardForm:
  cardForm: FormGroup;
  initCardForm() {
    this.cardForm = this.fb.group({
      header: ['', Validators.required],
      content: ['', Validators.required],
      footer: ['', Validators.required],
    })
  }

  //array for create template:
  arrLoopRenderForm = [
    {label: 'Header: ', placeholder: '@Header input', formControlName: 'header'},
    {label: 'Content: ', placeholder: '@Content input', formControlName: 'content'},
    {label: 'Footer: ', placeholder: '@Footer input', formControlName: 'footer'},
  ]

  //output of cardForm:
  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.initCardForm();
  }

  formCancel(){
    // console.log('cancel')
    this.onCancel.emit();
  }

  formSubmit() {
    // console.log('form submit' + JSON.stringify(this.cardForm.value))
    this.onSubmit.emit(this.cardForm.value);
  }

}
