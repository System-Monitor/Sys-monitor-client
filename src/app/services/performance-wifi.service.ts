import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

import {environment} from '@environments/environment';

import {Wifi} from '@models/Wifi';

@Injectable({
  providedIn: 'root'
})
export class PerformanceWifiService {
  wifiSubject = new BehaviorSubject<Wifi>({
    ConnectionType: 'Loading...',
    IPv4_Address: 'Loading...',
    IPv6_Address: 'Loading...',
    Name: 'Loading...',
    NetworkName: 'Loading...',
    ReceiveSpeedInKBPS: 0,
    SendSpeedInKBPS: 0,
    SignalStrength: 0
  });

  private wifiReceiveSpeedValues: number[] = [];
  wifiReceiveSpeedValuesSubject = new BehaviorSubject<number[]>(this.wifiReceiveSpeedValues);

  constructor(private http: HttpClient) { }

  syncUpWifiPerformance() {
    const { BaseUrl, FirebaseProjectId, WifiRoute } = environment.syncInfo;
    const URL = BaseUrl.replace('<FIREBASE_PROJECT_ID>', FirebaseProjectId);

    this.http.get(URL + WifiRoute)
      .subscribe((wifi: Wifi) => {
        this.wifiSubject.next(wifi);

        this.handleNewWifiSpeedValue(wifi.ReceiveSpeedInKBPS);
        this.wifiReceiveSpeedValuesSubject.next(this.wifiReceiveSpeedValues);
      });
  }

  handleNewWifiSpeedValue(speed: number) {
    this.wifiReceiveSpeedValues.push(speed);

    while (this.wifiReceiveSpeedValues.length > 11) {
      this.wifiReceiveSpeedValues.shift();
    }
  }
}
