import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

import { TplFormControl } from '../../../models/tpl-form-control';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Input() tplFormControl: TplFormControl;
  
  // use default for hide error in browser: it not importance:
  defaultFormControl = new FormControl(); 
}

