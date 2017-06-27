import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {

  @Input() side: string;
  @Input() project;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewMore(){
    this.router.navigate(['/project', this.project.id])
  }

}
