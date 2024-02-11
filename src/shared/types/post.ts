export interface IPost {
  id: number;
  title: string;
  text: string;
  user_id: number;
  date: Date;
  liked_by: number[];
  disliked_by: number[];
}
