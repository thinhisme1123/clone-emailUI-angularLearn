import { Email } from './../../models/Email';
import { Component, input } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LineBreakPipe } from '../../pipes/line-break.pipe';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-message-content',
  standalone: true,
  imports: [CommonModule, MatIcon, MatIconModule, LineBreakPipe, MatButtonModule],
  templateUrl: './message-content.component.html',
  styleUrl: './message-content.component.scss'
})
export class MessageContentComponent {

  email = input<Email | null>(null)
  
}
