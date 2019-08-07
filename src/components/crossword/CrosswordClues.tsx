import React from 'react';
import { Crossword } from './types';

interface CrosswordCluesProps {
  crossword: Crossword;
}

const CrosswordClues = ({ crossword }: CrosswordCluesProps) => {
  const { across, down } = crossword.clues;
  const clueTableLength = Math.max(across.length, down.length);
  const clueRows = [];
  for (let i = 0; i < clueTableLength; i++) {
    const row = [across[i] || '', down[i] || ''];
    clueRows.push(row);
  }
  return (
    <table>
      <tr>
        <td>
          <h3>Across:</h3>
        </td>
        <td>
          <h3>Down:</h3>
        </td>
      </tr>
      {clueRows.map(row => (
        <tr>
          {row.map(cell => (
            <td>{cell}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default CrosswordClues;
