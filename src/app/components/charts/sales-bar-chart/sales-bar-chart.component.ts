import { Component } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { SALES } from '../sales';

@Component({
  selector: 'app-sales-bar-chart',
  templateUrl: './sales-bar-chart.component.html',
  styleUrls: ['./sales-bar-chart.component.scss'],
})
export class SalesBarChartComponent {
  title = 'Bar Chart';

  private width: number = 650;
  private height: number = 350;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };

  private x: any;
  private y: any;
  private svg: any;
  private g: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  initSvg() {
    this.svg = d3.select('svg');

    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height =
      +this.svg.attr('height') - this.margin.top - this.margin.bottom;

    this.g = this.svg
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
  }

  initAxis() {
    this.x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);

    this.y = d3.scaleLinear().rangeRound([this.height, 0]);

    this.x.domain(SALES.map((d) => d.month));
    this.y.domain([0, d3.max(SALES, (d) => d.value)]);
  }

  drawAxis() {
    this.g
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(this.x));

    this.g
      .append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(this.y).ticks(10))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', -40)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Sales (units)');
  }

  drawBars() {
    this.g
      .selectAll('.bar')
      .data(SALES)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any) => this.x(d.month))
      .attr('y', (d: any) => this.y(d.value))
      .attr('width', this.x.bandwidth())
      .attr('height', (d: any) => this.height - this.y(d.value));
  }
}
