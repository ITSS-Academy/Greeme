import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, authState, signInWithPopup } from '@angular/fire/auth';
import { UserState } from '../ngrx/states/user.state';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from '../ngrx/actions/user.action';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthPage: boolean = false;
  public userInfo?: User;
  public baseURL: string = environment.baseURL + 'auth';
  constructor(
    private auth: Auth,
    private http: HttpClient,
    private router: Router,
    private authStore: Store<{ auth: UserState }>,
  ) {
    authState(this.auth).subscribe((user) => {
      if (user) {
        // let account: User = {
        //   // userid: user?.uid as string,
        //   // displayName: user?.displayName as string,
        //   // email: user?.email as string,
        //   // photoURL: user?.photoURL as string
        // };
        // this.authStore.dispatch(UserActions.loginSuccess({ user: account }));
        // this.userInfo = account;
        // console.log(account);
      }
    });
  }

  async login(username: string, password: string): Promise<User | any> {
    return new Promise<User | any>(async (resolve, reject) => {
      this.http.post(this.baseURL + '/login', {
        username: username,
        password: password
      }).subscribe({
        next: (data) => {
          console.log(data);
          resolve(data);
        }, error: (err) => {
          // console.log(err);
          reject(err); }
      }
      );
    });
  }

  async register(auth: Auth): Promise<User | any> {
    try {
      this.http.post(this.baseURL + '/register', auth).toPromise().then((res) => {
        console.log(res);
        return res as User
      });
    } catch (error) {
      console.log(error);
    }
  }

  logout(): string {
    // await this.auth.signOut();
    // localStorage.removeItem('userInfo');
    // this.authStore.dispatch(UserActions.logout());
    return 'Logout success' as string;
  }


  // await this.http.get(url).subscribe((res) => {
  //   console.log(res);
  // });

  // if (result.user) {
  //   environment.api_key = result.user.api_key as string;
  //   console.log(result.user);
  //   // let user: User = {
  //   //   userid: result.user?.uid as string,
  //   //   displayName: result.user?.displayName as string,
  //   //   email: result.user?.email as string,
  //   //   photoURL: result.user?.photoURL as string,
  //   // };
  //   // resolve(user);
  //   this.router.navigate(['/']);
  //   // this.http
  //   //   .post(this.baseURL + 'signin', {
  //   //     userid: user.userid,
  //   //     displayName: user.displayName,
  //   //     email: user.email,
  //   //     photoURL: user.photoURL,
  //   //   })
  //   //   .subscribe((res) => {
  //   //     console.log(res);
  //   //   });
  // }
  // } catch (error) {
  //   // reject(null);
  //   console.log(error);
  // }


  // async loginWithGoogle() {
  //   let provider = new GoogleAuthProvider();
  //   return new Promise<User>(async (resolve, reject) => {
  //     try {
  //       // let result = await signInWithPopup(this.auth, provider);
  //       // if(result){
  //       //   let user: User = {
  //       //   userid  : result.user?.uid  as string,
  //       //   displayName: result.user?.displayName as string,
  //       //   email: result.user?.email as string,
  //       //   photoURL: result.user?.photoURL as string,
  //       // };
  //       // console.log('data'+result.user?.uid);
  //       // resolve(user);
  //       // this.router.navigate(['home']);
  //       // this.http
  //       // .post(this.baseURL + 'signin', {
  //       //   userid: user.userid,
  //       //   displayName: user.displayName,
  //       //   email: user.email,
  //       //   photoURL: user.photoURL,
  //       // })
  //       // .subscribe((res) => {
  //       //   console.log(res);
  //       // });
  //       // }
  //       // this.http.post(this.baseURL + 'signin', {

  //     } catch (error) {
  //       reject(null);
  //     }
  //   });
  // }


  async logoutWithGoogle() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.auth.signOut();
        localStorage.removeItem('userInfo');
        // this.authStore.dispatch(UserActions.logout());
        resolve('Logout success');
        this.router.navigate(['home']);
      } catch (error) {
        reject(error);
      }
    });
  }
}
