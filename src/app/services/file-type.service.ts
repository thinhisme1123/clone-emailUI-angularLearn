import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileTypeService {
  
  // Map file extensions to Material icons
  private fileIconMap: { [key: string]: string } = {
    // Documents
    'pdf': 'picture_as_pdf',
    'doc': 'description',
    'docx': 'description',
    'txt': 'article',
    'rtf': 'article',
    
    // Spreadsheets
    'xls': 'table_chart',
    'xlsx': 'table_chart',
    'csv': 'table_chart',
    
    // Presentations
    'ppt': 'slideshow',
    'pptx': 'slideshow',
    
    // Images
    'jpg': 'image',
    'jpeg': 'image',
    'png': 'image',
    'gif': 'image',
    'bmp': 'image',
    'svg': 'image',
    
    // Archives
    'zip': 'folder_zip',
    'rar': 'folder_zip',
    '7z': 'folder_zip',
    'tar': 'folder_zip',
    'gz': 'folder_zip',
    
    // Audio
    'mp3': 'audiotrack',
    'wav': 'audiotrack',
    'ogg': 'audiotrack',
    
    // Video
    'mp4': 'videocam',
    'avi': 'videocam',
    'mov': 'videocam',
    'wmv': 'videocam',
    
    // Code
    'js': 'code',
    'ts': 'code',
    'html': 'code',
    'css': 'code',
    'json': 'code',
    'xml': 'code',
    
    // Default
    'default': 'insert_drive_file'
  };
  
  // Get the appropriate icon for a file type
  getFileIcon(fileName: string): string {
    if (!fileName) return this.fileIconMap['default'];
    
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    return this.fileIconMap[extension] || this.fileIconMap['default'];
  }
  
  // Format file size to human-readable format
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  // Get file type category
  getFileTypeCategory(fileName: string): string {
    if (!fileName) return 'unknown';
    
    const extension = fileName.split('.').pop()?.toLowerCase() || '';
    
    if (['pdf', 'doc', 'docx', 'txt', 'rtf'].includes(extension)) return 'document';
    if (['xls', 'xlsx', 'csv'].includes(extension)) return 'spreadsheet';
    if (['ppt', 'pptx'].includes(extension)) return 'presentation';
    if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'].includes(extension)) return 'image';
    if (['zip', 'rar', '7z', 'tar', 'gz'].includes(extension)) return 'archive';
    if (['mp3', 'wav', 'ogg'].includes(extension)) return 'audio';
    if (['mp4', 'avi', 'mov', 'wmv'].includes(extension)) return 'video';
    if (['js', 'ts', 'html', 'css', 'json', 'xml'].includes(extension)) return 'code';
    
    return 'other';
  }
} 