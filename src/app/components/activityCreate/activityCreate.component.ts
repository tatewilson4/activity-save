import { Component } from '@angular/core';
import { ActService } from '../../services/act.service';
import { Activity } from '../../models/Activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activityCreate',
  templateUrl: './activityCreate.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})

export class ActivityCreateComponent {
    activity: any = {};
  constructor(
      private actService: ActService,
      private router: Router
   ) { }

   saveActivity() {
       this.actService.insertActivity(this.activity)
       .subscribe((res: Activity) => {
           this.router.navigate(['/activities']);
           console.log(this.activity)
       }, (err) =>
           console.log(err)
       );
   }
}
