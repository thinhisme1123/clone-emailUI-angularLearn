import { Component, output } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compose-email',
  standalone: true,
  imports: [CommonModule, FormsModule, QuillModule],
  templateUrl: './composeemail.component.html',
  styleUrls: ['./composeemail.component.scss']
})
export class ComposeEmailComponent {
  to = ''
  subject = '';
  content = '';
  files: File[] = [];


  closenewMessage = output<boolean>()


  closeNewMessage() {
    this.closenewMessage.emit(false)
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files) {
      this.files.push(...Array.from(input.files));
    }
  }

  removeFile(index: number) {
    this.files.splice(index, 1);
  }

  sendEmail() {
    console.log('Subject:', this.subject);
    console.log('Content:', this.content);
    console.log('Files:', this.files);
    this.to = ''
    this.subject = ''
    this.content = ''
    this.files = []
  }
}
