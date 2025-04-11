import { Email } from './models/Email';
import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  effect,
  signal,
  ViewChild,
  ViewContainerRef,
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { HeaderComponent } from './pages/header/header.component';
import { EmailSidebarComponent } from './components/email-sidebar/email-sidebar.component';
import { MessageContentComponent } from './pages/message-content/message-content.component';
import { ComposeEmailComponent } from './pages/composeemail/composeemail.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, EmailSidebarComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'cloning-email';
  // signal nếu có kiểu dữ liệu thì phải gán giá trị khởi tạo
  selectedEmail = signal<Email | null>(null);
  isOpenEmailList = signal<boolean>(false);
  isOpenEmailDetail = signal<boolean>(false);
  isOpenNewMessgae = signal<boolean>(false);

  private readonly injector = inject(EnvironmentInjector);

  // Dynamic component mesaage content and new message
  @ViewChild('dynamicContentRight', { read: ViewContainerRef, static: true })
  dynamicContentRight!: ViewContainerRef;

  ngAfterViewInit(): void {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.loadDynammicComponent();
      });
    });
  }

  async loadDynammicComponent() {
    this.dynamicContentRight.clear();

    if (this.isOpenNewMessgae()) {
      const componentRef = this.dynamicContentRight.createComponent(
        ComposeEmailComponent
      );
      componentRef.instance.closenewMessage.subscribe((value: boolean) => {
        this.isOpenNewMessgae.set(value);
      });
    } else {
      const componentRef = this.dynamicContentRight.createComponent(
        MessageContentComponent
      );
      componentRef.setInput('email', this.selectedEmail());
    }
  }

  handleOpenNewMessage(isOpenNewMessgae: boolean) {
    this.isOpenNewMessgae.set(isOpenNewMessgae);
  }

  handleOpenEmailList(isOpenEmailList: boolean) {
    this.isOpenEmailList.set(isOpenEmailList);
    this.isOpenEmailDetail.set(true);
  }

  handleOpenEmailDetail(isOpenEmailDetail: boolean) {
    this.isOpenEmailDetail.set(isOpenEmailDetail);
    this.isOpenEmailList.set(false);
  }
}
