import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../models/Activity';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActService {



  constructor(private http: HttpClient) { }

  getAllActivities(): Observable<Activity[]>{
      return this.http.get<Activity[]>('activities/act');
  }

  getTheActivity(id: string): Observable<Activity> {
      return this.http.get<Activity>(`activities/act/${id}`);
  }

  insertActivity(activity: Activity): Observable<Activity> {
      return this.http.post<Activity>('activities/act', activity);
  }

  updateTheActivity(id: string, activity: Activity): Observable<void> {
      return this.http.put<void>(`activities/act/${id}`, activity);
  }

  deleteTheActivity(id: string): Observable<void> {
      return this.http.delete<void>(`activities/act/${id}`);
  }


}
