import { Injectable } from '@angular/core';
import { Member } from '../models/menber.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MemberService {

  public menbersProject: Member[] = [
    {
      "id": 1,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "user": {
        "id": 12,
        "name": "Hai Nguyen Van"
      },
      "roles": [
        {
          "id": 3,
          "name": "Project Manager"
        }
      ]
    },
    {
      "id": 3,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "user": {
        "id": 6,
        "name": "An Nguyen Van"
      },
      "roles": [
        {
          "id": 8,
          "name": "Business Analyst"
        }
      ]
    },
    {
      "id": 5,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "user": {
        "id": 7,
        "name": "Binh Nguyen Van"
      },
      "roles": [
        {
          "id": 6,
          "name": "Developer Leader"
        }
      ]
    },
    {
      "id": 7,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "user": {
        "id": 8,
        "name": "Cuc Nguyen Van"
      },
      "roles": [
        {
          "id": 7,
          "name": "Tester"
        }
      ]
    },
    {
      "id": 9,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "user": {
        "id": 9,
        "name": "Duy Nguyen Van"
      },
      "roles": [
        {
          "id": 4,
          "name": "Developer"
        }
      ]
    },
    {
      "id": 11,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "user": {
        "id": 10,
        "name": "Linh Nguyen Van"
      },
      "roles": [
        {
          "id": 9,
          "name": "Tester Leader"
        }
      ]
    },
    {
      "id": 13,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "user": {
        "id": 11,
        "name": "Phong Nguyen Van"
      },
      "roles": [
        {
          "id": 10,
          "name": "Comtor"
        }
      ]
    },
    {
      "id": 15,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "user": {
        "id": 13,
        "name": "Son Nguyen Van"
      },
      "roles": [
        {
          "id": 11,
          "name": "Customer"
        }
      ]
    },
    {
      "id": 17,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "user": {
        "id": 5,
        "name": "Test sadas"
      },
      "roles": [
        {
          "id": 3,
          "name": "Project Manager"
        },
        {
          "id": 8,
          "name": "Business Analyst"
        },
        {
          "id": 6,
          "name": "Developer Leader"
        },
        {
          "id": 4,
          "name": "Developer"
        },
        {
          "id": 9,
          "name": "Tester Leader"
        }
      ]
    },
    // {
    //   "id": 19,
    //   "project": {
    //     "id": 1,
    //     "name": "Pet-Caffee"
    //   },
    //   "group": {
    //     "id": 14,
    //     "name": "Leader"
    //   },
    //   "roles": [
    //     {
    //       "id": 11,
    //       "name": "Customer"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Project Manager"
    //     },
    //     {
    //       "id": 8,
    //       "name": "Business Analyst"
    //     },
    //     {
    //       "id": 6,
    //       "name": "Developer Leader"
    //     },
    //     {
    //       "id": 7,
    //       "name": "Tester"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Developer"
    //     },
    //     {
    //       "id": 9,
    //       "name": "Tester Leader"
    //     },
    //     {
    //       "id": 10,
    //       "name": "Comtor"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Reporter"
    //     }
    //   ]
    // }
  ]

  public baseURL: string = environment.baseURL + 'members';

  constructor(
    protected http: HttpClient
  ) { }


  getAll(): Promise<Member[] | any> {
    return new Promise<Member[] | any>(async (resolve, reject) => {
      this.http.get(this.baseURL + '/', {
      }).subscribe({
        next: (data) => {
          resolve(data as Member[]);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  getOne(id: number): Promise<Member | any> {
    return new Promise<Member | any>(async (resolve, reject) => {
      this.http.get(this.baseURL + '/' + id, {
      }).subscribe({
        next: (data) => {
          resolve(data as Member);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  create(member: Member): Promise<Member | any> {
    return new Promise<Member | any>(async (resolve, reject) => {
      this.http.post(this.baseURL + '/', member).subscribe({
        next: (data) => {
          resolve(data as Member);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  update(member: Member): Promise<Member | any> {
    return new Promise<Member | any>(async (resolve, reject) => {
      this.http.put(this.baseURL + '/' + member.id, member).subscribe({
        next: (data) => {
          resolve(data);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  delete(id: number): Promise<Member | any> {
    return new Promise<Member | any>(async (resolve, reject) => {
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
