import { ContactComponent } from './../contact/contact.component';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  entryComponents: [ContactComponent]
})
export class NavComponent implements OnInit {
  mouseover: string = '';
  contactMenuOpen: boolean = false;

  constructor() { }
  ngOnInit() {
  }
}
