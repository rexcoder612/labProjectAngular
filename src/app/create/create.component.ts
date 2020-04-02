import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  isVisible: boolean = true;
  newIntent: any;
  synonymsList: any;
  arr: any;
  storeIntent: any;
  retrievedObject: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.newIntent = {
      pattern: "",
      synonyms: []
    };
  }

  repeat(s, n, d) {
      return --n ? s + (d || "") + this.repeat(s, n, d) : "" + s;
  };

  synonymSuggestions(somePattern){
    this.synonymsList = this.repeat(somePattern, 5, ",").toString();
    this.arr = this.synonymsList.split(',');
    this.arr.forEach((element, index) => {
      this.arr[index] = element + "-" + index;
    });
  }

  checkedYes(someSyn){
    this.newIntent.synonyms.push(someSyn);
  }

  saveIntent(){
    this.storeIntent = this.newIntent;
    console.log(this.storeIntent);
    localStorage.setItem('this.storeIntent', JSON.stringify(this.storeIntent));
    //this.retrievedObject = localStorage.getItem('this.storeIntent');
    //console.log('retrievedObject: ', JSON.parse(this.retrievedObject));
    //this.router.navigate(['/display-table']);
  }
}

