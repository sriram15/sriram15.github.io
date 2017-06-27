import { Project } from '../../_models/project';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { Http } from "@angular/http";

@Injectable()
export class ProjectService {

  private projects: Project[] = []
  constructor(private http: Http) {
    this.http.get('../assets/projects.json')
        .map(res => res.json())
        .subscribe(data => {
          this.projects = data;console.log(data);
        },
        err => this.projects = []);
  }

  getProjects(){
    return Observable.of(this.projects);
  }

  getProjectById(id){
    var proj = null;
    for(var i=0;i<this.projects.length;i++){
      if(this.projects[i].id == id){
        proj = this.projects[i];
        break;
      }
    }
    return new Promise((resolve, reject) => {
      if(proj != null){
        resolve(proj);
      }else{
        reject('Not Valid id');
      }
    });
  }

}
