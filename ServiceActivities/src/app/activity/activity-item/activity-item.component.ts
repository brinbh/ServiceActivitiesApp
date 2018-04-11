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
  constructor(private router: Router,
              private route: ActivatedRoute,
              private appService: AppService) { }

  ngOnInit() {
  }
  goToActivity(id) {
    this.appService.currentActivity.next(this.activity);
    this.router.navigate([id], {relativeTo: this.route});
  }

}
