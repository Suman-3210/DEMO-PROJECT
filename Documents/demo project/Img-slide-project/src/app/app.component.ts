import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
 

  constructor() {

  }
  no(){
    alert('not intrested !');
  }
  yes(){
    alert('intrested !');
  }

}
