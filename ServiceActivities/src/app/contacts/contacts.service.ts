import {Injectable} from '@angular/core';
import {Contact} from './contact.module';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';

@Injectable()
export class ContactsService {
  firebaseRoot= 'https://service-activities-app.firebaseio.com/AdoptaGrandparent';
  contactSelectedEvent = new Subject<Contact>();
  // contactChangedEvent = new Subject<Contact[]>();
  contactsUpdated = new Subject<Contact[]>();
  private contacts: Contact[];
  maxContactId: number;
  currentId: number;
  constructor(private http: Http) {
    this.initContacts();
  }
  /*
  * Get an array of contacts
  */
  getContacts() {
    return this.contacts;
  }
  /*
  * Get specific contact by id number
  */
  getContactById(id: number) {
    return this.contacts[id];
  }
  // order contacts
  orderContacts(contacts: Contact[]) {
    return contacts;
  }
  /*
  * Edit contacts
  */
  onDelete(contact: Contact) {
    // Check to see if contact exists
    if (contact == null) {
      return;
    }
    // Check to see if position exists
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }
    // Delete contact
    this.contacts.splice(pos, 1);
    this.saveContacts(this.contacts);
  }
  onUpdate(index: number, newContact: Contact) {
    this.contacts[index] = newContact;
    this.saveContacts(this.contacts);
  }
  onAdd(contact: Contact) {
    this.contacts.push(contact);
    this.saveContacts(this.contacts);
  }
  /*
  * Get maximum id of contacts
  */
  getMaxId() {
    this.maxContactId = 0;
    // if (this.contacts) {
    //   for (const contact in this.contacts) {
    //      if ( contact.id) {
    //        this.currentId = parseInt(contact.id, 1);
    //        if (this.currentId > this.maxContactId) {
    //          this.maxContactId = this.currentId;
    //        }
    //      }
    //   }
    // }
    return this.maxContactId;
  }
  /*
  * Call HTTP method get to get all contacts in firebase
  *   this.email = email;
    this.fname = fname;
    this.id = id;
    this.lname = lname;
    this.phone = phone;
  }
  */
  initContacts() {
    const contacts = this.http.get(this.firebaseRoot + '/contacts.json')
      .map((response: Response) => response.json())
    return contacts;

    // return this.http.get("/api/users").map((res: Response) => res.json())
  }

// this.http.get('https://api.github.com/users')
//   .subscribe(data => console.log(data));
  /*
  * Call HTTP method to post contacts into firebase
  */
  saveContacts(contacts: Contact[]) {
    return this.http.post(this.firebaseRoot + '/contacts.json', contacts)
      .subscribe((response: Response) => {
        this.contacts = contacts;
        // this.contactChangedEvent.next(this.contacts);
        this.initContacts(); }
      );
  }
}

