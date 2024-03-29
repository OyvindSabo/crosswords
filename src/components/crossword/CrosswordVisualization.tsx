import React from 'react';
import styled from 'styled-components';
import { Crossword } from './types';

const Table = styled.table`
  background: black;
`;

const Cell = ({ gridChar, gridNum }: { gridChar: string; gridNum: number }) => {
  const emptyCell = gridChar === '.';
  return (
    <td
      style={{
        background: emptyCell ? 'black' : 'white',
        height: '50px',
        width: '50px',
      }}
    >
      <div style={{ position: 'absolute', pointerEvents: 'none' }}>
        <div
          style={{
            position: 'relative',
            left: '0',
            top: '0',
            fontSize: '14px',
          }}
        >
          {gridNum === 0 ? '' : gridNum}
        </div>
      </div>
      {!emptyCell && (
        <input
          style={{
            border: '0',
            fontSize: '28px',
            outline: 'none',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
          size={1}
        />
      )}
    </td>
  );
};

interface CrosswordVisualizationProps {
  crossword: Crossword;
}

const CrosswordVisualization = ({ crossword }: CrosswordVisualizationProps) => {
  const { grid, gridnums } = crossword;
  const width = crossword.size.cols;
  const height = crossword.size.rows;
  const crosswordRows = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push({
        gridChar: grid[i * width + j],
        gridNum: gridnums[i * width + j],
      });
    }
    crosswordRows.push(row);
  }
  return (
    <Table>
      {crosswordRows.map(row => (
        <tr>
          {row.map(({ gridChar, gridNum }) => (
            <Cell gridChar={gridChar} gridNum={gridNum} />
          ))}
        </tr>
      ))}
    </Table>
  );
};

export default CrosswordVisualization;
