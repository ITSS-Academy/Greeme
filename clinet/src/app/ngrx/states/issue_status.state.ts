import { IssueStatus } from "src/app/models/issue_status.model";



export interface IssueStatusState {
    issueStatuses: IssueStatus[];
    issueStatusCurrent: IssueStatus|null;
    loading: boolean;
    error: string;
}
