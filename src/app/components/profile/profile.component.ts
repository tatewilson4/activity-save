import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActService } from '../../services/act.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: object;
  activity: object;
  errSwitch = false;
  succSwitch = false;
  submitSwitch = false;
  errMsg: string;
  succMsg: string;

  constructor(private authService: AuthService, private router: Router, private actService: ActService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe((profile: any) => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }



}
