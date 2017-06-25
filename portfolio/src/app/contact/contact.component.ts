import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contact = {name: '', email: '', message:''}
  private successMsg: boolean = false;
  constructor(private af: AngularFireDatabase) { }


  ngOnInit() {
  }

  addMessage(contact){
    this.af.database.ref('messages').push(contact);
    this.contact.email = this.contact.name = this.contact.message = '';
    this.successMsg = true;
  }

}
