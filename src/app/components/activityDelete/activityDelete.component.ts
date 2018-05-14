import { Component, OnInit } from '@angular/core';
import { ActService } from '../../services/act.service';
import { Activity } from '../../models/Activity';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activityDelete',
  templateUrl: './activityDelete.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})

export class ActivityDeleteComponent implements OnInit {
    oneActivity: any;
    activity: any = {};

  constructor(
      private actService: ActService,
      private router: Router,
      private route: ActivatedRoute
   ) { }

   ngOnInit() {
       this.getActivityDetails(this.route.snapshot.params['id']);
   }

   getActivityDetails(id: string) {
       this.actService.getTheActivity(id)
       .subscribe((data: Activity) => this.oneActivity = data);
   }

   deleteTheActivity(id: string) {
       this.actService.deleteTheActivity(id)
       .subscribe((res: void) => {
           this.router.navigate(['/activities']);
       }, (err) => console.log(err));
   }
}
