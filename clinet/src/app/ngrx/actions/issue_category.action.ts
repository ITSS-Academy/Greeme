import { createAction, props } from "@ngrx/store";
import { IssueCategory } from "src/app/models/issue_category.model";



export const IssueCategoryAction = {
  getIssueCategories: createAction('[IssueCategory] Get IssueCategories'),
  getIssueCategoriesSuccess: createAction('[IssueCategory] Get IssueCategories Success', props<{ issue_categories: IssueCategory[] }>()),
  getIssueCategoriesFailure: createAction('[IssueCategory] Get IssueCategories Failure', props<{ error: string }>()),
}




