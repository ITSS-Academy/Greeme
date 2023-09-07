import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../states/auth.state";
import { AuthAction } from "../actions/auth.action";
import { ProjectState } from "../states/project.state";
import { ProfileAction } from "../actions/profile.action";
import { ProjectAction } from "../actions/project.action ";

const initialState: ProjectState = {
  projects: [],
  projectCurrent: null,
  loading: false,
  error: ''
}

export const projectReducer = createReducer(
  initialState,
  on(ProjectAction.getProjects, state => ({ ...state, loading: true })),
  on(ProjectAction.getProjectsSuccess, (state, { projects }) => ({ ...state, projects:projects, loading: false })),
  on(ProjectAction.getProjectsFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(ProjectAction.getProject, state => ({ ...state, loading: true })),
  on(ProjectAction.getProjectSuccess, (state, { project }) => ({ ...state, projectCurrent: project, loading: false })),
  on(ProjectAction.getProjectFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(ProjectAction.createProject, state => ({ ...state, loading: true })),
  on(ProjectAction.createProjectSuccess, (state, { project }) => ({ ...state, projects: [...state.projects, project], loading: false })),
  on(ProjectAction.createProjectFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(ProjectAction.updateProject, state => ({ ...state, loading: true })),
  on(ProjectAction.updateProjectSuccess, state => ({ ...state, loading: false })),
  on(ProjectAction.updateProjectFailure, (state, { error }) => ({ ...state, error, loading: false })),

  on(ProjectAction.deleteProject, state => ({ ...state, loading: true })),
  on(ProjectAction.deleteProjectSuccess, state => ({ ...state, loading: false })),
  on(ProjectAction.deleteProjectFailure, (state, { error }) => ({ ...state, error, loading: false })),
)
