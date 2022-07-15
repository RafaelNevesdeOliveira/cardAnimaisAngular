export interface Animal {
  id: number;
  userId: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
}

export type Animais = Array<Animal>;
