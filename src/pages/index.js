import React, { useState, useEffect } from 'react';
import he from 'he';

const mainStyle = {
  textAlign: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
}
const headerStyle = {
  color: '#000000',
}
const paraStyle = {
  marginTop: '2rem',
}
const buttonStyle = {
  marginTop: '1rem',
  marginLeft: '2rem',
  marginRight: '2rem',
}
const anchorStyle = {
  bottom: '0',
  position: 'fixed',
  marginLeft: '-5rem',
}

const IndexPage = () => {
  const [state, setState] = useState({
    loading: true,
    error: false,
    data: [],
  });
  const [page, setPage] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [right, setRight] = useState([]);
  const [wrong, setWrong] = useState([]);
  const [visibleResults, setVisibleResults] = useState(false);
  let updatedScore = 0;
  let rights = [];
  let wrongs = [];
  const calcScore = (x, y) => {
    for (let i = 0; i < 10; i++) {
      if (x[i] === y[i]) {
        updatedScore = updatedScore + 1;
        rights.push(i);
      } else wrongs.push(i);
    }
  }
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(response => {
        return response.json()
      })
      .then(json => {
        const correctAnswer = json.results.map(q => q['correct_answer']);
        const questionBulk = json.results.map(q => q['question']);
        setState({
          data: json.results,
          loading: false,
          error: false,
        });
        setCorrectAnswers(correctAnswers.concat(correctAnswer));
        setAllQuestions(allQuestions.concat(questionBulk));
      })
      .catch(err => {
        setState({error: err})
      })
  }, [])
  return (
    <main style={mainStyle}>
      {state.loading && (
        <h1 style={headerStyle}>LOADING...</h1>
      )}
      {page === 0 && (
        <>
          <h1 style={headerStyle}>Welcome to the Trivia Challenge!</h1>
          <p style={paraStyle}>You will be presented with 10 True or False questions.</p>
          <p style={paraStyle}>Can you score 100%?</p>
          <button 
            style={buttonStyle}
            onClick={() => setPage(page + 1)}
          >
            BEGIN
          </button>
        </>
      )} 
      {(page > 0 && page < 10) && (
        <>
          <h1 style={headerStyle}>
            {state.data[page - 1].category}
          </h1>
          <p style={paraStyle}>
            Difficulty: {state.data[page - 1].difficulty}
          </p>
          <p style={paraStyle}>
            {he.decode(`${state.data[page - 1].question}`)}
          </p>
          <p style={paraStyle}>
            {page} of 10
          </p>
          <button
            style={buttonStyle}
            onClick={() => {
              setAnswers(answers.concat('True'));
              setPage(page + 1)
            }}
          >
            TRUE
          </button>
          <button
            style={buttonStyle}
            onClick={() => {
              setAnswers(answers.concat('False'));
              setPage(page + 1)
            }}
          >
            FALSE
          </button>
        </>
      )}
      {(page === 10 && (
        <>
          <h1 style={headerStyle}>
            {state.data[page - 1].category}
          </h1>
          <p style={paraStyle}>
            Difficulty: {state.data[page - 1].difficulty}
          </p>
          <p style={paraStyle}>
            {he.decode(`${state.data[page - 1].question}`)}
          </p>
          <p style={paraStyle}>
            {page} of 10
          </p>
          <button
            style={buttonStyle}
            onClick={() => {
              setAnswers(answers.concat('True'));
              setPage(page + 1);
              calcScore(answers, correctAnswers);
              setScore(score + updatedScore);
              setRight(right.concat(rights));
              setWrong(wrong.concat(wrongs));
            }}
          >
            TRUE
          </button>
          <button
            style={buttonStyle}
            onClick={() => {
              setAnswers(answers.concat('False'));
              setPage(page + 1);
              calcScore(answers, correctAnswers);
              setScore(score + updatedScore);
              setRight(right.concat(rights));
              setWrong(wrong.concat(wrongs));
            }}
          >
            FALSE
          </button>
        </>
      ))}
      {(page >= 11 && (
        <>
          <h1 style={headerStyle}>
            You Finished!
          </h1>
          <p style={paraStyle}>
            Your score was {score}/10
          </p>
          <button
            style={buttonStyle}
            onClick={() => {
              setVisibleResults(!visibleResults);
            }}
          >
            {!visibleResults && `SHOW RESULTS`}
            {visibleResults && `HIDE RESULTS`}
          </button>
          {visibleResults && (
            <>
              {right.map(result => 
                <p style={{color: 'green', fontSize: '0.75rem'}} key={result}>
                  + {he.decode(`${allQuestions[result]}`)}
                </p>
              )}
              {wrong.map(result => 
                <p style={{color: 'red', fontSize: '0.75rem'}} key={result}>
                  - {he.decode(`${allQuestions[result]}`)}
                </p>
              )}
            </>
          )}
          <button
            style={buttonStyle}
            onClick={() => {
              setPage(0);
              setScore(0);
              setAnswers([])
            }}
          >
            Try Again?
          </button>
        </>
      ))}
      <a style={anchorStyle} href="https://github.com/ijshd7/quizApp" target="_blank" rel="noreferrer">source</a>
    </main>
  )
}

export default IndexPage
