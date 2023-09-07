import { IssueCategory } from "src/app/models/issue_category.model";



export interface IssueCategoryState {
    issueCategories: IssueCategory[];
    issueCategoryCurrent: IssueCategory|null;
    loading: boolean;
    error: string;
}
