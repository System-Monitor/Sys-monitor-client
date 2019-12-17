import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceComponent } from './performance.component';
import {PerformanceRoutingModule} from '@modules/performance/performance.routing';
import { PerformanceNavBarComponent } from './performance-nav-bar/performance-nav-bar.component';
import { PerformanceNavBarItemComponent } from './performance-nav-bar/performance-nav-bar-item/performance-nav-bar-item.component';
import { CpuResourceComponent } from './cpu-resource/cpu-resource.component';
import { MemoryResourceComponent } from './memory-resource/memory-resource.component';
import { WifiResourceComponent } from './wifi-resource/wifi-resource.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [
    PerformanceComponent,
    PerformanceNavBarComponent,
    PerformanceNavBarItemComponent,
    CpuResourceComponent,
    MemoryResourceComponent,
    WifiResourceComponent
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    SharedModule
  ]
})
export class PerformanceModule { }
