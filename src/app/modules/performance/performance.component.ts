import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {environment} from '@environments/environment';

import {PerformanceCpuService} from '@services/performance-cpu.service';
import {PerformanceMemoryService} from '@services/performance-memory.service';
import {PerformanceWifiService} from '@services/performance-wifi.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit, OnDestroy {
  syncInterval;
  syncDurationInMilliSeconds = environment.syncInfo.syncAfterEveryMilliSeconds;

  constructor(private performanceCpuService: PerformanceCpuService,
              private performanceMemoryService: PerformanceMemoryService,
              private performanceWifiService: PerformanceWifiService) { }

  ngOnInit() {
    this.syncInterval = setInterval(() => {
      this.performanceCpuService.syncUpCpuPerformance();
      this.performanceWifiService.syncUpWifiPerformance();
      this.performanceMemoryService.syncUpMemoryPerformance();
    }, this.syncDurationInMilliSeconds);
  }

  ngOnDestroy(): void {
    clearInterval(this.syncInterval);
  }

}
