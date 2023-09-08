import { Injectable, NgZone } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  authState,
  signInWithPopup,
} from '@angular/fire/auth';
import { UserState } from '../ngrx/states/user.state';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { AuthModel } from '../models/auth.model';
import { AuthState } from '../ngrx/states/auth.state';
import { AuthAction } from '../ngrx/actions/auth.action';
import { UserAction } from '../ngrx/actions/user.action';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthPage: boolean = false;
  public userInfo?: User;
  public baseURL: string = environment.baseURL + 'auth';
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: Auth,
    private store: Store<{
      auth: AuthState;
      user: UserState;
    }>
  ) {
    authState(this.auth).subscribe((user) => {
      if (user) {
        console.log(user);
        let account: User = {
          id: 0,
          login: user.displayName as string,
          admin: true,
          firstname: (user.displayName as string).split(' ')[0],
          lastname: (user.displayName as string).split(' ')[1],
          mail: user.email as string,
          created_on: user.metadata.creationTime as string,
          updated_on: user.metadata.lastSignInTime as string,
          last_login_on: '',
          passwd_changed_on: '',
          twofa_scheme: null,
          api_key: '',
          status: 1,
        };
        // this.store.dispatch(AuthAction.loginGoogleSuccess());
      }
    });
  }

  async login(username: string, password: string): Promise<User | any> {
    return new Promise<User | any>(async (resolve, reject) => {
      // this.http.post(this.baseURL + '/login', {
      //   username: username,
      //   password: password
      // }).subscribe({
      //   next: (data) => {
      //     console.log(data);
      //     localStorage.setItem('accessToken', JSON.stringify(data));
      resolve('Login success');
      //     }, error: (err) => {
      //       reject(err); }
      //   });
    });
  }

  async register(auth: AuthModel): Promise<User | any> {
    return new Promise<User | any>(async (resolve, reject) => {
      // this.http.post(this.baseURL + '/register', auth).subscribe({
      //   next: (data) => {
      //     console.log(data);
      resolve(true);
      //   }, error: (err) => {
      //     reject(err); }
      // });
    });
  }

  async logout(): Promise<boolean | any> {
    // await this.auth.signOut();
    // localStorage.removeItem('userInfo');
    // this.authStore.dispatch(UserActions.logout());
    return new Promise(async (resolve, reject) => {
      resolve(true);
    });
  }

  async loginWithGoogle() {
    let provider = new GoogleAuthProvider();
    return new Promise<any>(async (resolve, reject) => {
      try {
        let result = await signInWithPopup(this.auth, provider);
        if (result) {
          let user: any = {
            userid: result.user?.uid as string,
            displayName: result.user?.displayName as string,
            email: result.user?.email as string,
            photoURL: result.user?.photoURL as string,
          };
          console.log('data' + result.user);

          resolve(user);
          // this.router.navigate(['home']);
          // this.http
          //   .post(this.baseURL + 'signin', {
          //     userid: user.userid,
          //     displayName: user.displayName,
          //     email: user.email,
          //     photoURL: user.photoURL,
          //   })
          //   .subscribe((res) => {
          //     console.log(res);
          //   });
        }
      } catch (error) {
        reject(null);
      }
    });
  }
  async logoutWithGoogle() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.auth.signOut();
        localStorage.removeItem('accessToken');
        this.store.dispatch(AuthAction.logout());
        resolve('Logout success');
        this.router.navigate(['login']);
      } catch (error) {
        reject(error);
      }
    });
  }
}
