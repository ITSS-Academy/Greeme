import { DataShort } from "src/models/dataShort.model";

export interface Project {
    id: number;
    name: string;
    identifier: string;
    description: string;
    homepage?: string;
    parent?: DataShort;
    status: number;
    is_public: boolean;
    inherit_members: boolean;
    trackers?: DataShort[];
    issue_categories?: DataShort[];
    time_entry_activities?: DataShort[];
    enabled_modules?: DataShort[];
    issue_custom_fields?: DataShort[];
    created_on: string;
    updated_on: string;
}