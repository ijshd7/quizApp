import React from 'react';
import { navigate } from 'gatsby';
import { myContext } from '../hooks/Provider';
import he from 'he';
import Button from '../components/Button';

const QuizPage = () => {
    return (
        <myContext.Consumer>
            {context => (
                <>
                    {context.page < 10 && (
                        <>
                            <h1 className="text-4xl text-indigo-500 mb-8">{context.state.data[context.page - 1].category}</h1>
                            <p className="text-red-500">Difficulty: {context.state.data[context.page - 1].difficulty}</p>
                            <p className="text-lg my-4">{he.decode(`${context.state.data[context.page - 1].question}`)}</p>
                            <p className="text-sm text-indigo-500">{context.page} of 10</p>
                            <Button
                                buttonText="TRUE"
                                isTrueButton
                                buttonActions={() => context.hitTrue()}
                            />
                            <Button
                                buttonText="FALSE"
                                buttonActions={() => context.hitFalse()}
                            />
                        </>
                    )}
                    {context.page === 10 && (
                        <>
                            <h1 className="text-4xl text-indigo-500 mb-8">{context.state.data[context.page - 1].category}</h1>
                            <p className="text-red-500">Difficulty: {context.state.data[context.page - 1].difficulty}</p>
                            <p className="text-lg my-4">{he.decode(`${context.state.data[context.page - 1].question}`)}</p>
                            <p className="text-sm text-indigo-500">10 of 10</p>
                            <Button
                                buttonText="TRUE"
                                isTrueButton
                                buttonActions={() => {
                                    context.hitTrue();
                                    context.calculateScore();
                                    context.updateScore();
                                    context.updateRight();
                                    context.updateWrong();
                                    navigate('/results/');
                                }}
                            />
                            <Button
                                buttonText="FALSE"
                                buttonActions={() => {
                                    context.hitFalse();
                                    context.calculateScore();
                                    context.updateScore();
                                    context.updateRight();
                                    context.updateWrong();
                                    navigate('/results/');
                                }}
                            />
                        </>
                    )}
                </>
            )}
        </myContext.Consumer>
    );
}

export default QuizPage;