import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clinet';
  @ViewChild('bodyMain') bodyMain!: ElementRef<HTMLDivElement>;

  items: MenuItem[] = [
    {
      icon: 'pi pi-pencil',
    },
    {
      icon: 'pi pi-refresh',
    },
    {
      icon: 'pi pi-trash',
    },
    {
      icon: 'pi pi-upload',
      // routerLink: ['/fileupload']
    },
    {
      icon: 'pi pi-external-link',
      // target:'_blank',
      // url: 'http://angular.io'
    }
  ];

  constructor(protected authService: AuthService) { }
  ngAfterViewChecked(): void {
    if (this.authService.isAuthPage) {
      this.bodyMain.nativeElement.style.marginTop = "0px";
      this.bodyMain.nativeElement.style.marginLeft = '0px';
    }else{
      this.bodyMain.nativeElement.style.marginTop = "var(--height-header)";
      this.bodyMain.nativeElement.style.marginLeft = "var(--width-sidebar)";
    }
  }


  // ngOnInit(): void {
  //   this.isShowNavBar= this.authService.isShowNavBar;
  // }

  // user$?: Observable<User>;
  // constructor(
  //   private store: Store<{
  //     // counter: CounterState,
  //     // calculator: CalculatorState;
  //     // articles: ArticlesState;
  //     auth: AuthState
  //   }>,
  //   // private chatService: ChatService
  // ) {
  //   this.store.select((state) => state.auth.user).forEach((user:any)=>{
  //     this.user$=user;
  //     console.log('user:',  user);
  //     this.display=user?.reloadUserInfo?.displayName;
  //     // console.log('user:', typeof user?.reloadUserInfo);
  //     // console.log('user:',  user?.reloadUserInfo);
  //   });

  //   // this.count$ = this.store.select((state) => state.counter.count);
  //   // this.currentNumber$ = this.store.select(
  //   //   (state) => state.calculator.currentNumber
  //   // );
  //   // this.articles$ = this.store.select((state) => state.articles.list);

  // }


//   this.questionList$ = this.store.select((state) => state.question.questions);
//   this.questionList$.subscribe((data)=>{
//    // console.log(data[this.currentQuestionIndex])
//    this.questionData = data[this.currentQuestionIndex];
//    this.lenghtQuestion = data.length;
//    // this.timerQuestion = this.questionData?.answerTime;
//  });
//  this.playerList$ = this.store.select((state) => state.player.players);
//  this.playerList$.subscribe((data)=>{
//    this.lengthPlayer = data.length;
//    this.playerListData = data;
//  }
// )
//  this.room$ = this.store.select((state) => state.room.room);
//  this.room$.subscribe((data:any)=>{
//    this.roomData = data;
//  })


}
