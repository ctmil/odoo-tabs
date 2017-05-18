import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

	public cadena: any = ['A','B','C','D','E'];
	public http: Http;

	constructor() {
	    console.log('Hello Data Provider');
	  }

}
