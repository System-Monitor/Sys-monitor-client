import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {environment} from '@environments/environment';

import {Cpu} from '@models/Cpu';
import {Wifi} from '@models/Wifi';
import {Memory} from '@models/Memory';

import {PerformanceCpuService} from '@services/performance-cpu.service';
import {PerformanceWifiService} from '@services/performance-wifi.service';
import {PerformanceMemoryService} from '@services/performance-memory.service';

@Component({
  selector: 'app-performance-nav-bar',
  templateUrl: './performance-nav-bar.component.html',
  styleUrls: ['./performance-nav-bar.component.scss']
})
export class PerformanceNavBarComponent implements OnInit, OnDestroy {
  graphThemes = environment.graphThemes;

  cpu: Cpu;
  cpuSubscription: Subscription;

  wifi: Wifi;
  wifiSubscription: Subscription;

  memory: Memory;
  memorySubscription: Subscription;

  constructor(private performanceCpuService: PerformanceCpuService,
              private performanceWifiService: PerformanceWifiService,
              private performanceMemoryService: PerformanceMemoryService) { }

  ngOnInit() {
    this.cpuSubscription = this.performanceCpuService.cpuSubject
      .subscribe((cpu: Cpu) => {
        this.cpu = cpu;
      });
    this.wifiSubscription = this.performanceWifiService.wifiSubject
      .subscribe((wifi: Wifi) => {
        this.wifi = wifi;
      });
    this.memorySubscription = this.performanceMemoryService.memorySubject
      .subscribe((memory: Memory) => {
        this.memory = memory;
      });
  }

  ngOnDestroy(): void {
    this.cpuSubscription.unsubscribe();
    this.wifiSubscription.unsubscribe();
    this.memorySubscription.unsubscribe();
  }

}
