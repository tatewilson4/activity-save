import { Component, OnInit } from '@angular/core';
import { ActService } from '../../services/act.service';
import { Activity } from '../../models/Activity';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activityEdit',
  templateUrl: './activityEdit.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})

export class ActivityEditComponent implements OnInit {
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

   updateTheActivity(id: string) {
       this.actService.updateTheActivity(id, this.activity)
       .subscribe((res: void) => this.router.navigate(['/activities']), (err) => console.log(err));
   }

}
