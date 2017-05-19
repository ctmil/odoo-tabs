import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { OdooRPCService } from '../../providers/odoorpc.service';
import { MessagePage } from '../../pages/message/message';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public list_messages: any;
	domain: any;
	fields: any;
	messagePage: any=MessagePage;

	constructor(public navCtrl: NavController, public odooRPC: OdooRPCService, public loadingCtrl: LoadingController) {
		}

        ionViewDidLoad() {
	  let loading = this.loadingCtrl.create({
	    content: 'Leyendo mensajes del server...'
	  });
	  loading.present();
          this.domain = [['id','>','0']];
          this.fields = ['id','subject','email_from','date','body','type','state_email'];
          this.odooRPC.searchRead('as.mail.message', this.domain, this.fields).then(res => {
                   this.list_messages = res.records;
		   loading.dismiss();
                  });
	  }

	onLogout() {
		this.navCtrl.pop();
		//this.odooRPC.logout(true).then(res => {
		//	this.navCtrl.pop();
		//	});	
		}

	onClickMessage(messageParm) {
		console.log('ClickMessage');
		console.log(messageParm);
		this.navCtrl.push(this.messagePage,{msg: messageParm});
		}

}
