import React from 'react';
import Button from '../components/Button';
import { navigate } from 'gatsby';
import { myContext } from '../hooks/Provider';

const ResultsPage = () => {
    return (
        <myContext.Consumer>
            {context => (
                <>
                    <h1 className="text-3xl text-indigo-500 mb-4">You Finished!</h1>
                    <p className="text-2xl text-green-300 my-2">Your score was {context.score}/10</p>
                    <>
                        {context.showRightAnswers()}
                        {context.showWrongAnswers()}
                    </>
                    <Button
                        buttonText="Try Again?"
                        buttonActions={() => {
                            context.resetAll();
                            navigate('/');
                        }}
                    />
                </>
            )}
        </myContext.Consumer>
    );
}

export default ResultsPage;