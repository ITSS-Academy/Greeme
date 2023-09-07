import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private url  = environment.baseURL+'groups'
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Promise<Group|any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+'/').subscribe({
        next: (data: any) => {
          resolve(data);
        },error: (error: any) => {
          reject(error);
        }
      });
    });
  }

}
