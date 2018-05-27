import {FormControl} from '@angular/forms';

export class TplFormControl {
    constructor(
        public label: string = '',
        public placeholder: string = '@text input',
        public type: string = 'text',
        public formControl: FormControl = new FormControl(),
      ){}
}
