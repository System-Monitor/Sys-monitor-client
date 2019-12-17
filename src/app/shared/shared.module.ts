import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GraphComponent} from '@shared/graph/graph.component';
import {NavbarComponent} from '@shared/navbar/navbar.component';
import {NotFoundComponent} from '@shared/not-found/not-found.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    GraphComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  exports: [
    GraphComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
