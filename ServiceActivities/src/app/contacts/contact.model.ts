export class Contact {
  public email: string;
  public fname: string;
  public id: number;
  public lname: string;
  public phone: string;
  public job: string;
  public url: string;

  constructor(email: string, fname: string, id: number, lname: string, phone: string, job: string, url: string) {
    this.email = email;
    this.fname = fname;
    this.id = id;
    this.lname = lname;
    this.phone = phone;
    this.job = job;
    this.url = url;
  }
}
