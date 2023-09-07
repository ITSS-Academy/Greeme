
export interface Query {
    id: number,
    name: string,
    is_public: boolean,
    project_id: number|null
}


// "queries": [
//   {
//       "id": 1,
//       "name": "Issues assigned to me",
//       "is_public": true,
//       "project_id": null
//   },
//   {
//       "id": 2,
//       "name": "Reported issues",
//       "is_public": true,
//       "project_id": null
//   },
//   {
//       "id": 3,
//       "name": "Updated issues",
//       "is_public": true,
//       "project_id": null
//   },
//   {
//       "id": 4,
//       "name": "Watched issues",
//       "is_public": true,
//       "project_id": null
//   }
// ],
