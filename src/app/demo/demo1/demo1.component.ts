import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {
  bananas = 0;
  full = false;
  item = "";
  bad = false;

  onGiveBanana() {
    this.bad = false;
    if (this.item === 'banana') {
      this.bananas = this.bananas + 1;
    } else {
      this.bad = true;
    }
    if (this.bananas >= 10) {
      this.full = true;
    }
  }
}
