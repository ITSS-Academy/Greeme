import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { AuthAction } from "../actions/auth.action";
import { ProjectService } from "src/app/services/project-list.service";
import { ProjectAction } from "../actions/project.action ";
import { Project } from "../../models/project.model";


@Injectable()
export class ProjectEffect {
  constructor(private actions$: Actions, private projectService: ProjectService, private http: HttpClient) { }

  getProjects$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectAction.getProjects),
    switchMap((action) => this.projectService.getAll()),
    map((data) => {
      return ProjectAction.getProjectsSuccess({ projects: data });
    }
    ),
    catchError((error) => {
      return of(ProjectAction.getProjectsFailure({ error: error.message }));
    }
    )))

  getProject$ = createEffect(() => this.actions$.pipe(

    ofType(ProjectAction.getProject),
    switchMap((action) => this.projectService.getOne(action.id)),
    map((data) => {
      return ProjectAction.getProjectSuccess({ project: data });
    }
    ),
    catchError((error) => {
      return of(ProjectAction.getProjectFailure({ error: error.message }));
    }
    )))

  createProject$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectAction.createProject),
    switchMap((action) => this.projectService.create(action.project)),
    map((data) => {
      return ProjectAction.createProjectSuccess({ project: data });
    }
    ),
    catchError((error) => {
      return of(ProjectAction.createProjectFailure({ error: error.message }));
    }
    )))

  updateProject$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectAction.updateProject),
    switchMap((action) => this.projectService.update(action.project)),
    map((data) => {
      return ProjectAction.updateProjectSuccess();
    }
    ),
    catchError((error) => {
      return of(ProjectAction.updateProjectFailure({ error: error.message }));
    }
    )))

  deleteProject$ = createEffect(() => this.actions$.pipe(
    ofType(ProjectAction.deleteProject),
    switchMap((action) => this.projectService.delete(action.id)),
    map((data) => {
      return ProjectAction.deleteProjectSuccess();
    }
    ),
    catchError((error) => {
      return of(ProjectAction.deleteProjectFailure({ error: error.message }));
    }
    )))




}
