import { Component, OnInit } from '@angular/core';
import {ObservableMedia} from '@angular/flex-layout';

@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.css']
})
export class Page9Component implements OnInit {
  defaultbg:string = "mediumslateblue";
  appbg: any;

  constructor(public media: ObservableMedia ) { }

  ngOnInit() {

    this.appbg = {'background' : 'mediumslateblue'};

    this.media.subscribe((data) => {
      console.log(data);

      if(data.mqAlias === 'xs'){
        this.appbg.background = 'gold';
      } else if(data.mqAlias === 'sm'){
        this.appbg.background = 'chocolate';
      } else if(data.mqAlias === 'md'){
        this.appbg.background = '#009688';
      }  else {
        this.appbg.background = this.defaultbg;
      }

    });
  }

}
