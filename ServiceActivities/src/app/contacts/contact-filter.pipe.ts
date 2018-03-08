import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from './contact.module';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {
  /*
  * Filter through array of contacts to match term being searched */
  transform(contacts: Contact[], [term]) {
    let filteredArray: Contact[] = [];
    let lastNames: Contact[] = [];
    // build filtered array on key press
    if (contacts) {
      filteredArray = contacts.filter(
        (contact: any) => contact.fname.toLowerCase().includes(term.toLowerCase())
      );
      lastNames = contacts.filter(
        (contact: any) => contact.lname.toLowerCase().includes(term.toLowerCase())
      );
      filteredArray.concat(lastNames);
    }
    if (filteredArray.length < 1) {
      return contacts;
    }
    return filteredArray;
  }

}
