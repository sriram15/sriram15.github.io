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
  constructor(private af: AngularFireDatabase, private toastyService : ToastyService,private toastyConfig: ToastyConfig) { this.toastyConfig.theme='material' }


  ngOnInit() {
    this.toastyService.default('Hi there');

    var toastOptions:ToastOptions = {
        title: "My title",
        msg: "The message",
        showClose: true,
        timeout: 5000,
        theme: 'default'
    };

    this.toastyService.default({
      title: "Toast It!",
      msg: "Mmmm, tasties...",
      showClose: true,
      timeout: 5000,
      theme: "default"
    });

    this.toastyService.success(toastOptions);
  }

  addMessage(contact){
    this.af.database.ref('messages').push(contact).then(()=>{
      this.contact.reg = 'project';
      this.toastyService.success('Your message has been sent!!');
    },(err) => {

    });
  }

}
