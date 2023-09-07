
import { Project } from "../../models/project.model";

export interface ProjectState {
    projects: Project[];
    projectCurrent: Project|null;
    loading: boolean;
    error: string;
}
