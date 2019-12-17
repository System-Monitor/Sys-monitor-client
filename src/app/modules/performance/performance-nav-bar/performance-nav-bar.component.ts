import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from '@environments/environment';

@Component({
  selector: 'app-performance-nav-bar',
  templateUrl: './performance-nav-bar.component.html',
  styleUrls: ['./performance-nav-bar.component.scss']
})
export class PerformanceNavBarComponent implements OnInit {
  graphThemes = environment.graphThemes;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.activatedRoute.snapshot.firstChild.url[0].path);
  }

}
