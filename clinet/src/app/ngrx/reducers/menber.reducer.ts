import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../states/auth.state";
import { AuthAction } from "../actions/auth.action";
import { MemberState } from "../states/member.state";
import { MemberAction } from "../actions/member.action";

const initialState: MemberState = {
  members: [],
  memberCurrent: null,
  loading: false,
  error: '',
}
export const memberReducer = createReducer(
  initialState,
  on(MemberAction.getMembers, state => ({ ...state, loading: true })),
  on(MemberAction.getMembersSuccess, (state, { members }) => ({ ...state, members: members, loading: false })),
  on(MemberAction.getMembersFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(MemberAction.getMember, state => ({ ...state, loading: true })),
  on(MemberAction.getMemberSuccess, (state, { member }) => ({ ...state, memberCurrent: member, loading: false })),
  on(MemberAction.getMemberFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(MemberAction.createMember, state => ({ ...state, loading: true })),
  on(MemberAction.createMemberSuccess, (state, { member }) => ({ ...state, members: [...state.members, member], loading: false })),
  on(MemberAction.createMemberFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(MemberAction.updateMember, state => ({ ...state, loading: true })),
  on(MemberAction.updateMemberSuccess, state => ({ ...state, loading: false })),
  on(MemberAction.updateMemberFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(MemberAction.deleteMember, state => ({ ...state, loading: true })),
  on(MemberAction.deleteMemberSuccess, state => ({ ...state, loading: false })),
  on(MemberAction.deleteMemberFailure, (state, { error }) => ({ ...state, error, loading: false })),
)
