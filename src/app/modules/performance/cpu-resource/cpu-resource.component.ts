import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Cpu} from '@models/Cpu';
import {PerformanceCpuService} from '@services/performance-cpu.service';
import {environment} from '@environments/environment';

@Component({
  selector: 'app-cpu-resource',
  templateUrl: './cpu-resource.component.html',
  styleUrls: [
    '../resource.component.scss',
    './cpu-resource.component.scss'
  ]
})
export class CpuResourceComponent implements OnInit, OnDestroy {
  graphTheme = environment.graphThemes.cpu;

  cpu: Cpu;
  cpuSubscription: Subscription;

  utilizationValues: number[];
  utilizationValuesSubscription: Subscription;

  constructor(private performanceCpuService: PerformanceCpuService) { }

  ngOnInit() {
    this.cpuSubscription = this.performanceCpuService.cpuSubject.subscribe((cpu: Cpu) => {
      this.cpu = cpu;
    });
    this.utilizationValuesSubscription = this.performanceCpuService.utilizationSubject
      .subscribe((utilizationValues: number[]) => {
        this.utilizationValues = [ ...utilizationValues ];
      });
  }

  ngOnDestroy(): void {
    this.cpuSubscription.unsubscribe();
    this.utilizationValuesSubscription.unsubscribe();
  }
}
