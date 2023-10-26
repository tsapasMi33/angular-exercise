import { Component } from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent {
  seconds = 0;
  timerSub: Subscription | undefined

  onPlay() {
    if (this.timerSub) {
      this.onStop();
    }
    this.timerSub =  interval(1000).subscribe(count => {
      this.seconds = ++this.seconds;
    })
  }

  onPause() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }

  onStop() {
    this.onPause();
    this.seconds = 0;
  }

}
