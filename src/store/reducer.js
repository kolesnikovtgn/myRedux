import {
  REFRESH_LIST,
  DELETE_USER,
} from './action';

const initialState = {
  userData: [
    {
      avatar: '#',
      login: 'Vladimir',
      location: 'qsdfa',
      email: 'asda',
      id: 0,
    },
    {
      avatar: '#',
      login: 'Vladimir',
      location: 'qsdfa',
      email: 'asda',
      id: 1,
    },
    {
      avatar: '#',
      login: 'Vladimir',
      location: 'qsdfa',
      email: 'asda',
      id: 2,
    },
  ],
};

export default function githubApp(state = initialState, action) {
  switch (action.type) {
    case REFRESH_LIST:
      return { ...state, userData: action.payload };
    case DELETE_USER:
      return { ...state, userData: state.userData.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
}
