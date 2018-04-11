import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../activity.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../app.service';
import {ActivityService} from '../activity.service';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {
  @Input() activity: Activity;
  otherActivity: Activity;
  @Input() index: number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private appService: AppService,
              private activityService: ActivityService) { }

  ngOnInit() {
  }
  goToActivity(id) {
    const activity = this.activityService.getActivityById(id);
    this.appService.currentActivity.next(activity);
    console.log(this.appService.currentActivity);
    this.appService.currentActivity.subscribe(
      (thisActivity: Activity) => {
        this.otherActivity = thisActivity;
        console.log('Next: ' + thisActivity);
      }
    );
    this.router.navigate(['../activity', id], {relativeTo: this.route});
  }

}
