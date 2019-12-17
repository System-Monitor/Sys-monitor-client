import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import {ServicesRoutingModule} from '@modules/services/services.routing';
import {SharedModule} from '@shared/shared.module';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
