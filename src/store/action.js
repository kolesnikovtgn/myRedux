export const REFRESH_LIST = 'REFRESH_LIST';
export const REFRESH_USER = 'REFRESH_USER';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

const randomNumber = a => Math.floor(Math.random() * a);

export const addUserAction = payload => (dispatch, getState) => $.ajax({
    // eslint-disable-line
  method: 'GET',
  url: `https://api.github.com/users?since=${randomNumber(500)}`,
}).then((data) => {
  console.log(data);
  const usersForWidget = [data[randomNumber(data.length)],
    data[randomNumber(data.length)],
    data[randomNumber(data.length)],
  ];
  // const userNew = data[randomNumber(data.length)];
  // const userData = { avatar, name, location, email
  //   login: userNew.login,
  //   avatarUrl: userNew.avatar_url,
  //   htmlUrl: userNew.html_url,
  // };
  const userData = JSON.parse(JSON.stringify(usersForWidget));
  dispatch({
    type: 'ADD_USER',
    payload: userData,
  });
});
