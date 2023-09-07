export class CreateIssueDto {
    project_id:number;
    tracker_id:number;
    status_id:number;
    priority_id:number;
    subject:string;
    description:string;
    category_id:number;
    fixed_version_id:number;
    assigned_to_id :number;
    parent_issue_id :number;
    custom_fields :any[];
    watcher_user_ids :number[];
    is_private :boolean;
    estimated_hours:number;
    spent_hours:number;
    done_ratio:30;
    start_date: string;
    due_date: string;
}
