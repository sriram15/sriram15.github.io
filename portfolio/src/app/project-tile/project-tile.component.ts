import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {

  @Input() side: string;
  @Input() src: string;
  constructor() { }

  ngOnInit() {
  }

}
