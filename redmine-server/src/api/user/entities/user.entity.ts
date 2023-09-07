import { Member } from "src/api/member/entities/member.entity";
import { DataShort } from "src/models/dataShort.model";

export interface User {
    id: number,
    login: string,
    admin: boolean,
    firstname: string,
    lastname: string,
    mail: string,
    created_on?: Date|string
    updated_on?: Date|string,
    last_login_on?: Date|string,
    passwd_changed_on?: Date|string,
    twofa_scheme?: null,
    api_key?: string,
    status: number,
    groups?: DataShort[],
    memberships?: Member[],
  }
  