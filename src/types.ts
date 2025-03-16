export interface BookData {
  id: number;
  title: string;
  subTitle: string;
  author: string;
  publisher: string;
  description: string;
  coverImgUrl: string;
}

export interface ReviewData {
  id: number;
  bookId: number;
  userId: number;
  author: string;
  content: string;
  score: number;
  createdAt: string;
} 