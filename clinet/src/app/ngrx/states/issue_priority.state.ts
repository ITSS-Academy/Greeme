import { IssuePriority } from "src/app/models/issue_priority.model";



export interface IssuePriorityState {
    issuePriorities: IssuePriority[];
    issuePriorityCurrent: IssuePriority|null;
    loading: boolean;
    error: string;
}
