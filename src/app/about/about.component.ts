import { Component, OnInit, ViewChildren ,
  AfterContentInit,
  QueryList,
  AfterViewInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  Renderer2} from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';
import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterContentInit, AfterViewInit {

  version: string = environment.version;
  public isAddTimerVisible  = false;
  // public isEndTimerAlertVisible = false;
  public time = 0;
  public timers: Array<number> = [];
  constructor(private cdRef: ChangeDetectorRef,
  private renderer: Renderer2) {
    this.timers = [3, 20, 185];
   }
  @ViewChildren(SimpleAlertViewComponent) alerts: QueryList<SimpleAlertViewComponent>;
  @ViewChild('timerInput') timeInput: ElementRef;
  ngOnInit() { }

  logCountdownEnd() {
    console.log('==== Countdown End =======');
  }

  ngAfterViewInit() {

    this.renderer.setAttribute(this.timeInput.nativeElement, 'placeholder', 'enter number');
    this.renderer.addClass(this.timeInput.nativeElement, 'tiem-in');
   // this.timeInput.nativeElement.setAttribute('placeholder', 'enter number');
  //  this.timeInput.nativeElement.classList.add('time-in');
    this.alerts.forEach((item) => {
         if (!item.title) {
           item.title = 'Hi';
           item.message = 'Hellow World';
         }
    });
    this.cdRef.detectChanges();
  }

  ngAfterContentInit() {


    // this.alert.show();
    // this.alert.title="Hi";
    // this.alert.message = "message";
  }

  public showAddTimer() {
     this.isAddTimerVisible = true;
     setTimeout(() => {
       this.renderer.selectRootElement(this.timeInput.nativeElement).focus();
       // this.timeInput.nativeElement.focus();
     });
  }

  public hideAddTimer() {
    this.isAddTimerVisible = false;
 }

 public showEndTimerAlert() {
   this.alerts.first.show();
  // TODO endTimerAlert.show()
  // this.isEndTimerAlertVisible = true;
 }

// public hideEndTimerAlert() {
//  this.isEndTimerAlertVisible = false;
//}

 public submitAddTimer() {
   this.timers.push(this.time);
   this.hideAddTimer();
 }
}
