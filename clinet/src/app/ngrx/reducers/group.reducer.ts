import { createReducer, on } from "@ngrx/store";
import { GroupState } from "../states/group.state";
import { GroupAction } from "../actions/group.action";

const initialState: GroupState = {
    groups: [],
    groupsCurrent: null,
    loading: false,
    error: '',
}

export const groupReducer = createReducer(
    initialState,
    on(GroupAction.getGroups, state => ({ ...state, loading: true })),
    on(GroupAction.getGroupsSuccess, (state, { groups }) => ({ ...state, groups, loading: false })),
    on(GroupAction.getGroupsFailure, (state, { error }) => ({ ...state, error, loading: false })),
)
