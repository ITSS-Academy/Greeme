import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IssuePriority } from '../models/issue_priority.model';

@Injectable({
  providedIn: 'root'
})
export class IssuePriorityService {
  private url = environment.baseURL + 'issue_priorities'
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Promise<IssuePriority[] | any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + '/').subscribe({
        next: (data) => {
          resolve(data as IssuePriority[]);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }
}
