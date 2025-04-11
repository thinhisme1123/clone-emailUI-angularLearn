import { Component, inject, OnInit, input, signal, output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EmailDataService } from '../../services/email-data.service';
import { NgFor, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WordLimitPipe } from '../../pipes/word-limit.pipe';
import { RelativeTimePipe } from '../../pipes/relative-time.pipe';
import { Email } from '../../models/Email';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-email-sidebar',
  standalone: true,
  imports: [MatCheckboxModule, WordLimitPipe, RelativeTimePipe,MatIcon],
  templateUrl: './email-sidebar.component.html',
  styleUrl: './email-sidebar.component.scss'
})
export class EmailSidebarComponent {
  private emailService = inject(EmailDataService);

  emails = this.emailService.emails;
  selectedEmail = signal<Email | null>(null);

  selectingEmail = output<Email | null>();

  isOpenDetail = false
  isOpenDetailEmail = output<boolean>()

  selectEmail(email: Email) {
    this.selectedEmail.set(email);
    this.selectingEmail.emit(email)
    // lấy giá trị trực tiếp của một signal là phải ()
    console.log('Selected Email:', this.selectedEmail());
    this.isOpenDetailEmail.emit(!this.isOpenDetail)
    
  }
}
