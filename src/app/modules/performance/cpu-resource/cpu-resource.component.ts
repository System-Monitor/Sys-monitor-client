import { Component, OnInit } from '@angular/core';
import {environment} from '@environments/environment';

@Component({
  selector: 'app-cpu-resource',
  templateUrl: './cpu-resource.component.html',
  styleUrls: [
    '../resource.component.scss',
    './cpu-resource.component.scss'
  ]
})
export class CpuResourceComponent implements OnInit {
  graphTheme = environment.graphThemes.cpu;

  constructor() { }

  ngOnInit() {
  }

}
