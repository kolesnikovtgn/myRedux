import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import githubApp from './reducer';

function logger({ getState }) {
  return next => (action) => {
    console.log('will dispatch', action);

    const returnValue = next(action);

    console.log('state after dispatch', getState());

    return returnValue;
  };
}

const middleware = [thunk, logger];
const store = createStore(githubApp, applyMiddleware(...middleware));
export default store;
