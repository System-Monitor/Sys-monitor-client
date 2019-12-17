import { Component, OnInit } from '@angular/core';
import {environment} from '@environments/environment';

@Component({
  selector: 'app-wifi-resource',
  templateUrl: './wifi-resource.component.html',
  styleUrls: [
    '../resource.component.scss',
    './wifi-resource.component.scss'
  ]
})
export class WifiResourceComponent implements OnInit {
  graphTheme = environment.graphThemes.wifi;

  constructor() { }

  ngOnInit() {
  }

}
