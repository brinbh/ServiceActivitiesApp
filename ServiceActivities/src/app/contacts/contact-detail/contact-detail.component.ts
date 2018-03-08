import { Component, OnInit} from '@angular/core';
import {Contact} from '../contact.module';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  id: number;
  constructor(private contactService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.contact = this.contactService.getContactById(this.id);
      }
    );
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {this.contact = contact});
  }
  onEditContact(){
    this.router.navigate(['edit'], {relativeTo: this.route});

  }
  onDeleteContact() {
    this.contactService.onDelete(this.contact);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
