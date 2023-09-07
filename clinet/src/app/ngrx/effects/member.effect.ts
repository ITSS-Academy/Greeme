import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { AuthAction } from "../actions/auth.action";
import { MemberService } from "src/app/services/mem-project.service";
import { MemberAction } from "../actions/member.action";


@Injectable()
export class MemberEffect {
  constructor(private actions$: Actions, private memberService: MemberService, private http: HttpClient) { }

  getMembers$ = createEffect(() => this.actions$.pipe(
    ofType(MemberAction.getMembers),
    switchMap(() => this.memberService.getAll(),
    ),
    map((data) => {

      return MemberAction.getMembersSuccess({ members: data });
    }
    ),
    catchError((error) => {
      return of(MemberAction.getMembersFailure({ error: error.message }));
    }
    )))

  getMember$ = createEffect(() => this.actions$.pipe(
    ofType(MemberAction.getMember),
    switchMap((action) => this.memberService.getOne(action.id)),
    map((data) => {
      return MemberAction.getMemberSuccess({ member: data });
    }
    ),
    catchError((error) => {
      return of(MemberAction.getMemberFailure({ error: error.message }));
    }
    )))
  createMember$ = createEffect(() => this.actions$.pipe(
    ofType(MemberAction.createMember),
    switchMap((action) => this.memberService.create(action.member)),
    map((data) => {
      return MemberAction.createMemberSuccess({ member: data });
    }
    ),
    catchError((error) => {
      return of(MemberAction.createMemberFailure({ error: error.message }));
    }
    )))
  updateMember$ = createEffect(() => this.actions$.pipe(
    ofType(MemberAction.updateMember),
    switchMap((action) => this.memberService.update(action.member)),
    map((data) => {
      return MemberAction.updateMemberSuccess();
    }
    ),
    catchError((error) => {
      return of(MemberAction.updateMemberFailure({ error: error.message }));
    }
    )))
  deleteMember$ = createEffect(() => this.actions$.pipe(
    ofType(MemberAction.deleteMember),
    switchMap((action) => this.memberService.delete(action.id)),
    map((data) => {
      return MemberAction.deleteMemberSuccess();
    }
    ),
    catchError((error) => {
      return of(MemberAction.deleteMemberFailure({ error: error.message }));
    }
    )))


}
