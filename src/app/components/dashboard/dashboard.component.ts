import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
declare const $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {

  chart = [];
  
  constructor() {    

  }

  ngAfterViewInit() {

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          { 
            data: [28, 24, 26, 27, 29, 33, 48],
            borderColor: "#3cba9f",
            fill: false,
            label: 'Electronics'
          },
          { 
            data: [16, 17, 13, 15, 18, 14, 9],
            borderColor: "#ffcc00",
            fill: false,
            label: 'Books',
          },
          { 
            data: [8, 35, 45, 19, 54, 16, 23],
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

  }



}
