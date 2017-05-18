export class Message {
	id: number;
	date: string;
	email_from: string;
	body: string;
	type: string;

  constructor(values: Object = {}) {
   Object.assign(this, values);
  }

};
