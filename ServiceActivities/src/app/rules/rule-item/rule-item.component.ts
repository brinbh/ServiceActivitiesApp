import {Component, Input, OnInit} from '@angular/core';
import {Rule} from '../rules.model';

@Component({
  selector: 'app-rule-item',
  templateUrl: './rule-item.component.html',
  styleUrls: ['./rule-item.component.css']
})
export class RuleItemComponent implements OnInit {
  @Input() rule: Rule;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
