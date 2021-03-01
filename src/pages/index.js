import React from 'react';
import { myContext } from '../hooks/Provider';
import NavigationLink from '../components/NavigationLink';

const IndexPage = () => {
  return (
    <myContext.Consumer>
      {context => (
        <>
          {context.state.loading && (
            <h1>LOADING...</h1>
          )}
          {!context.state.loading && (
            <>
              <h1 className="text-2xl text-indigo-500 mb-2">Welcome to Isaiah's Trivia Challenge!</h1>
              <p className="text-lg my-4">You will be presented with 10 True or False questions.</p>
              <p className="text-lg mt-3 mb-8">Can you score 100%?</p>
              <NavigationLink
                to="/quiz/"
                linkText="BEGIN"
              />
            </>
          )}
        </>
      )}
    </myContext.Consumer>
  )
}

export default IndexPage
