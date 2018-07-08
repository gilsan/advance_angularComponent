import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Tab } from './tab.interface';
import { TabsComponent } from '../tabs/tabs.component';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

  @Output() OnClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() title: string;
  public isActive = false;
  constructor() { }

  ngOnInit() {

  }

  clickTabContent() {
    this.OnClick.emit();
  }


}
