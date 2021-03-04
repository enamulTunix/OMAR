import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
import * as c3 from 'c3';
import {NgbDateStruct,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';


export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}
@Component({
  selector: 'app-revenue-management',
  templateUrl: './revenue-management.component.html',
  styleUrls: ['./revenue-management.component.scss']
})
export class RevenueManagementComponent implements OnInit {
  model: NgbDateStruct;
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  constructor(private modalService: NgbModal, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
  }

  // Barchart
  barChart: Chart = {
    type: 'Bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [[50, 40, 30, 70, 50, 20, 30]]
    },
    options: {
        height: 290,
        chartPadding: {
            top: 15,
            left: -25
        },
        axisX: {
            showLabel: true,
            showGrid: false
        },
        axisY: {
            showLabel: false,
            showGrid: false
        },
        fullWidth: true
    }
};

// Line chart
lineChart: Chart = {
    type: 'Line',
    data: {
        labels: ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
        series: [[2, 0, 5, 2, 5, 2]]
    },
    options: {
        showArea: true,
        showPoint: false,

        chartPadding: {
            left: -35
        },
        axisX: {
            showLabel: true,
            showGrid: false
        },
        axisY: {
            showLabel: false,
            showGrid: true
        },
        fullWidth: true
    }
};

ngAfterViewInit() {
    const chart2 = c3.generate({
        bindto: '#product-sales',
        data: {
            columns: [
                ['user', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                // ['Ipad', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3]
            ],
            type: 'spline'
        },
        axis: {
            y: {
                show: true,
                tick: {
                    count: 0,
                    outer: false
                }
            },
            x: {
                show: true
            }
        },
        padding: {
            top: 40,
            right: 10,
            bottom: 40,
            left: 20
        },
        point: {
            r: 0
        },
        legend: {
            hide: false
        },
        color: {
            pattern: ['#fbb03b']
        }
    });
    const chart = c3.generate({
      bindto: '#income',
      data: {
        columns: [
          ['Growth Income', 100, 200, 300, 300, 400, 200],
          ['Net Income', 130, 100, 440, 200, 320, 100]
        ],
        type: 'bar'
      },
      bar: {
        space: 0.2,
        // or
        width: 15 // this makes bar width 100px
      },
      axis: {
        y: {
          tick: {
            count: 3,
            outer: false
          }
        }
      },
      legend: {
        hide: true
        // or hide: 'data1'
        // or hide: ['data1', 'data2']
      },
      grid: {
        x: {
          show: false
        },
        y: {
          show: true
        }
      },
      size: {
        height: 270
      },
      color: {
        pattern: ['#fbb03b', '#ccc']
      }
    });
  
    const chart3 = c3.generate({
      bindto: '#sales',
      data: {
        columns: [['One+', 50], ['T', 60], ['Samsung', 10]],
  
        type: 'donut'
      },
      donut: {
        label: {
          show: false
        },
        title: '',
        width: 18
      },
      size: {
        height: 150
      },
      legend: {
        hide: true
        // or hide: 'data1'
        // or hide: ['data1', 'data2']
      },
      color: {
        pattern: ['#ffffff', '#fbb03b', '#24d2b5', '#20aee3']
      }
    });
    // ==============================================================
    // Sales Prediction
    // ==============================================================
  
    const chart4 = c3.generate({
      bindto: '#prediction',
      data: {
        columns: [['data', 91.4]],
        type: 'gauge'
      },
  
      color: {
        pattern: ['#20aee3', '#20aee3', '#20aee3', '#24d2b5'], // the three color levels for the percentage values.
        threshold: {
          //            unit: 'value', // percentage is default
          //            max: 200, // 100 is default
          values: [30, 60, 90, 100]
        }
      },
      gauge: {
        width: 22
      },
      size: {
        height: 120,
        width: 150
      }
    });
}
 // This is line chart
// bar chart
public lineChartLegend = true;
public lineChartType = 'line';

// events
public chartClicked(e: any): void {
// console.log(e);
}

public chartHovered(e: any): void {
// console.log(e);
}
public barChartOptions: any = {
scaleShowVerticalLines: false,
responsive: true,
barThickness: 10
};

public barChartLabels: string[] = [
'Jan',
'Feb',
'Mar',
'April',
'May',
'June',
'July',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec',
];
public barChartType = 'bar';
public barChartLegend = true;

public barChartData: any[] = [ 
{ data: [65, 59, 80, 81, 56, 55, 40, 65, 64, 2, 3, 55], label: 'Bike' },
];
public barChartColors: Array<any> = [
{ backgroundColor: '#fbb03b' }
];

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 39, 80, 15, 76, 35, 40], label: 'Profit Per Month' },
    // { data: [18, 58, 20, 69, 16, 27, 90], label: 'Series B' }
  ];
//   user
public lineChartLabels: Array<any> = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July'
];
public barChartLabels1: string[] = [
'Sun',
'Mon',
'Tue',
'Thus',
'Fri',
'Sat',
];
public barChartColors1: Array<any> = [
{ backgroundColor: '#fbb03b' }
];
public lineChartOptions: any = {
  responsive: true
};
public lineChartColors: Array<any> = [
  {
    // grey
    backgroundColor: 'rgba(54,190,166,.1)',
    borderColor: '#fbb03b',
    pointBackgroundColor: '#fbb03b',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#fbb03b'
  },
  {
    // dark grey
    backgroundColor: 'rgb(41,98,255,.1)',
    borderColor: '#2962FF',
    pointBackgroundColor: '#2962FF',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#2962FF'
  }
];
openWindowCustomClass(content3) {
  this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
onDateSelection(date: NgbDate) {
  if (!this.fromDate && !this.toDate) {
    this.fromDate = date;
  } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
    this.toDate = date;
  } else {
    this.toDate = null;
    this.fromDate = date;
  }
}

isHovered(date: NgbDate) {
  return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
}

isInside(date: NgbDate) {
  return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
}

isRange(date: NgbDate) {
  return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
}

validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
  const parsed = this.formatter.parse(input);
  return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
}
}
