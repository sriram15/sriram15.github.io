import { Project } from '../../_models/project';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { Http } from "@angular/http";

@Injectable()
export class ProjectService {

  private projects: Project[] = null;
  constructor(private http: Http) {
    
  }

  getProjects(){
    if(this.projects != null){
      return Observable.of(this.projects);
    }else{
      return this.http.get('../assets/projects.json')
        .map(res => res.json())
        .do((data) => {
          this.projects = data;
        });
    }
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
