import {Component, Input, OnInit} from '@angular/core';
import {environment} from '@environments/environment';

@Component({
  selector: 'app-performance-nav-bar-item',
  templateUrl: './performance-nav-bar-item.component.html',
  styleUrls: ['./performance-nav-bar-item.component.scss']
})
export class PerformanceNavBarItemComponent implements OnInit {
  @Input() heading = 'Heading';
  @Input() routerLinkUrl = '#';

  @Input() graphTheme = environment.graphThemes.cpu;

  constructor() { }

  ngOnInit() {
  }

}
