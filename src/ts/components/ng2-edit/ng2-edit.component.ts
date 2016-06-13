import { Component } from '@angular/core';
import { ContentEditable } from '../content-editable/content-editable.component';

@Component({
  selector: 'ng2-edit',
  template: require('./ng2-edit.template'),
  directives: [ContentEditable]
})
export class Ng2Edit { 
    text: String;

    constructor() {
        this.text = 'Ng2Editor initialized';
    }
}