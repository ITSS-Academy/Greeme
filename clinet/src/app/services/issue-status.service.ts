import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IssueStatus } from '../models/issue_status.model';

@Injectable({
  providedIn: 'root'
})
export class IssueStatusService {
  private url = environment.baseURL+'issue_statuses'
  constructor(
    private http: HttpClient
  ) { }
  getAll(): Promise<IssueStatus|any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/').subscribe({
        next: (data) => {
          resolve(data as IssueStatus[]);
        },error: (err) => {
          reject(err);
        }
      });
    });
  }
}
