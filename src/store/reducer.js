import {
  REFRESH_LIST,
  REFRESH_USER,
  ADD_USER,
  DELETE_USER,
} from './action';

const initialState = {
  userData: [
    {
      login: 'Vladimir',
      avatarUrl: '#',
      htmlUrl: '#',
      name: 'qqqz',
      location: 'qsdfa',
      email: 'asda',
      id: 0,
    },
    {
      login: 'Vladimir',
      avatarUrl: '#',
      htmlUrl: '#',
      name: 'qqqz',
      location: 'qsdfa',
      email: 'asda',
      id: 1,
    },
    {
      login: 'Vladimir',
      avatarUrl: '#',
      htmlUrl: '#',
      name: 'qqqz',
      location: 'qsdfa',
      email: 'asda',
      id: 2,
    },
  ],
};

export default function githubApp(state = initialState, action) {
  switch (action.type) {
    case REFRESH_LIST:
      return Object.assign({}, state, {
        userData: [
          action.usersData[0],
          action.usersData[1],
          action.usersData[2],
        ],
      });
    case REFRESH_USER:
      return Object.assign({}, state, {
        userData: action.userData,
      });

    case ADD_USER:
      return { ...state, userData: [...state.userData, action.payload] };
    case DELETE_USER:
      return { ...state, userData: state.userData.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
}
