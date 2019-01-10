import { REFRESH_LIST, REFRESH_USER } from '../action/action';

const initialState = {
  userData: [{ login: 'Vladimir', avatarUrl: '#', htmlUrl: '#' },
             { login: 'Vladimir', avatarUrl: '#', htmlUrl: '#' },
             { login: 'Vladimir', avatarUrl: '#', htmlUrl: '#' },
            ]
};

export default function githubApp(state = initialState, action) {
  switch (action.type) {
    case REFRESH_LIST:
      return Object.assign({}, state, {
        userData: [action.usersData[0],
        action.usersData[1],
        action.usersData[2]]
      });
    case REFRESH_USER:
      return Object.assign({}, state, {
        userData: action.userData,
      });
    
    default:
      return state;
  }
}