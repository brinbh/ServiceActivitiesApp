import { Component, OnInit } from '@angular/core';
import {ActivityService} from './activity.service';
import {Contact} from '../contacts/contact.model';
import {Activity} from './activity.model';
import {ActivatedRoute, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  constructor(private activityService: ActivityService) { }

  ngOnInit() {

  }

}
