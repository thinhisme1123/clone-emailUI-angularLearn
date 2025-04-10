export interface Email {
  id: number;
  sender: string;
  subject: string;
  content: string;
  time: string;
  haveFiles:boolean;
  date: Date;
}
