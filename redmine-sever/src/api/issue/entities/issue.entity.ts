import { DataShort } from "src/models/dataShort.model";
import { Attachment } from "./attachment.entity";

export interface Issue {
    id: number,
    project: DataShort,
    tracker: DataShort,
    status: IssueStatus,
    priority: DataShort,
    author:DataShort,
    assigned_to?: DataShort,
    category?: DataShort,
    fixed_version?: DataShort,
    subject: string,
    description: string,
    start_date: string,
    due_date: string,
    done_ratio: number,
    is_private: boolean,
    estimated_hours: number,
    total_estimated_hours: number,
    spent_hours: number,
    total_spent_hours: number,
    created_on: string,
    updated_on: string,
    closed_on?: string|null,
    attachments?: Attachment[],
    relations?: any[]
}

interface IssueStatus {
    id: number,
    name: string,
    is_closed: boolean,
}
