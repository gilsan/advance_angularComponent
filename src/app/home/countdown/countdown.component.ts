import { Component, Input, OnInit, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit ,  OnDestroy, OnChanges{

  @Input() init: number = null;
  @Output() OnDecrease = new EventEmitter<number>();
  @Output() OnComplete = new EventEmitter<void>();

  public counter = 0;
  private countdownTimerRef: any = null;

  constructor() { }

  ngOnInit() {
     this.startCountdown();
  }

  ngOnDestroy() {
    this.clearTimeout();
  }

  ngOnChanges(change: any) {
    console.log(change.init);
    this.startCountdown();

  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
   this.countdownTimerRef = setTimeout(() => {
     this.counter = this.counter - 1;
     this.processCount();
    }, 1000);
  }

  private clearTimeout() {
    if (this.countdownTimerRef) {
     clearTimeout(this.countdownTimerRef);
     this.countdownTimerRef = null;
    }
  }

  processCount() {
    // emit event COUNT
    this.OnDecrease.emit(this.counter);
    console.log('count is ', this.counter);

    if (this.counter === 0) {
      // emit event COUNTER END
      this.OnComplete.emit();
      console.log('---- count end ------' );
    //  this.counter = 10;
    //  this.doCountdown();
    } else {
       this.doCountdown();
    }
  }

}
