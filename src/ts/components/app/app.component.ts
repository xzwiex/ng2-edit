import { Component } from '@angular/core';

import { Ng2Edit } from '../ng2-edit/ng2-edit.component';

@Component({
  selector: 'my-app',
  template: require('./app.template'),
  directives: [Ng2Edit]
})
export class AppComponent { }