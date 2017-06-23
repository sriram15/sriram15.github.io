import { Component, OnInit } from '@angular/core';
import { ProjectTileComponent } from "app/project-tile/project-tile.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  entryComponents: [ProjectTileComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
