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

  constructor(private http: HttpClient) { }

  syncUpWifiPerformance() {
    const { BaseUrl, FirebaseProjectId, WifiRoute } = environment.syncInfo;
    const URL = BaseUrl.replace('<FIREBASE_PROJECT_ID>', FirebaseProjectId);

    this.http.get(URL + WifiRoute)
      .subscribe((wifi: Wifi) => {
        this.wifiSubject.next(wifi);
      });
  }
}
