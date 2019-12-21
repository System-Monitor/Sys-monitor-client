import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

import {environment} from '@environments/environment';
import {Memory} from '@models/Memory';

@Injectable({
  providedIn: 'root'
})
export class PerformanceMemoryService {
  memorySubject = new BehaviorSubject<Memory>({
    AvailableInBytes: 0,
    InUseInBytes: 0,
    TotalInBytes: 0
  });

  constructor(private http: HttpClient) { }

  syncUpMemoryPerformance() {
    const { BaseUrl, FirebaseProjectId, MemoryRoute } = environment.syncInfo;
    const URL = BaseUrl.replace('<FIREBASE_PROJECT_ID>', FirebaseProjectId);

    this.http.get(URL + MemoryRoute)
      .subscribe((memory: Memory) => {
        this.memorySubject.next(memory);
      });
  }
}
