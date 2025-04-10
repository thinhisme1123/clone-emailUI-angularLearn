import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime',
  standalone: true
})
export class RelativeTimePipe implements PipeTransform {
  transform(date: Date | string): string {
    if (!date) return '';
    
    // Convert string to Date if needed
    const emailDate = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    
    // Calculate difference in milliseconds
    const diffMs = now.getTime() - emailDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    // If less than 24 hours ago, show relative time
    if (diffDays < 1) {
      if (diffHours < 1) {
        return diffMins <= 1 ? 'Just now' : `${diffMins} minutes ago`;
      } else {
        return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
      }
    } else if (diffDays < 7) {
      // If less than a week ago, show days
      return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
    } else {
      // Otherwise, format as date
      return emailDate.toLocaleDateString();
    }
  }
} 