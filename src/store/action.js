export const REFRESH_LIST = 'REFRESH_LIST';
export const DELETE_USER = 'DELETE_USER';

const randomNumber = a => Math.floor(Math.random() * a);

export const addUserAction = payload => (dispatch, getState) => $.ajax({
    // eslint-disable-line
  method: 'GET',
  url: `https://api.github.com/users?since=${randomNumber(500)}`,
}).then((data) => {
  const usersForWidget = [data[randomNumber(data.length)],
    data[randomNumber(data.length)],
    data[randomNumber(data.length)],
  ];

  const userData = JSON.parse(JSON.stringify(usersForWidget));
  dispatch({
    type: 'REFRESH_LIST',
    payload: userData,
  });
});
