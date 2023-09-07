import { Group } from "src/app/models/group.model";



export interface GroupState {
    groups: Group[];
    groupsCurrent: Group|null;
    loading: boolean;
    error: string;
}
