import { Component, OnInit } from '@angular/core';
import {Contact} from '../../contacts/contact.model';
import {NgForm} from '@angular/forms';
import {RulesService} from '../rules.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Rule} from '../rules.model';

@Component({
  selector: 'app-rule-add',
  templateUrl: './rule-add.component.html',
  styleUrls: ['./rule-add.component.css']
})
export class RuleAddComponent implements OnInit {

  constructor(private rulesService: RulesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const id = this.rulesService.getMaxId();
    const newRule = new Rule(value.title, value.content, id);
    this.rulesService.onAdd(newRule)
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err));
    this.router.navigate(['/rules/list'], {relativeTo: this.route});
    this.rulesService.initRules();
  }
  onCancel() {
    this.router.navigate(['/rules/list'], {relativeTo: this.route});
  }
}
