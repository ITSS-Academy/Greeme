
import { Member } from "../../models/menber.model";

export interface MemberState {
    members: Member[];
    memberCurrent: Member|null;
    loading: boolean;
    error: string;
}
