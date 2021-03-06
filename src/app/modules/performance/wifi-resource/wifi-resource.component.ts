import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {environment} from '@environments/environment';

import {Wifi} from '@models/Wifi';
import {PerformanceWifiService} from '@services/performance-wifi.service';

@Component({
  selector: 'app-wifi-resource',
  templateUrl: './wifi-resource.component.html',
  styleUrls: [
    '../resource.component.scss',
    './wifi-resource.component.scss'
  ]
})
export class WifiResourceComponent implements OnInit, OnDestroy {
  graphTheme = environment.graphThemes.wifi;

  wifi: Wifi;
  wifiSubscription: Subscription;

  receiveSpeedValues: number[];
  receiveSpeedValuesSubscription: Subscription;

  constructor(private performanceWifiService: PerformanceWifiService) { }

  ngOnInit() {
    this.wifiSubscription = this.performanceWifiService.wifiSubject
      .subscribe((wifi: Wifi) => {
        this.wifi = wifi;
      });
    this.receiveSpeedValuesSubscription =
      this.performanceWifiService.wifiReceiveSpeedValuesSubject
        .subscribe((receiveSpeedValues: number[]) => {
          this.receiveSpeedValues = [ ...receiveSpeedValues ];
        });
  }

  ngOnDestroy(): void {
    this.wifiSubscription.unsubscribe();
    this.receiveSpeedValuesSubscription.unsubscribe();
  }
}
