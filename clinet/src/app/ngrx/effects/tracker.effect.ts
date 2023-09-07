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
import { TrackerService } from "src/app/services/tracker.service";
import { TrackerAction } from "../actions/tracker.action";


@Injectable()
export class IssueEffect {
  constructor(private actions$: Actions, private trackerService: TrackerService) { }
  getTrackers$ = createEffect(() => this.actions$.pipe(
    ofType(TrackerAction.getTrackers),
    switchMap(() => this.trackerService.getAll()),
    map((trackers) => TrackerAction.getTrackersSuccess({ trackers })),
    catchError((error) => of(TrackerAction.getTrackersFailure({ error })))
  ))

}
