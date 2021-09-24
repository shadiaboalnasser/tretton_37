import { Component } from "@angular/core";
  
  @Component({
    selector: "app-header",
    template: `
    <header class="header">
        <img src="./assets/tretton_37.jpg" alt="tretton_37">
    </header>
  `,
    styles: [`
    .header 
        background-color: white
        height: 75px
        text-align: center
    
    img
        width: 100%
        min-width: 100px
        max-width: 325px
        max-height: 75px
  `]
  })
  
  export class HeaderComponent {}
