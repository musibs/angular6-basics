import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {


  dateMessage: string;

  constructor() {
    setInterval( () => {
      let curentDate = new Date();
      this.dateMessage =  curentDate.toDateString()+' '+curentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {
  }

}
