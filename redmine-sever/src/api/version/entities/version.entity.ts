import { DataShort } from "src/models/dataShort.model";

export interface Version {
    id: number,
    project: DataShort,
    name: string,
    description: string,
    status: string,
    due_date: string,
    sharing: string,
    wiki_page_title: string,
    created_on: Date|string,
    updated_on: Date|string
}