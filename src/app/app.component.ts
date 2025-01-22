import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public roomId: string = '';
  public messageText: string = '';
  public messageArray: {user: string, message: string}[] = [];
  private storageArray = [];

  public isShow: boolean = false;
  public phone: string = '';
  public currentUser = {
    id: 2,
    name: 'msquare',
    phone: '9363995200',
    roomId: {
      1: 'room-1'
    }
  };
  public selectedUser = {
    id: 2,
    name: 'msquare',
    phone: '9363995200',
    roomId: {
      1: 'room-1'
    }
  };

  public userList = [
    {
      id: 1,
      name: 'hasina',
      phone: '9363795012',
      roomId: {
        2: 'room-1'
      }
    },
    {
      id: 2,
      name: 'msquare',
      phone: '9363995200',
      roomId: {
        1: 'room-1'
      }
    }
  ];

  
  login() {
  }

  sendMessage() {
  }
    
  selectUserHandler(arg0: any) {
  }
}
