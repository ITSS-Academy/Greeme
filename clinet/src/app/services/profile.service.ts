import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public baseURL: string = environment.baseURL + 'profiles';

  constructor(
    protected http: HttpClient
  ) { }

  getAll(): Promise<any[] | any> {
    return new Promise<any[] | any>(async (resolve, reject) => {
      this.http.get(this.baseURL + '/', {
      }).subscribe({
        next: (data) => {
          resolve(data as any[]);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  getOne(id: number): Promise<Profile | any> {
    return new Promise<any | any>(async (resolve, reject) => {
      this.http.get(this.baseURL + '?uid=1' + id, {
      }).subscribe({
        next: (data:any) => {
          resolve(data[0] as Profile);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  create(profile: any): Promise<any | any> {
    return new Promise<any | any>(async (resolve, reject) => {
      this.http.post(this.baseURL + '/', profile).subscribe({
        next: (data) => {
          resolve(data as any);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  update(profile: any): Promise<any | any> {
    return new Promise<any | any>(async (resolve, reject) => {
      this.http.put(this.baseURL + '/' + profile.id, profile).subscribe({
        next: (data) => {
          resolve(data);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  delete(id: number): Promise<any | any> {
    return new Promise<any | any>(async (resolve, reject) => {
      this.http.delete(this.baseURL + '/' + id, {
      }).subscribe({
        next: (data) => {
          resolve(data);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

}
