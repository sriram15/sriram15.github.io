import { Component, OnInit } from '@angular/core';
import { ProjectTileComponent } from "app/project-tile/project-tile.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  entryComponents: [ProjectTileComponent]
})
export class HomeComponent implements OnInit {

  private showImg = false;
  constructor() { }

  ngOnInit() {
  }

  mouseEnter(ev){
    var imgWidth = ev.srcElement.clientWidth;
    var cursorX = ev.clientX;
    var percent = (cursorX/imgWidth) * 100;
    console.log(percent);
    if(percent > 26 && percent < 30){
      this.showImg = true;
    }else{
      this.showImg = false;
    }
  }

  mouseLeave(){
    this.showImg = false;
  }

}
