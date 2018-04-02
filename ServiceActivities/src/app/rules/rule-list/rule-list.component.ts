import { Component, OnInit } from '@angular/core';
import {RulesService} from '../rules.service';
import {Rule} from '../rules.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent implements OnInit {
  public rules = [];
  constructor(private rulesService: RulesService,
              private router: Router) { }

  ngOnInit() {
    this.rulesService.initRules()
      .subscribe((rules: Rule[]) => {
        this.rules = Object.values(rules);
      });
  }

}
