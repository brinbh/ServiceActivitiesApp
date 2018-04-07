import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../activity.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {
  @Input() activity: Activity;
  @Input() index: number;
  // selectedActivity: number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private appService: AppService) { }

  ngOnInit() {
  }
  goToActivity(id) {
    // this.selectedActivity = id;
    this.appService.currentActivity.next(id);
    this.router.navigate(['../activity/', id], {relativeTo: this.route});
  }

}
