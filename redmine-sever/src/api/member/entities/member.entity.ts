import { DataShort } from "src/models/dataShort.model";

export interface Member
{
  id: number,
  project: DataShort,
  user?: DataShort,
  group?: DataShort,
  roles: MemberRole[],
}

interface MemberRole{
  id: number,
  name: string,
  inherited?: boolean
}
