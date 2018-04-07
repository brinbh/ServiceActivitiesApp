import { Component, OnInit } from '@angular/core';
import {Contact} from '../contacts/contact.model';
import {Router} from '@angular/router';
import {RulesService} from './rules.service';
import {Rule} from './rules.model';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  selectedRule: Rule;

  constructor(
    private rulesService: RulesService,
    private router: Router) { }

  ngOnInit() {
    this.router.navigate(['rules', 'list']);
  }
  onAddRule() {
    this.router.navigate(['rules', 'new']);
  }

}
