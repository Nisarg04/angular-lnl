import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lnl-demo';
  flag=false;
  textOnClick="Default Text!!";
  textName="";

  constructor() {
    setTimeout(() => {
      this.flag=true;
    }, 2000);
  }

  onClickAction() {
    this.textOnClick="Updated Text!!"
  }

}
