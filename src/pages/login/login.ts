import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { OdooRPCService } from '../../providers/odoorpc.service';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	host: string;
	database: string;
	usuario: string;
	password: string;
	save_preferences: boolean;
	homePage:any = HomePage;
	storage:any = localStorage;

	constructor(public navCtrl: NavController, public odooRPC: OdooRPCService,
		public alertCtrl: AlertController) {
			this.host = this.storage.getItem('odoo-msg.host');
			this.database = this.storage.getItem('odoo-msg.database');
			this.usuario = this.storage.getItem('odoo-msg.usuario');
			this.password = this.storage.getItem('odoo-msg.password');
		}
   

	onClick() {
	        this.odooRPC.init({
        		    odoo_server: this.host,
        		});
	        this.odooRPC.login(this.database, this.usuario, this.password).then(res => {
	        	    console.log('login success');
			    this.navCtrl.push(this.homePage);
			}).catch( err => {
        		    console.error('login failed', err);
			    let alert = this.alertCtrl.create({
			        title: 'Problemas conectandose',
			        subTitle: 'Corrija los datos ingresados y pruebe otra vez',
			        buttons: ['Reintentar']
			    });
			    alert.present();
		        });

		if (this.save_preferences) {
			//this.storage.setItem('odoo-msg.host',JSON.stringify(this.host));
			//this.storage.setItem('odoo-msg.database',JSON.stringify(this.database));
			//this.storage.setItem('odoo-msg.usuario',JSON.stringify(this.usuario));
			//this.storage.setItem('odoo-msg.password',JSON.stringify(this.password));
			this.storage.setItem('odoo-msg.host',this.host);
			this.storage.setItem('odoo-msg.database',this.database);
			this.storage.setItem('odoo-msg.usuario',this.usuario);
			this.storage.setItem('odoo-msg.password',this.password);
			}

		} 

}
