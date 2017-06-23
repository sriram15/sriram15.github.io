import { Component, OnInit } from '@angular/core';
import { ProjectService } from "app/providers/project/project.service";
import { ProjectTileComponent } from "app/project-tile/project-tile.component";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  entryComponents: [ProjectTileComponent]
})
export class PortfolioComponent implements OnInit {

  allProject: any[];
  currentFilter : any;
  filterChanged: number;
  constructor(private projectSvc: ProjectService) { }

  public filterClicked(name){
    if(name!== 'all'){
      this.currentFilter.category = name;  
    }else{
      this.currentFilter.category = '';
    }
    
    this.filterChanged++;
  }
  ngOnInit() {
    this.currentFilter = {category : ''};
    this.filterChanged = 0;
    this.projectSvc.getProjects().subscribe(res => {
      this.allProject = res;
    })
  }

}
