import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  gaugeType = 'semi';
  gaugeThick = 12;
  gaugevalue = 499;
  gaugethresholds = {
            '0': {color: 'green'},
            '500': {color: 'orange'},
            '1000': {color: 'orangeRed'},
            '1500': {color: 'red'}
        };
  gaugemax = 2000;


  constructor(){


   
  }

}
