import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

import {Cpu} from '@models/Cpu';

@Injectable({
  providedIn: 'root'
})
export class PerformanceCpuService {
  cpuSubject = new BehaviorSubject<Cpu>({
    BaseSpeedInGHz: 0,
    L1CacheInKB: 0,
    L2CacheInKB: 0,
    L3CacheInKB: 0,
    Name: 'Loading...',
    NumberOfCores: 0,
    NumberOfLogicalProcessors: 0,
    NumberOfProcesses: 0,
    SpeedInGHz: 0,
    Utilization: 0
  });

  constructor(private http: HttpClient) { }

  syncUpCpuPerformance() {
    const { BaseUrl, FirebaseProjectId, CpuRoute } = environment.syncInfo;
    const URL = BaseUrl.replace('<FIREBASE_PROJECT_ID>', FirebaseProjectId);

    this.http.get(URL + CpuRoute)
      .subscribe((cpu: Cpu) => {
        this.cpuSubject.next(cpu);
      });
  }
}
