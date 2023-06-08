import { Component } from '@angular/core';

@Component({
  selector: 'app-orko-form',
  templateUrl: './orko-form.component.html',
  styleUrls: ['./orko-form.component.scss']
})
export class OrkoFormComponent {
  checkbox1 = false; 

  checkClick(event:any){
    this.checkbox1 = event;
  console.log('check event',this.checkbox1)
  }
  
}
