import { DataShort } from "./dataShort.model"

export interface Tracker {
    id: number,
    name: string,
    default_status: DataShort,
    description: string,
    enabled_standard_fields: string[]
}

// "trackers": [
//   {
//       "id": 1,
//       "name": "Bug",
//       "default_status": {
//           "id": 1,
//           "name": "New"
//       },
//       "description": "",
//       "enabled_standard_fields": [
//           "assigned_to_id",
//           "category_id",
//           "fixed_version_id",
//           "parent_issue_id",
//           "start_date",
//           "due_date",
//           "estimated_hours",
//           "done_ratio",
//           "description"
//       ]
//   },
//   {
//       "id": 2,
//       "name": "CR (Feature)",
//       "default_status": {
//           "id": 1,
//           "name": "New"
//       },
//       "description": "",
//       "enabled_standard_fields": [
//           "assigned_to_id",
//           "category_id",
//           "fixed_version_id",
//           "parent_issue_id",
//           "start_date",
//           "due_date",
//           "estimated_hours",
//           "done_ratio",
//           "description"
//       ]
//   },
//   {
//       "id": 3,
//       "name": "Support",
//       "default_status": {
//           "id": 1,
//           "name": "New"
//       },
//       "description": "",
//       "enabled_standard_fields": [
//           "assigned_to_id",
//           "category_id",
//           "fixed_version_id",
//           "parent_issue_id",
//           "start_date",
//           "due_date",
//           "estimated_hours",
//           "done_ratio",
//           "description"
//       ]
//   },
//   {
//       "id": 4,
//       "name": "Task",
//       "default_status": {
//           "id": 1,
//           "name": "New"
//       },
//       "description": "",
//       "enabled_standard_fields": [
//           "assigned_to_id",
//           "category_id",
//           "fixed_version_id",
//           "parent_issue_id",
//           "start_date",
//           "due_date",
//           "estimated_hours",
//           "done_ratio",
//           "description"
//       ]
//   },
//   {
//       "id": 5,
//       "name": "Risk",
//       "default_status": {
//           "id": 1,
//           "name": "New"
//       },
//       "description": "",
//       "enabled_standard_fields": [
//           "assigned_to_id",
//           "category_id",
//           "fixed_version_id",
//           "parent_issue_id",
//           "start_date",
//           "due_date",
//           "estimated_hours",
//           "done_ratio",
//           "description"
//       ]
//   },
//   {
//       "id": 6,
//       "name": "Report",
//       "default_status": {
//           "id": 1,
//           "name": "New"
//       },
//       "description": "",
//       "enabled_standard_fields": [
//           "assigned_to_id",
//           "category_id",
//           "fixed_version_id",
//           "parent_issue_id",
//           "start_date",
//           "due_date",
//           "estimated_hours",
//           "done_ratio",
//           "description"
//       ]
//   },
//   {
//       "id": 7,
//       "name": "Issue",
//       "default_status": {
//           "id": 1,
//           "name": "New"
//       },
//       "description": "",
//       "enabled_standard_fields": [
//           "assigned_to_id",
//           "category_id",
//           "fixed_version_id",
//           "parent_issue_id",
//           "start_date",
//           "due_date",
//           "estimated_hours",
//           "done_ratio",
//           "description"
//       ]
//   }
// ]
