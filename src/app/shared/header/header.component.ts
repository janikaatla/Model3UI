import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor() { }

  ngOnInit(): void {
  }

  open:boolean=false;

  Open(){
    this.open=true;
  }
  Close(){
    this.open=false;
  }

}
