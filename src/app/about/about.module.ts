import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { TimerComponent } from './timer/timer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DisplayComponent } from './display/display.component';
import { AlertViewComponent } from './alert-view/alert-view.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    AboutRoutingModule,
    FormsModule
  ],
  declarations: [
    AboutComponent,
    TimerComponent,
    ProgressBarComponent,
    DisplayComponent,
    AlertViewComponent,
    TabComponent,
    TabsComponent,
    SimpleAlertViewComponent
  ]
})
export class AboutModule { }
