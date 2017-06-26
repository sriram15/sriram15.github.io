import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {ToastyService, ToastyConfig, ToastOptions} from 'ng2-toasty';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contact = {name: '', email: '', message:'', reg: 'project'}
  private successMsg: boolean = false;
  constructor(private af: AngularFireDatabase) {}


  ngOnInit() {
  }

  addMessage(contact){
    this.af.database.ref('messages').push(contact).then(()=>{
      this.contact.reg = 'project';
    },(err) => {

    });
  }

}
