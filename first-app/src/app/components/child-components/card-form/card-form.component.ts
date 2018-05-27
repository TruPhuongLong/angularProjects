import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

import { TplFormControl } from '../../../models/tpl-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  cardForm: FormGroup;
  formArrays: TplFormControl[];

  @Output() onSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // template need this.formArrays instead this.initFormArray() if so it can not type input text.
    this.formArrays = this.initFormArray();
    const [header, content, footer] = this.formArrays.map(tplfc => tplfc.formControl);
    console.log(JSON.stringify(header));
    this.cardForm = this.fb.group({
      header,content, footer,
    });
  }

  initFormArray() {
    return [
      new TplFormControl('Header :', '@entry header', 'tel', new FormControl('', Validators.required)),
      new TplFormControl('Content :', '@entry content', 'text', new FormControl(null, Validators.required)),
      new TplFormControl('Footer :', '@entry footer', 'text', new FormControl(null, Validators.required)),
    ];
  }

  _onSubmit(){
    // console.log(this.cardForm.valid);
    this.onSubmit.emit(this.cardForm.value);
  }
}
