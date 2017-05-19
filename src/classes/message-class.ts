export class Message {
	id: number;
	date: string;
	email_from: string;
	body: string;
	type: string;
	state_email: string;

  constructor(values: Object = {}) {
   Object.assign(this, values);
  }

};
