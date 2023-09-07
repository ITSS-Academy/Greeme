import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tracker } from '../models/tracker.model';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  private url = environment.baseURL+'tracker'
   constructor(
      private http: HttpClient
   ) { }

   getAll(): Promise<Tracker[]|any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/').subscribe({
        next: (data) => {
          resolve(data as Tracker[]);
        },error: (err) => {
          reject(err);
        }
      });
    });

   }

}
