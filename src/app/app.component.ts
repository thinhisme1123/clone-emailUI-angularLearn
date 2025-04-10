import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { EmailSidebarComponent } from './components/email-sidebar/email-sidebar.component';
import { MessageContentComponent } from './pages/message-content/message-content.component';
import { Email } from './models/Email';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,EmailSidebarComponent,MessageContentComponent,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cloning-email';

  // signal nếu có kiểu dữ liệu thì phải gán giá trị khởi tạo
  selectedEmail = signal<Email | null>(null)

  isOpenEmailList = signal<boolean>(false)
  
  isOpenEmailDetail = signal<boolean>(false)
  
  handleOpenEmailList(isOpenEmailList : boolean) {
    this.isOpenEmailList.set(isOpenEmailList)
    this.isOpenEmailDetail.set(false)
  }

  handleOpenEmailDetail(isOpenEmailDetail : boolean) {
    this.isOpenEmailDetail.set(isOpenEmailDetail)
    this.isOpenEmailList.set(false)
  }
}
