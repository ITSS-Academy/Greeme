import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { AuthAction } from "../actions/auth.action";
import { Issue } from "src/app/models/issue.model";
import { IssueService } from "src/app/services/issue.service";
import { IssueAction } from "../actions/issue.action";
import { IssueCategoryService } from "src/app/services/issue-category.service";
import { IssueCategoryAction } from "../actions/issue_category.action";


@Injectable()
export class IssueEffect {
  constructor(private actions$: Actions, private issueCategoryService: IssueCategoryService, private http: HttpClient) { }

  getIssueCategories$ = createEffect(() => this.actions$.pipe(
    ofType(IssueCategoryAction.getIssueCategories),
    switchMap(() => this.issueCategoryService.getAll()),
    map((issue_categories) => IssueCategoryAction.getIssueCategoriesSuccess({ issue_categories })),
    catchError((error) => of(IssueCategoryAction.getIssueCategoriesFailure({ error })))
  ))


}
