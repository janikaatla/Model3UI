import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxCheckboxComponent } from 'ngx-checkbox';
import { ApexNonAxisChartSeries,ApexResponsive, ApexChart } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-application-board',
  templateUrl: './application-board.component.html',
  styleUrls: ['./application-board.component.scss']
})
export class ApplicationBoardComponent {

  checkbox1 = false;
  checkbox2 = false;
  clicked = false;
  showMessage1 = false;
  showMessage: boolean = false;

  @Input() activeMenu: (args: any) => boolean = () => {
    return true
  };

  @Input() menu?: any[] =
  [{
    id: 1,
    class: 'orkoSideIcon',
    link: ['/dashboard/orko-form'],
    Title: 'orko',
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


];

checkClick(event:any){
  this.checkbox1 = event;
console.log('check event',this.checkbox1)
}

onShowMessage(event:any) {
  this.showMessage = !this.showMessage;
  this.showMessage1 = !this.showMessage1;

}
onSetCheckBox() {
  // Set 'checked' or 'no-checked'
     this.clicked = !this.clicked;
}

constructor() { }



fix:Boolean=false;

Fixopen(){
this.fix=true;
}
Fixclose(){
  this.fix=false;
}


ngOnInit(): void {
}


}
