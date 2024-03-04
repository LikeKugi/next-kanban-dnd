export interface ITask {
  id: number;
  title: string;
  content: string;
}

export interface IColumn {
  id: number;
  title: string;
}


export interface IAuthor {
  id: string;
  name: string;
  url: string;
  avatarUrl: string;
  colors: {
    soft: string;
    hard: string;
  }
}
export interface IItem  {
  id: string;
  content: string;
  author: IAuthor;
}

export type IItems = IItem[];

export type IKanbanBoard = Record<string, IItems>
