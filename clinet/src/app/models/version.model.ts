import { DataShort } from "./dataShort.model";

export interface Version {
    id: number,
    project: DataShort,
    name: string,
    description: string,
    status: string,
    due_date: string,
    sharing: string,
    wiki_page_title: string,
    created_on: Date|string,
    updated_on: Date|string
}
//   {
//     "id": 1,
//     "project": {
//         "id": 1,
//         "name": "Pet-Caffee"
//     },
//     "name": "01_Setup",
//     "description": "sfdsaf",
//     "status": "open",
//     "due_date": "2023-09-02",
//     "sharing": "system",
//     "wiki_page_title": "sdafasdfa",
//     "created_on": "2023-08-27T17:29:46Z",
//     "updated_on": "2023-08-27T17:29:46Z"
// },
// {
//     "id": 2,
//     "project": {
//         "id": 1,
//         "name": "Pet-Caffee"
//     },
//     "name": "02_Coding",
//     "description": "",
//     "status": "open",
//     "due_date": "2023-09-09",
//     "sharing": "system",
//     "wiki_page_title": "",
//     "created_on": "2023-08-27T17:30:03Z",
//     "updated_on": "2023-08-27T17:30:03Z"
// },
// {
//     "id": 3,
//     "project": {
//         "id": 1,
//         "name": "Pet-Caffee"
//     },
//     "name": "03_Unit Test Report",
//     "description": "",
//     "status": "open",
//     "due_date": "2023-09-10",
//     "sharing": "system",
//     "wiki_page_title": "",
//     "created_on": "2023-08-27T17:30:18Z",
//     "updated_on": "2023-08-27T17:30:18Z"
// },
// {
//     "id": 4,
//     "project": {
//         "id": 1,
//         "name": "Pet-Caffee"
//     },
//     "name": "04_Unit Test Report",
//     "description": "",
//     "status": "open",
//     "due_date": "2023-09-08",
//     "sharing": "system",
//     "wiki_page_title": "",
//     "created_on": "2023-08-27T17:30:38Z",
//     "updated_on": "2023-08-27T17:30:38Z"
// },
// {
//     "id": 5,
//     "project": {
//         "id": 1,
//         "name": "Pet-Caffee"
//     },
//     "name": "05_Fixing bug",
//     "description": "",
//     "status": "open",
//     "due_date": "2023-09-30",
//     "sharing": "system",
//     "wiki_page_title": "",
//     "created_on": "2023-08-27T17:30:53Z",
//     "updated_on": "2023-08-27T17:30:53Z"
// },
// {
//     "id": 6,
//     "project": {
//         "id": 1,
//         "name": "Pet-Caffee"
//     },
//     "name": "06_Bug UAT",
//     "description": "",
//     "status": "open",
//     "due_date": "2023-10-27",
//     "sharing": "tree",
//     "wiki_page_title": "",
//     "created_on": "2023-08-27T17:31:19Z",
//     "updated_on": "2023-08-27T17:31:19Z"
// }
