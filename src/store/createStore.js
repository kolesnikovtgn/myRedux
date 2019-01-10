import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import githubApp from './reducer';

function logger({ getState,dispatch }) {
  return next => (action) => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

const middleware = [thunk, logger];
const store = createStore(githubApp, applyMiddleware(...middleware));
export default store;
