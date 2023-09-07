import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IssueCategory } from '../models/issue_category.model';

@Injectable({
  providedIn: 'root'
})
export class IssueCategoryService {
  private url =environment.baseURL+'issue_categories'
  constructor(
    private http: HttpClient
  ) { }
  getAll(): Promise<IssueCategory|any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/').subscribe({
        next: (data) => {
          resolve(data as IssueCategory[]);
        },error: (err) => {
          reject(err);
        }
      });
    });
  }

}
