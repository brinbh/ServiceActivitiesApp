import { Injectable } from '@angular/core';
import {Contact} from './contact.module';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';

@Injectable()
export class ContactsService {
  firebaseRoot= 'https://service-activities-app.firebaseio.com/AdoptaGrandparent';
  contactChangedEvent = new Subject<Contact[]>();
  contactSelectedEvent = new Subject<Contact>();
  contacts: Contact[]= [];
  maxContactId: number;
  currentId: number;
  constructor(private http: Http) {
    // get contacts from program
    // this.getContacts();
    // get contacts from service activities
    // order contacts alphabetically
    this.initContacts();
    console.log('constructor: ' + this.contacts);
  }
  ngOnInit() {
    this.contactChangedEvent.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
        debugger
      }
    );
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
  getContactById(id: string) {
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
    for (const contact of this.contacts){
      this.currentId = parseInt(contact.id, 1);
      if (this.currentId > this.maxContactId) {
        this.maxContactId = this.currentId;
      }
    }
    return this.maxContactId;
  }
  /*
  * Call HTTP method get to get all contacts in firebase
  */
  initContacts() {
    this.http.get(this.firebaseRoot + '/contacts.json')
      .map((response: Response) => {
          this.contacts = response.json();
          console.log(this.contacts);
          return this.contacts;
        }
      ).subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
      this.maxContactId = this.getMaxId();
      this.contactChangedEvent.next(this.contacts);
    });
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
      this.contactChangedEvent.next(this.contacts);
      this.initContacts(); }
      );
  }
}
