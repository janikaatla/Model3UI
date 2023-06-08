import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  tools = false
  
  constructor(){

  }

tool(){
  this.tools = true;
  document.getElementById('tools')
  
}

}
