import { createReducer, on } from "@ngrx/store";
import { IssueCategoryState } from "../states/issue_category.state";
import { IssueCategoryAction } from "../actions/issue_category.action";

const initialState: IssueCategoryState = {
    issueCategories: [],
    issueCategoryCurrent: null,
    loading: false,
    error: '',
}

export const issueCategoryReducer = createReducer(
    initialState,
    on(IssueCategoryAction.getIssueCategories, state => ({ ...state, loading: true })),
    on(IssueCategoryAction.getIssueCategoriesSuccess, (state, { issue_categories }) => ({ ...state, issueCategories: issue_categories, loading: false })),
    on(IssueCategoryAction.getIssueCategoriesFailure, (state, { error }) => ({ ...state, error, loading: false })),

)
