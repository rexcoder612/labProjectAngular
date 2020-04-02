import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {

  @Input() intent: any;
  constructor() { }

  ngOnInit() {
    console.log(this.intent);
  }

}
