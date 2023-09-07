import { createReducer, on } from "@ngrx/store";
import { IssueStatusState } from "../states/issue_status.state";
import { IssueStatusAction } from "../actions/issue_status.action";


const initialState: IssueStatusState = {
    issueStatuses: [],
    issueStatusCurrent: null,
    loading: false,
    error: '',
}

export const issueStatusReducer = createReducer(
    initialState,
    on(IssueStatusAction.getIssueStatuses, state => ({ ...state, loading: true })),
    on(IssueStatusAction.getIssueStatusesSuccess, (state, { issue_statuses }) => ({ ...state, issueStatuses: issue_statuses, loading: false })),
    on(IssueStatusAction.getIssueStatusesFailure, (state, { error }) => ({ ...state, error, loading: false })),

)
