import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {
  
  constructor() {
     setInterval (() => {
            this.gaugevalue = Math.floor((Math.random() * 2000) + 1);
      }, 7000);
   }

  ngOnInit() {
  }

}