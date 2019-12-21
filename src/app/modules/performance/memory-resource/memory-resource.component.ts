import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {environment} from '@environments/environment';

import {Memory} from '@models/Memory';
import {PerformanceMemoryService} from '@services/performance-memory.service';

@Component({
  selector: 'app-memory-resource',
  templateUrl: './memory-resource.component.html',
  styleUrls: [
    '../resource.component.scss',
    './memory-resource.component.scss'
  ]
})
export class MemoryResourceComponent implements OnInit, OnDestroy {
  graphTheme = environment.graphThemes.memory;

  memory: Memory;
  memorySubscription: Subscription;

  constructor(private performanceMemoryService: PerformanceMemoryService) { }

  ngOnInit() {
    this.memorySubscription = this.performanceMemoryService.memorySubject
      .subscribe((memory: Memory) => {
        this.memory = memory;
      });
  }

  ngOnDestroy(): void {
    this.memorySubscription.unsubscribe();
  }

}
