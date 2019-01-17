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
    case ARROW_CLICK:
      return { ...state, userData: state.userData.map(item => {
        if (item.id === action.id) { return { ...item, arrowStatus: 'true' };  
      }
      return item;
    }

      )};
    default:
      return state;
  }
}
