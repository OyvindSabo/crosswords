import React, { useState, useEffect } from 'react';
import CrosswordVisualization from './CrosswordVisualization';
import CrosswordTitle from './CrosswordTitle';
import { Crossword } from './types';
import CrosswordClues from './CrosswordClues';

interface NewYorkTimesCrosswordProps {
  match: {
    params: {
      year: number;
      month: number;
      day: number;
    };
  };
}

const NewYorkTimesCrossword = ({ match }: NewYorkTimesCrosswordProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [crossword, setCrossword] = useState<any>(null);
  const [error, setError] = useState(null);

  const { year, month, day } = match.params;
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/doshea/nyt_crosswords/master/${year}/${month}/${day}.json`
    )
      .then(res => {
        res.json().then(res => {
          setCrossword(res);
          setIsLoading(false);
        });
      })
      .catch(error => {
        setError(error);
      });
  }, [day, month, year]);
  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      {crossword && (
        <>
          <CrosswordTitle crossword={crossword as Crossword} />
          <CrosswordVisualization crossword={crossword as Crossword} />
          <CrosswordClues crossword={crossword as Crossword} />;
        </>
      )}
    </div>
  );
};

export default NewYorkTimesCrossword;
