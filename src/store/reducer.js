/* eslint-disable no-param-reassign */

import {
  REFRESH_LIST,
  DELETE_USER,
  ARROW_CLICK,
} from './action';

const initialState = {
  userData: [
    {
      avatar: '#',
      login: 'Vladimir',
      location: 'qsdfa',
      email: 'asda',
      id: 0,
      arrowStatus: false,
    },
    {
      avatar: '#',
      login: 'Vladimir',
      location: 'qsdfa',
      email: 'asda',
      id: 1,
      arrowStatus: false,
    },
    {
      avatar: '#',
      login: 'Vladimir',
      location: 'qsdfa',
      email: 'asda',
      id: 2,
      arrowStatus: false,
    },
  ],
};

export default function githubApp(state = initialState, action) {
  switch (action.type) {
    case REFRESH_LIST:
      return { ...state, userData: action.payload };
    case DELETE_USER:
      return { ...state, userData: state.userData.filter(item => item.id !== action.payload) };
    case ARROW_CLICK:
      // return {
      //   ...state,
      //   userData: state.userData.forEach((item) => {
      //     if (item.id === action.payload) {
      //       item.arrowStatus = !item.arrowStatus;
      //     }
      //   }),
      // };
      return {
        ...state,
        userData: state.userData.map(item => ((item.id === action.payload)
          ? { ...item, arrowStatus: !item.arrowStatus } : item)),
      };
    default:
      return state;
  }
}
