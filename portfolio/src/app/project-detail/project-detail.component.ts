import { ProjectService } from 'app/providers/project/project.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  private project;
  constructor(private projectSvc : ProjectService,private activeRoute: ActivatedRoute, private route: Router) {
    var id = this.activeRoute.snapshot.params['id'];
    console.log(id);
    this.projectSvc.getProjectById(id).then(proj => {
      this.project = proj;
      console.log(this.project);
    }, (err) => {
      console.log(err);
      this.route.navigate(['notfound']);
    });
   }

  ngOnInit() {
  }

}
