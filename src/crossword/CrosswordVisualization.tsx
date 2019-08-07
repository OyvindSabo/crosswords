import React from 'react';
import styled from 'styled-components';
import { Crossword } from './types';

const Cell = styled.td`
  min-width: 50px;
  height: 50px;
  border: solid black;
`;

interface CrosswordVisualizationProps {
  crossword: Crossword;
}

const CrosswordVisualization = ({ crossword }: CrosswordVisualizationProps) => {
  const { grid, gridnums } = crossword;
  const width = crossword.size.cols;
  const height = crossword.size.rows;
  const rows = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(grid[i * width + j]);
    }
    rows.push(row);
  }
  return (
    <table>
      {rows.map(row => (
        <tr>
          {row.map(cell => (
            <Cell>{cell}</Cell>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default CrosswordVisualization;
