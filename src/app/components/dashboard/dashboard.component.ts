import { Component, OnInit } from '@angular/core';
import { ActService } from '../../services/act.service';
import { Activity } from '../../models/Activity';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    oneActivity: any;
    activities: any;
    activity: any = {};
  constructor(
      private actService: ActService,
      private router: Router,
      private route: ActivatedRoute
   ) { }

  ngOnInit() {
      this.actService.getAllActivities()
      .subscribe((data: Activity[]) => this.activities = data);
  }

}
