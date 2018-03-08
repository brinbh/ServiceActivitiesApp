import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {fn} from '@angular/compiler/src/output/output_ast';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class Contact {
  public email: string;
  public fname: string;
  public id: string;
  public lname: string;
  public phone: string;


  constructor(email: string, fname: string, id: string, lname: string, phone: string) {
    this.email = email;
    this.fname = fname;
    this.id = id;
    this.lname = lname;
    this.phone = phone;
  }
}
