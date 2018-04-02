import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Contact} from '../contact.model';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];
  thanksText = '';

  constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const id = this.contactsService.getMaxId();
    const newContact = new Contact(value.email, value.fname, id, value.lname, value.phone, value.job, value.url);
    this.contactsService.onAdd(newContact)
      .subscribe(
        (res) => console.log(res),
      (err) => console.log(err));
    this.contactsService.contactChangedEvent.next(this.contacts);
    this.router.navigate(['/contacts'], {relativeTo: this.route});
    this.contactsService.initContacts();
  }
  onCancel() {
    this.router.navigate(['/contacts'], {relativeTo: this.route});
  }
  isInvalidContact(newContact: Contact) {
    if (!newContact) {
      return true;
    }
    if (newContact.id === this.contact.id) {
      return true;
    }
    return false;
  }
}
