import { createAction, props } from "@ngrx/store";
import { Project } from "../../models/project.model"

export const ProjectAction = {
    getProjects: createAction('[Project] Get Projects'),
    getProjectsSuccess: createAction('[Project] Get Projects Success', props<{ projects: Project[] }>()),
    getProjectsFailure: createAction('[Project] Get Projects Failure', props<{ error: string }>()),

    getProject: createAction('[Project] Get Project', props<{ id: number }>()),
    getProjectSuccess: createAction('[Project] Get Project Success', props<{ project: Project }>()),
    getProjectFailure: createAction('[Project] Get Project Failure', props<{ error: string }>()),

    createProject: createAction('[Project] Create Project', props<{ project: Project }>()),
    createProjectSuccess: createAction('[Project] Create Project Success', props<{ project: Project }>()),
    createProjectFailure: createAction('[Project] Create Project Failure', props<{ error: string }>()),

    updateProject: createAction('[Project] Update Project', props<{ project: Project }>()),
    updateProjectSuccess: createAction('[Project] Update Project Success'),
    updateProjectFailure: createAction('[Project] Update Project Failure', props<{ error: string }>()),

    deleteProject: createAction('[Project] Delete Project', props<{ id: number }>()),
    deleteProjectSuccess: createAction('[Project] Delete Project Success'),
    deleteProjectFailure: createAction('[Project] Delete Project Failure', props<{ error: string }>()),
}




