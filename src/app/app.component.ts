import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApexNonAxisChartSeries,ApexResponsive, ApexChart } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orko-module-3';


  @Input() activeMenu: (args: any) => boolean = () => {
    return true
  };

  @Input() menu?: any[] =
  [{
    id: 1,
    class: 'orkoSideIcon',
    link: ['/dashboard/orko-form'],
    Title: 'orkoSideIcon',
  },
  {
    id: 2,
    class: 'bi bi-bar-chart',
    link: ['/dashboard/user'],
    Title: 'Add Collaborator',

  },
  {
    id: 3,
    class: 'bi bi-people',
    link: ['/dashboard/add-team'],
    Title: 'add',

  },
  {
    id: 4,
    class: 'bi bi-chat-right-dots',
    link: ['/dashboard/chat'],
    Title: 'chat',

  },
  {
    id: 5,
    class: 'bi bi-box-arrow-right',
    link: ['/dashboard/logout'],
    Title: 'logout',
  },

  ]

}
