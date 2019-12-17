import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {NotFoundComponent} from '@shared/not-found/not-found.component';


const routes: Routes = [
  { path: 'processes', loadChildren: () => import('@modules/processes/processes.module')
                                            .then(module => module.ProcessesModule) },
  { path: 'performance', loadChildren: () => import('@modules/performance/performance.module')
                                            .then(module => module.PerformanceModule) },
  { path: 'services', loadChildren: () => import('@modules/services/services.module')
                                            .then(module => module.ServicesModule) },
  { path: '', redirectTo: '/processes', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
