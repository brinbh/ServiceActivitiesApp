import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact.model';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = undefined;
  term = '';
  private contactsUpdatedSubscription: Subscription;

  constructor(private contactsService: ContactsService,
              private router: Router) {
    this.contactsUpdatedSubscription = contactsService.contactsUpdated
      .subscribe((contacts: Array<Contact>) => {
        this.contacts = contacts;
      });
  }

  ngOnInit() {
    this.contactsService.initContacts()
      .subscribe((contacts: Contact[]) => {
        this.contacts = Object.values(contacts);
      });
  }

  /*
  * Lets user search for contacts by name
  */
  onKeyPress(value: string) {
    this.term = value;
  }
}
