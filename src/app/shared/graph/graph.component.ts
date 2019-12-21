import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {CanvasManager} from '@shared/graph/canvas.manager';
import {environment} from '@environments/environment';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: false }) canvasElementRef: ElementRef<HTMLCanvasElement>;
  @ViewChild('parent', { static: false }) parentElementRef: ElementRef<HTMLDivElement>;

  @Input() graphTheme = environment.graphThemes.cpu;
  @Input() borderWidth = 3;
  @Input() valuesConnectorLineWidth = 2;

  @Input() values: number[] = [26, 15, 20, 45, 50, 90];

  canvas: HTMLCanvasElement;
  canvasManager: CanvasManager;

  graphWidth: number;
  graphHeight: number;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.initializeCanvas();
    this.render();
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initializeCanvas();
    this.render();
  }

  initializeCanvas() {
    this.canvas = this.canvasElementRef.nativeElement;

    const { clientHeight, clientWidth } = this.parentElementRef.nativeElement;

    this.canvas.height = this.graphHeight = clientHeight;
    this.canvas.width = this.graphWidth = clientWidth;

    this.canvasManager = new CanvasManager(this.canvas);
  }

  render() {
    this.renderOutline();
    this.renderGrid();
    this.renderValuesLine();
    this.colorValuesArea();
  }

  renderOutline() {
    this.canvasManager.drawOutlineRect(
      0, 0, this.canvas.width, this.canvas.height, this.borderWidth, this.graphTheme.lineColor
    );
  }

  renderGrid() {
    // Horizontal lines
    const horizontalLineDistance = this.graphHeight / 10;
    for (let i = 1; i <= 9; i++) {
      this.canvasManager.drawLine(0, i * horizontalLineDistance,
        this.graphWidth, i * horizontalLineDistance, 1, this.graphTheme.gridColor);
    }

    // Vertical lines
    const verticalLineDistance = this.graphWidth / 10;
    for (let i = 1; i <= 9; i++) {
      this.canvasManager.drawLine(i * verticalLineDistance, 0,
        i * verticalLineDistance, this.graphHeight, 1, this.graphTheme.gridColor);
    }
  }

  renderValuesLine() {
    const horizontalLineDistance = this.graphWidth / 10;
    const verticalLineDistance = this.graphHeight / 10;

    let previousPointX = this.graphWidth - horizontalLineDistance * (this.values.length - 1);
    let previousPointY = this.graphHeight - this.values[0] * verticalLineDistance / 10;

    for (let i = 1; i < this.values.length; i++) {
      const currentPointX = this.graphWidth - horizontalLineDistance * (this.values.length - 1 - i);
      const currentPointY = this.graphHeight - this.values[i] * verticalLineDistance / 10;

      this.canvasManager.drawLine(previousPointX, previousPointY,
        currentPointX, currentPointY, this.valuesConnectorLineWidth, this.graphTheme.lineColor);

      previousPointX = currentPointX;
      previousPointY = currentPointY;
    }

  }

  colorValuesArea() {
    const horizontalLineDistance = this.graphWidth / 10;
    const verticalLineDistance = this.graphHeight / 10;

    for (let i = 0; i < this.values.length - 1; i++) {
      const x1 = this.graphWidth - horizontalLineDistance * (this.values.length - 1 - i);
      const y1 = this.graphHeight - this.values[i] * verticalLineDistance / 10;

      const x2 = this.graphWidth - horizontalLineDistance * (this.values.length - 1 - i - 1);
      const y2 = this.graphHeight - this.values[i + 1] * verticalLineDistance / 10;

      this.canvasManager.drawFilledPolygon([
        { x: x1, y: y1 },
        { x: x2, y: y2 },
        { x: x2, y: this.graphHeight },
        { x: x1, y: this.graphHeight }
      ], this.graphTheme.areaColor);
    }
  }
}
