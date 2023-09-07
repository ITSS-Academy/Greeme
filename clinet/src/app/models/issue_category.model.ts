import { DataShort } from "./dataShort.model";

export interface IssueCategory {
  id: number;
  project: DataShort;
  name: string;
  assigned_to: DataShort;
}



// "issue_categories": [
//   {
//       "id": 1,
//       "project": {
//           "id": 1,
//           "name": "Pet-Caffee"
//       },
//       "name": "Bug UAT",
//       "assigned_to": {
//           "id": 12,
//           "name": "Hai Nguyen Van"
//       }
//   }
// ],
