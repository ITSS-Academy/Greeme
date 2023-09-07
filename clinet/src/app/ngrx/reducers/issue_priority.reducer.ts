import { createReducer, on } from "@ngrx/store";
import { IssuePriorityState } from "../states/issue_priority.state";
import { IssuePriorityAction } from "../actions/issue_priority.action";


const initialState: IssuePriorityState = {
    issuePriorities: [],
    issuePriorityCurrent: null,
    loading: false,
    error: '',
}

export const issuePriorityReducer = createReducer(
    initialState,
    on(IssuePriorityAction.getIssuePriorities, state => ({ ...state, loading: true })),
    on(IssuePriorityAction.getIssuePrioritiesSuccess, (state, { issue_priorities }) => ({ ...state, issuePriorities: issue_priorities, loading: false })),
    on(IssuePriorityAction.getIssuePrioritiesFailure, (state, { error }) => ({ ...state, error, loading: false })),
)
