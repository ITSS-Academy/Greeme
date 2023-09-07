import { createAction, props } from "@ngrx/store";
import { Member } from "../../models/menber.model"
import { AuthModel } from "../../models/auth.model"

export const MemberAction = {
  getMembers: createAction('[Member] Get Members'),
  getMembersSuccess: createAction('[Member] Get Members Success', props<{ members: Member[] }>()),
  getMembersFailure: createAction('[Member] Get Members Failure', props<{ error: string }>()),

  getMember: createAction('[Member] Get Member', props<{ id: number }>()),
  getMemberSuccess: createAction('[Member] Get Member Success', props<{ member: Member }>()),
  getMemberFailure: createAction('[Member] Get Member Failure', props<{ error: string }>()),

  createMember: createAction('[Member] Create Member', props<{ member: Member }>()),
  createMemberSuccess: createAction('[Member] Create Member Success', props<{ member: Member }>()),
  createMemberFailure: createAction('[Member] Create Member Failure', props<{ error: string }>()),

  updateMember: createAction('[Member] Update Member', props<{ member: Member }>()),
  updateMemberSuccess: createAction('[Member] Update Member Success'),
  updateMemberFailure: createAction('[Member] Update Member Failure', props<{ error: string }>()),

  deleteMember: createAction('[Member] Delete Member', props<{ id: number }>()),
  deleteMemberSuccess: createAction('[Member] Delete Member Success'),
  deleteMemberFailure: createAction('[Member] Delete Member Failure', props<{ error: string }>()),
}




