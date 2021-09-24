import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
            <app-employees></app-employees>`,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
}
