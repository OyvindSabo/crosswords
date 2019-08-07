import React from 'react';
import { Crossword } from './types';

interface CrosswordTitleProps {
  crossword: Crossword;
}

const CrosswordTitle = ({ crossword }: CrosswordTitleProps) => (
  <h2>{crossword.title}</h2>
);

export default CrosswordTitle;
