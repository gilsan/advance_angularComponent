import { Component, OnInit , Input , OnDestroy,
  EventEmitter, Output, ChangeDetectionStrategy,
   ChangeDetectorRef} from '@angular/core';
import { TimerService } from '@app/about/timer/timer.service';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {

   @Input() init = 20;
   @Output() OnComplete = new EventEmitter<void>();
   private countdownEndSubscription: Subscription = null;
   private countdownSubscription: Subscription = null;
   public countdown  = 0;

   get progress() {
    // console.log('getting progress...');
     return (this.init - this.countdown) / this.init * 100;
   }
  constructor(private timerService: TimerService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.timerService.restartCountdown(this.init);

    this.countdownEndSubscription = this.timerService.countdownEnd$.subscribe(() => {

      this.OnComplete.emit();
    });

    this.countdownEndSubscription = this.timerService.countdown$
     .subscribe((data) => {
       this.countdown = data;
       this.cdRef.markForCheck();
     });

  }

  ngOnDestroy() {
    this.timerService.destroy();
    this.countdownEndSubscription.unsubscribe();
  }



}
