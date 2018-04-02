import { Component, OnInit } from '@angular/core';
import {ContactsService} from './contacts.service';
import {Contact} from './contact.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  message = '';

  constructor(
    private contactService: ContactsService,
    private router: Router) { }

  ngOnInit() {
    // this.contactService.contactSelectedEvent
    //   .subscribe(
    //     (contact: Contact) => {
    //       this.selectedContact = contact; });
  }
  onAddContact() {
    this.router.navigate(['contacts', 'new']);
  }
}
