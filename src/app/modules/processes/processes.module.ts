import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessesComponent } from './processes.component';
import {ProcessesRoutingModule} from '@modules/processes/processes.routing';



@NgModule({
  declarations: [ProcessesComponent],
  imports: [
    CommonModule,
    ProcessesRoutingModule
  ]
})
export class ProcessesModule { }
