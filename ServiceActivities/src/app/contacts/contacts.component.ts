import { Component, OnInit } from '@angular/core';
import {ContactsService} from './contacts.service';
import {Contact} from './contact.module';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;

  constructor(
    private contactService: ContactsService) { }

  ngOnInit() {
    this.contactService.contactSelectedEvent
      .subscribe(
        (contact: Contact) => {
          this.selectedContact = contact; });
  }
}
