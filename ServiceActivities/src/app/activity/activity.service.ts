import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';
import {Activity} from './activity.model';

@Injectable()
export class ActivityService {
  firebaseRoot= 'https://service-activities-app.firebaseio.com';
  private activities: Activity[];
  constructor(private http: Http) {
    this.initActivities()
      .subscribe((activities: Activity[]) => {
        this.activities = activities;
      });
  }

  initActivities() {
    const activities = this.http.get(this.firebaseRoot + '/activities.json')
      .map((response: Response) => response.json())
    return activities;
  }

  /*
  * Get specific activity by id number
  */
  getActivityById(id: number) {
    const activities = this.activities;
    if (activities) {
      for (const activity in activities) {
        if (activities[activity].id === id) {
          return activities[activity];
        }
      }
    }
    // TODO: check for errors
  }

}
