import { Component, OnInit } from '@angular/core';

import {PerformanceCpuService} from '@services/performance-cpu.service';
import {PerformanceMemoryService} from '@services/performance-memory.service';
import {PerformanceWifiService} from '@services/performance-wifi.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  constructor(private performanceCpuService: PerformanceCpuService,
              private performanceMemoryService: PerformanceMemoryService,
              private performanceWifiService: PerformanceWifiService) { }

  ngOnInit() {
    this.performanceCpuService.syncUpCpuPerformance();
    this.performanceWifiService.syncUpWifiPerformance();
    this.performanceMemoryService.syncUpMemoryPerformance();
  }

}
