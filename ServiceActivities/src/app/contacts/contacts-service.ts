import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {
  contacts: Contact[]=[];

  constructor() { }

}
