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
  cpuUtilizationValues: number[];
  cpuSubscription: Subscription;
  cpuUtilizationValuesSubscription: Subscription;

  wifi: Wifi;
  wifiReceiveSpeedValues: number[];
  wifiSubscription: Subscription;
  wifiReceiveSpeedValuesSubscription: Subscription;

  memory: Memory;
  memoryUsageValues: number[];
  memorySubscription: Subscription;
  memoryUsageValuesSubscription: Subscription;

  constructor(private performanceCpuService: PerformanceCpuService,
              private performanceWifiService: PerformanceWifiService,
              private performanceMemoryService: PerformanceMemoryService) { }

  ngOnInit() {
    this.cpuSubscription = this.performanceCpuService.cpuSubject
      .subscribe((cpu: Cpu) => {
        this.cpu = cpu;
      });
    this.cpuUtilizationValuesSubscription = this.performanceCpuService.utilizationSubject
      .subscribe((utilizationValues: number[]) => {
        this.cpuUtilizationValues = [ ...utilizationValues ];
      });

    this.wifiSubscription = this.performanceWifiService.wifiSubject
      .subscribe((wifi: Wifi) => {
        this.wifi = wifi;
      });
    this.wifiReceiveSpeedValuesSubscription = this.performanceWifiService.wifiReceiveSpeedValuesSubject
      .subscribe((receiveSpeedValues: number[]) => {
        this.wifiReceiveSpeedValues = [ ...receiveSpeedValues ];
      });

    this.memorySubscription = this.performanceMemoryService.memorySubject
      .subscribe((memory: Memory) => {
        this.memory = memory;
      });
    this.memoryUsageValuesSubscription = this.performanceMemoryService.memoryUsageSubject
      .subscribe((memoryUsageValues: number[]) => {
        this.memoryUsageValues = [ ...memoryUsageValues ];
      });
  }

  ngOnDestroy(): void {
    this.cpuSubscription.unsubscribe();
    this.cpuUtilizationValuesSubscription.unsubscribe();

    this.wifiSubscription.unsubscribe();
    this.wifiReceiveSpeedValuesSubscription.unsubscribe();

    this.memorySubscription.unsubscribe();
    this.memoryUsageValuesSubscription.unsubscribe();
  }

}
