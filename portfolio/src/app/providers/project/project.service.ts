import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class ProjectService {

  private projects = []
  constructor() { 
    this.projects = [
      {srcUrl: 'http://lorempixel.com/400/200', description: 'Test description.....',category: 'web'},
      {srcUrl: 'http://lorempixel.com/400/200', description: 'Test description.....',category: '3d'},
      {srcUrl: 'http://lorempixel.com/400/200', description: 'Test description.....',category: 'mobile'},
      {srcUrl: 'http://lorempixel.com/400/200', description: 'Test description.....',category: 'photoshop'}
    ]
  }

  getProjects(){
    return Observable.of(this.projects);
  }

}
