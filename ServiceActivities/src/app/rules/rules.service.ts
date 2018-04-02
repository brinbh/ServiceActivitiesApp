import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Contact} from '../contacts/contact.model';
import {Rule} from './rules.model';

@Injectable()
export class RulesService {
  firebaseRoot= 'https://service-activities-app.firebaseio.com';
  private rules = [];
  private maxRuleId: number;
  currentId: number;
  ruleSelectedEvent = new Subject<Rule>();
  constructor(private http: Http) {
    this.initRules()
      .subscribe((rules: Rule[]) => {
        this.rules = rules;
      });
  }

  /*
  * Get maximum id of contacts
  */
  getMaxId() {
    this.maxRuleId = 0;
    if (this.rules) {
      for (const rule in this.rules) {
        this.currentId = this.rules[rule].id;
        if (this.currentId > this.maxRuleId) {
          this.maxRuleId = this.currentId;
        }
      }
    }
    return this.maxRuleId + 1;
  }
  /* Add contact with HTTP request */
  onAdd(rule: Rule) {
    return this.http.post(this.firebaseRoot + '/rules.json', rule);
  }

  initRules() {
    const rules = this.http.get(this.firebaseRoot + '/rules.json')
      .map((response: Response) => response.json())
    return rules;
  }

  getRuleById(id) {
    const rules = this.rules;
    for (const rule in rules) {
      if (rules[rule].id === id) {
        return rules[rule];
      }
    }
    // TODO: check for errors
  }
}
