import React, { useState, useEffect } from 'react';
import he from 'he';

export const myContext = React.createContext();

const Provider = props => {
    const [state, setState] = useState({
        loading: true,
        error: false,
        data: [],
    });
    const [page, setPage] = useState(1);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [allQuestions, setAllQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [right, setRight] = useState([]);
    const [wrong, setWrong] = useState([]);
    function clearScore() {
      updatedScore = 0;
    }
    function clearRights() {
      while (rights.length > 0) {
        rights.pop();
      }
    }
    function clearWrongs() {
      while (wrongs.length > 0) {
        wrongs.pop();
      }
    }
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
        <myContext.Provider
            value={{
              state, page, score, answers, right, wrong,
              hitTrue: () => {setAnswers(answers.concat('True')); setPage(page + 1);},
              hitFalse: () => {setAnswers(answers.concat('False')); setPage(page + 1);},
              resetAll: () => {
                setAnswers([]);
                setPage(1);
                setScore(0);
                setRight([]);
                setWrong([]);
                clearScore();
                clearWrongs();
                clearRights();
              },
              calculateScore: () => calcScore(answers, correctAnswers),
              updateScore: () => setScore(score + updatedScore),
              updateRight: () => setRight(right.concat(rights)),
              updateWrong: () => setWrong(wrong.concat(wrongs)),
              showRightAnswers: () => { return right.map((result, index) => {
                return (
                  <p className="text-green-300 text-sm" key={index}>
                    + {he.decode(`${allQuestions[result]}`)}
                  </p>)
              })},
              showWrongAnswers: () => { return wrong.map((result, index) => {
                return (
                  <p className="text-red-500 text-sm" key={index}>
                    - {he.decode(`${allQuestions[result]}`)}
                  </p>
                )
              })},
            }}
        >
            {props.children}
        </myContext.Provider>
    );
}

export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
);