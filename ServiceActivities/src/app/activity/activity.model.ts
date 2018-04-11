import {Contact} from '../contacts/contact.model';

export class Activity {
  public contacts: Contact[];
  public id: number;
  public name: string;

  constructor(contacts: Contact[], id: number, name: string) {
    contacts = this.contacts;
    id = this.id;
    name = this.name;
  }
}
