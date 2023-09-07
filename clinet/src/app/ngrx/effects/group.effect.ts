import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { GroupService } from "src/app/services/group.service";
import { GroupAction } from "../actions/group.action";

@Injectable()
export class IssueEffect {
  constructor(private actions$: Actions, private groupService: GroupService) { }

  getGroups$ = createEffect(() => this.actions$.pipe(
    ofType(GroupAction.getGroups),
    switchMap(() => this.groupService.getAll()),
    map((groups: any) => GroupAction.getGroupsSuccess({ groups })),
    catchError((error: any) => of(GroupAction.getGroupsFailure({ error })))
  ));

}
