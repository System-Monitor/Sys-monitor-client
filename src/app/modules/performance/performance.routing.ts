import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PerformanceComponent} from '@modules/performance/performance.component';
import {CpuResourceComponent} from '@modules/performance/cpu-resource/cpu-resource.component';
import {MemoryResourceComponent} from '@modules/performance/memory-resource/memory-resource.component';
import {WifiResourceComponent} from '@modules/performance/wifi-resource/wifi-resource.component';


const routes: Routes = [  {
    path: '', component: PerformanceComponent,
    children: [
      {path: 'cpu', component: CpuResourceComponent},
      {path: '', redirectTo: 'cpu', pathMatch: 'full'},
      {path: 'memory', component: MemoryResourceComponent},
      {path: 'wifi', component: WifiResourceComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PerformanceRoutingModule {}
