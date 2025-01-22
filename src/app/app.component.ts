import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  public currentUser: any;
  public selectedUser: any;

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

  @ViewChild('popup', {static: false}) popup: any;

  constructor(
    private modelService: NgbModal,
  ) {}

  ngAfterViewInit(): void {
    this.openPopup(this.popup);
  }

  openPopup(content: any): void {
    this.modelService.open(content, {backdrop: 'static', centered: true})
  }

  
  login(dismiss: any) {
    this.currentUser = this.userList.find(user => user.phone === this.phone.toLowerCase());
    this.userList = this.userList.filter(user => user.phone !== this.phone.toLowerCase());

    if(this.currentUser) {
      this.isShow = true;
      dismiss();
    }
  }

  sendMessage() {
  }
    
  selectUserHandler(arg0: any) {
  }
}
