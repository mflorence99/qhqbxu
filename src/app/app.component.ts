import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  tabs = [
    { label: 'Tab A', icon: 'fas laptop' },
    { label: 'Tab B', icon: 'fas linux' }
  ];

}
