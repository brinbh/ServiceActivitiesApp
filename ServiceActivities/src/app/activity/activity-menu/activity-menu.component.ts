import { Component, OnInit } from '@angular/core';
import {Activity} from '../activity.model';
import {ActivityService} from '../activity.service';
import {ActivatedRoute, Params} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-activity-menu',
  templateUrl: './activity-menu.component.html',
  styleUrls: ['./activity-menu.component.css']
})
export class ActivityMenuComponent implements OnInit {
  activity: Activity;
  id: number;
  constructor(private activityService: ActivityService,
              private route: ActivatedRoute,
              private appService: AppService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.key['id'];
        this.activity = this.activityService.getActivityById(this.id);
      }
    );
    // this.id = +window.location.pathname.split('/')[2];
    this.appService.currentActivity.subscribe(
      (id: number) => {
        this.id = id;
        console.log('setting id to: ' + id);
      }
    );
    this.activity = this.activityService.getActivityById(this.id);
  }
}
