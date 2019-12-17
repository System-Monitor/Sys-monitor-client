import { Component, OnInit } from '@angular/core';
import {environment} from '@environments/environment';

@Component({
  selector: 'app-memory-resource',
  templateUrl: './memory-resource.component.html',
  styleUrls: [
    '../resource.component.scss',
    './memory-resource.component.scss'
  ]
})
export class MemoryResourceComponent implements OnInit {

  graphTheme = environment.graphThemes.memory;

  constructor() { }

  ngOnInit() {
  }

}
