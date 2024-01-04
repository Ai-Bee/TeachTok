export type SVGIconName =
  | 'plus-icon'
  | 'home'
  | 'compass'
  | 'bookmark'
  | 'stopwatch'
  | 'heart'
  | 'send'
  | 'thumbs-up'
  | 'thumbs-down'
  | 'caret-right'
  | 'search-icon'
  | 'playlist'
  | 'comment-bubble'
  | 'avatar';

export interface option {
  id: string;
  answer: string;
}

export interface correctOption {
  id: number;
  correct_options: option[];
}

export interface question {
  description: string;
  id: number;
  image: string;
  options: option[];
  playlist: string;
  question: string;
  type: string;
  user: {
    avatar: string;
    name: string;
  };
}
