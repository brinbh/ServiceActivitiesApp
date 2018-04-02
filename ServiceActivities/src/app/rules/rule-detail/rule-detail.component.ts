import { Component, OnInit } from '@angular/core';
import {Contact} from '../../contacts/contact.model';
import {Rule} from '../rules.model';
import {ActivatedRoute, Params} from '@angular/router';
import {RulesService} from '../rules.service';

@Component({
  selector: 'app-rule-detail',
  templateUrl: './rule-detail.component.html',
  styleUrls: ['./rule-detail.component.css']
})
export class RuleDetailComponent implements OnInit {
  rule: Rule;
  id: number;
  constructor(private route: ActivatedRoute,
              private rulesService: RulesService) { }

  ngOnInit() {
    // this.contact.id = {id: this.route.snapshot.params['id']};
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.rule = this.rulesService.getRuleById(this.id);
      }
    );
    // this.rulesService.ruleSelectedEvent.subscribe(
    //   (rule: Rule) => {this.rule = rule;});
  }
  onDeleteRule() {
    // TODO: add delete functionality
  }

}
