import { DataShort } from "src/models/dataShort.model";

export interface Tracker {
    id: number,
    name: string,
    default_status: DataShort,
    description: string,
    enabled_standard_fields: string[]
}