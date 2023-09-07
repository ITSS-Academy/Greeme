import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { IssueService } from "src/app/services/issue.service";
import { IssueAction } from "../actions/issue.action";
import { VersionService } from "src/app/services/version.service";
import { VersionAction } from "../actions/version.action";


@Injectable()
export class VersionEffect {
  constructor(private actions$: Actions, private issueService: VersionService) { }
  getVersions$ = createEffect(() => this.actions$.pipe(
    ofType(VersionAction.getVersions),
    switchMap(() => this.issueService.getAll()),
    map(versions => VersionAction.getVersionsSuccess({ versions })),
    catchError(error => of(VersionAction.getVersionsFailure({ error })))
  ));
}
