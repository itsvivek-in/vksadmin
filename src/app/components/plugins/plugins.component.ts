import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
declare const $: any;

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.css']
})
export class PluginsComponent implements OnInit {
  chart = [];
  chart2 = [];
  dataModel = 'This is Just a sample text';
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          { 
            data: [28, 24, 26, 27, 29, 33, 48],
            backgroundColor: "#3cba9f",
            borderColor: "#3cba9f",
            fill: false,
            label: 'Electronics'
          },
          { 
            data: [16, 17, 13, 15, 18, 14, 9],
            backgroundColor: "#ffcc00",
            borderColor: "#ffcc00",
            fill: false,
            label: 'Books',
          },
          { 
            data: [8, 35, 45, 19, 54, 16, 23],
            backgroundColor: "#ff3300",
            borderColor: "#ff3300",
            fill: false,
            label: 'Home & Kitchen'
          },
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.chart2 = new Chart('canvas2', {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ["#3cba9f","#ffcc00", "#ff3300"]
        }],
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
      },
      options: {
        legend: {
          display: true
        }
      }
    });

  }

}
