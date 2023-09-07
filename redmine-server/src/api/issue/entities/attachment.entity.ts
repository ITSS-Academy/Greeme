import { DataShort } from "src/models/dataShort.model";

export interface Attachment {
    id: number,
    filename: string,
    filesize: number,
    content_type: string,
    description: string,
    content_url: string,
    thumbnail_url: string,
    author: DataShort,
    created_on: string,
}