import { UserInterface } from 'interfaces/user';
import { VideoInterface } from 'interfaces/video';
import { GetQueryInterface } from 'interfaces';

export interface CommentInterface {
  id?: string;
  content: string;
  user_id?: string;
  video_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  video?: VideoInterface;
  _count?: {};
}

export interface CommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  video_id?: string;
}
