export type Crossword = {
  acrossmap?: any;
  admin?: boolean;
  answers: {
    across: string[];
    down: string[];
  };
  author: string;
  autowrap?: any;
  bbars?: any;
  circles?: any;
  clues: {
    across: string[];
    down: string[];
  };
  code?: any;
  copyright?: string;
  date?: string;
  dow?: string;
  downmap?: any;
  editor?: string;
  grid: string[];
  gridnums: number[];
  hold?: any;
  id?: any;
  id2?: any;
  interpretcolors?: any;
  jnotes?: any;
  key?: any;
  mini?: any;
  notepad?: any;
  publisher?: string;
  rbars?: any;
  shadecircles?: any;
  size: {
    cols: number;
    rows: number;
  };
  title?: string;
  track?: any;
  type?: any;
};
