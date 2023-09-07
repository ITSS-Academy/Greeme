import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Version } from '../models/version.model';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private baseUrl = environment.baseURL + 'versions';
  constructor(
    protected http: HttpClient
  ) { }

  getAll(): Promise<Version|any> {
    return new Promise<Version|any>(async (resolve, reject) => {
      this.http.get(this.baseUrl + '/', {
      }).subscribe({
        next: (data) => {
          resolve(data as Version);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }
}
