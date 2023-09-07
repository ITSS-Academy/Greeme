import { DataShort } from "src/models/dataShort.model";

export interface IssueCategory {
    id: number;
    project: DataShort;
    name: string;
    assigned_to: DataShort;
}
