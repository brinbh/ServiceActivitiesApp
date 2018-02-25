import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts-service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact.module';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  term = '';
  private subscription: Subscription;
  constructor(private contactService: ContactsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactChangedEvent
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
        }
      );
  }
  /*
  * Lets user search for contacts by name
  */
  onKeyPress(value: string) {
    this.term = value;
  }

}
