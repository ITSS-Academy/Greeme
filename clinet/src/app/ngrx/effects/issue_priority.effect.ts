import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { IssuePriorityService } from "src/app/services/issue-priority.service";
import { IssuePriorityAction } from "../actions/issue_priority.action";


@Injectable()
export class IssuePriorityEffect {
  constructor(private actions$: Actions, private issuePriorityService: IssuePriorityService) { }
  getIssuePriorities$ = createEffect(() => this.actions$.pipe(
    ofType(IssuePriorityAction.getIssuePriorities),
    switchMap(() => this.issuePriorityService.getAll()),
    map((issue_priorities) => IssuePriorityAction.getIssuePrioritiesSuccess({ issue_priorities })),
    catchError((error) => of(IssuePriorityAction.getIssuePrioritiesFailure({ error })))
  ))

}
