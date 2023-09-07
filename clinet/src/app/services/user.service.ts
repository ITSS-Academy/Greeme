import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseURL: string = environment.baseURL + 'users';

  constructor(
    protected http: HttpClient
  ) { }

  getAll(): Promise<User[] | any> {
    return new Promise<User[] | any>(async (resolve, reject) => {
      this.http.get(this.baseURL + '/', {
      }).subscribe({
        next: (data) => {
          resolve(data as User[]);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  getOne(id: number): Promise<User | any> {
    return new Promise<User | any>(async (resolve, reject) => {
      this.http.get(this.baseURL + '/' + id, {
      }).subscribe({
        next: (data) => {
          resolve(data as User);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  create(user: User): Promise<User | any> {
    return new Promise<User | any>(async (resolve, reject) => {
      this.http.post(this.baseURL + '/', user).subscribe({
        next: (data) => {
          resolve(data as User);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  update(user: User): Promise<User | any> {
    return new Promise<User | any>(async (resolve, reject) => {
      this.http.put(this.baseURL + '/' + user.id, user).subscribe({
        next: (data) => {
          resolve(data);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  delete(id: number): Promise<User | any> {
    return new Promise<User | any>(async (resolve, reject) => {
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
