import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { OdooRPCService } from '../../providers/odoorpc.service';

import { Message } from '../../classes/message-class';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {

	msg: Message;

  constructor(public navCtrl: NavController, public navParams: NavParams, public odooRPC: OdooRPCService) {
		console.log('navParams',this.navParams);
		this.msg = new Message();
  }

  ionViewDidLoad() {
		this.msg.id = this.navParams.data.msg.id;
		this.msg.date = this.navParams.data.msg.date;
		this.msg.email_from = this.navParams.data.msg.email_from;
		this.msg.body = this.navParams.data.msg.body;
		this.msg.type = this.navParams.data.msg.type;
		this.msg.state_email = this.navParams.data.msg.state_email;
    }

}
