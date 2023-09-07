import { Version } from "src/app/models/version.model";



export interface VersionState {
    versions: Version[];
    versionCurrent: Version|null;
    loading: boolean;
    error: string;
}
