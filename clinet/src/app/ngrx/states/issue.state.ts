import { Issue } from "src/app/models/issue.model";



export interface IssueState {
    issues: Issue[];
    issueCurrent: Issue|null;
    loading: boolean;
    error: string;
}
