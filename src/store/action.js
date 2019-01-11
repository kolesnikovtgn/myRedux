export const REFRESH_LIST = 'REFRESH_LIST';
export const REFRESH_USER = 'REFRESH_USER';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

const dummyUser = {
  login: 'Vladimir',
  avatarUrl: '#',
  htmlUrl: '#',
  name: 'qqqz',
  location: 'qsdfa',
  email: 'asda',
  id: 21,
};

const randomNumber = a => Math.floor(Math.random() * a);

export const addUserAction = payload => (dispatch, getState) => $.ajax({
    // eslint-disable-line
  method: 'GET',
  url: `https://api.github.com/users?since=${randomNumber(500)}`,
}).then((data) => {
  const userNew = data[randomNumber(data.length)];
  const infoObject = {
    login: userNew.login,
    avatarUrl: userNew.avatar_url,
    htmlUrl: userNew.html_url,
  };
  dispatch({
    type: ADD_USER,
    payload: infoObject,
  });
});
