import { Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
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
    // this.contact.id = {id: this.route.snapshot.params['id']};
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.contact = this.contactService.getContactById(this.id);
      }
    );
  }
  onEditContact() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }
  onDeleteContact() {
    this.contactService.onDelete(this.contact);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
