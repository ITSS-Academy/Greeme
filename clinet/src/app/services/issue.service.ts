import { Injectable } from '@angular/core';
import { Issue } from '../models/issue.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  public issues:Issue[] = [
    {
      "id": 2,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "tracker": {
        "id": 4,
        "name": "Task"
      },
      "status": {
        "id": 1,
        "name": "New",
        "is_closed": false
      },
      "priority": {
        "id": 2,
        "name": "Normal"
      },
      "author": {
        "id": 1,
        "name": "Admin AD"
      },
      "fixed_version": {
        "id": 1,
        "name": "01_Setup"
      },
      "subject": "Task 01",
      "description": "",
      "start_date": "2023-08-27",
      "due_date": "2023-09-02",
      "done_ratio": 90,
      "is_private": false,
      "estimated_hours": 5.0,
      "total_estimated_hours": 5.0,
      "spent_hours": 0.0,
      "total_spent_hours": 0.0,
      "created_on": "2023-08-27T17:42:45Z",
      "updated_on": "2023-08-31T14:31:38Z",
      "closed_on": null,
      "attachments": [
        {
          "id": 1,
          "filename": "7up.jpg",
          "filesize": 504546,
          "content_type": "image/jpeg",
          "description": "7up anhhh",
          "content_url": "http://localhost/attachments/download/1/7up.jpg",
          "thumbnail_url": "http://localhost/attachments/thumbnail/1",
          "author": {
            "id": 1,
            "name": "Admin AD"
          },
          "created_on": "2023-08-27T17:42:16Z"
        }
      ],
      "relations": []
    },
    {
      "id": 1,
      "project": {
        "id": 1,
        "name": "Pet-Caffee"
      },
      "tracker": {
        "id": 1,
        "name": "Bug"
      },
      "status": {
        "id": 1,
        "name": "New",
        "is_closed": false
      },
      "priority": {
        "id": 2,
        "name": "Normal"
      },
      "author": {
        "id": 1,
        "name": "Admin AD"
      },
      "assigned_to": {
        "id": 12,
        "name": "Hai Nguyen Van"
      },
      "category": {
        "id": 1,
        "name": "Bug UAT"
      },
      "fixed_version": {
        "id": 1,
        "name": "01_Setup"
      },
      "subject": "Bug man hinh dang nhap",
      "description": "",
      "start_date": "2023-08-27",
      "due_date": "2023-09-02",
      "done_ratio": 20,
      "is_private": false,
      "estimated_hours": 5.0,
      "total_estimated_hours": 5.0,
      "spent_hours": 0.0,
      "total_spent_hours": 0.0,
      "created_on": "2023-08-27T17:40:45Z",
      "updated_on": "2023-08-27T17:43:22Z",
      "closed_on": null,
      "attachments": [],
      "relations": [],
    //   "journals": [
    //     {
    //         "id": 1,
    //         "user": {
    //             "id": 1,
    //             "name": "Admin AD"
    //         },
    //         "notes": "",
    //         "created_on": "2023-08-27T17:43:01Z",
    //         "private_notes": false,
    //         "details": [
    //             {
    //                 "property": "attr",
    //                 "name": "tracker_id",
    //                 "old_value": "1",
    //                 "new_value": "4"
    //             }
    //         ]
    //     },
    //     {
    //         "id": 2,
    //         "user": {
    //             "id": 1,
    //             "name": "Admin AD"
    //         },
    //         "notes": "",
    //         "created_on": "2023-08-27T17:43:22Z",
    //         "private_notes": false,
    //         "details": [
    //             {
    //                 "property": "attr",
    //                 "name": "tracker_id",
    //                 "old_value": "4",
    //                 "new_value": "1"
    //             }
    //         ]
    //     }
    // ],
    // "watchers": [
    //     {
    //         "id": 1,
    //         "name": "Admin AD"
    //     }
    // ],
    // "allowed_statuses": [
    //     {
    //         "id": 1,
    //         "name": "New",
    //         "is_closed": false
    //     },
    //     {
    //         "id": 2,
    //         "name": "In Progress",
    //         "is_closed": false
    //     },
    //     {
    //         "id": 3,
    //         "name": "Resolved",
    //         "is_closed": false
    //     },
    //     {
    //         "id": 4,
    //         "name": "Feedback",
    //         "is_closed": false
    //     },
    //     {
    //         "id": 5,
    //         "name": "Closed",
    //         "is_closed": true
    //     },
    //     {
    //         "id": 6,
    //         "name": "Rejected",
    //         "is_closed": true
    //     }
    // ]
    }
  ];

  public baseURL: string = environment.baseURL + 'issues';


  constructor(
    protected http: HttpClient
  ) { }


  getProgressTastsInProject():Promise<number>{;
    return new Promise((resolve,reject)=>{
      let total = this.issues.length;
      let count = 0;
      this.issues.forEach((issue)=>{
        if(issue.status?.is_closed||issue.done_ratio==100){
          count++;
        }
      })
      resolve(count/total*100);
    }
    )
  }

  getAll(): Promise<Issue[] | any> {
    return new Promise<Issue[] | any>(async (resolve, reject) => {
      this.http.get(this.baseURL + '/', {
      }).subscribe({
        next: (data) => {
          resolve(data as Issue[]);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  getOne(id: number): Promise<Issue | any> {
    return new Promise<Issue | any>(async (resolve, reject) => {
      this.http.get(this.baseURL + '/' + id, {
      }).subscribe({
        next: (data) => {
          resolve(data as Issue);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  create(issue: Issue): Promise<Issue | any> {
    return new Promise<Issue | any>(async (resolve, reject) => {
      this.http.post(this.baseURL + '/', issue).subscribe({
        next: (data) => {
          resolve(data as Issue);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  update(issue: Issue): Promise<Issue | any> {
    return new Promise<Issue | any>(async (resolve, reject) => {
      this.http.put(this.baseURL + '/' + issue.id, issue).subscribe({
        next: (data) => {
          resolve(data);
        }, error: (err) => {
          reject(err);
        }
      });
    });
  }

  delete(id: number): Promise<Issue | any> {
    return new Promise<Issue | any>(async (resolve, reject) => {
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
