import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../states/auth.state";
import { AuthAction } from "../actions/auth.action";
import { IssueState } from "../states/issue.state";
import { IssueAction } from "../actions/issue.action";

const initialState: IssueState = {
    issues: [],
    issueCurrent: null,
    loading: false,
    error: '',
}

export const issueReducer = createReducer(
    initialState,
    on(IssueAction.getIssues, state => ({ ...state, loading: true })),
    on(IssueAction.getIssuesSuccess, (state, { issues }) => ({ ...state, issues: issues, loading: false })),
    on(IssueAction.getIssuesFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(IssueAction.getIssue, state => ({ ...state, loading: true })),
    on(IssueAction.getIssueSuccess, (state, { issue }) => ({ ...state, issueCurrent: issue, loading: false })),
    on(IssueAction.getIssueFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(IssueAction.createIssue, state => ({ ...state, loading: true })),
    on(IssueAction.createIssueSuccess, (state, { issue }) => ({ ...state, issues: [...state.issues, issue], loading: false })),
    on(IssueAction.createIssueFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(IssueAction.updateIssue, state => ({ ...state, loading: true })),
    on(IssueAction.updateIssueSuccess, state => ({ ...state, loading: false })),
    on(IssueAction.updateIssueFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(IssueAction.deleteIssue, state => ({ ...state, loading: true })),
    on(IssueAction.deleteIssueSuccess, state => ({ ...state, loading: false })),
    on(IssueAction.deleteIssueFailure, (state, { error }) => ({ ...state, error, loading: false })),
)
