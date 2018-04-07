import {Injectable} from '@angular/core';
import {Contact} from './contact.model';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {AppService} from '../app.service';
import {Activity} from '../activity/activity.model';

@Injectable()
export class ContactsService {
  firebaseRoot= 'https://service-activities-app.firebaseio.com/activities/';
  activity: String;
  contactChangedEvent = new Subject<Contact[]>();
  contactsUpdated = new Subject<Contact[]>();
  private contacts: Contact[];
  maxContactId: number;
  currentId: number;
  constructor(private http: Http, private appService: AppService) {
    this.appService.currentActivity.subscribe(
      (activity: Activity ) => {
        this.activity = activity.name;
        debugger
      });
    this.initContacts()
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
      });
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
    const contacts = this.contacts;
    for (const contact in contacts) {
      if (contacts[contact].id === id) {
        return contacts[contact];
      }
    }
    // TODO: check for errors
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
    // Delete contact
    for (const el in this.contacts) {
      if (this.contacts[el].id === contact.id) {
        delete this.contacts[el];
        const newContacts = this.contacts;
        this.saveContacts(newContacts);
        break;
      }
    }
    // delete this.contacts[pos];
    // const newContacts = this.contacts;
    // this.contacts.splice(pos, 1);
  }
  onUpdate(index: number, newContact: Contact) {
    this.contacts[index] = newContact;
    this.saveContacts(this.contacts);
  }
  /* Add contact with HTTP request */
  onAdd(contact: Contact) {
    // this.contactChangedEvent.next(this.contacts);
    return this.http.post(this.firebaseRoot + this.activity + '/contacts.json', contact);
  }
  /*
  * Get maximum id of contacts
  */
  getMaxId() {
    this.maxContactId = 0;
    if (this.contacts) {
      for (const contact in this.contacts) {
        this.currentId = this.contacts[contact].id;
        if (this.currentId > this.maxContactId) {
          this.maxContactId = this.currentId;
        }
      }
    }
    return this.maxContactId + 1;
  }

  initContacts() {
    const contacts = this.http.get(this.firebaseRoot + this.activity + '/contacts.json')
      .map((response: Response) => response.json())
    return contacts;
  }
  /*
  * Call HTTP method to post contacts into firebase
  */
  saveContacts(contacts: Contact[]) {
    return this.http.put(this.firebaseRoot + this.activity + '/contacts.json', contacts)
      .subscribe((response: Response) => {
        this.contacts = contacts;
        this.contactChangedEvent.next(this.contacts);
        this.initContacts(); }
      );
  }
}

