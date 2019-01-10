export const REFRESH_LIST = 'REFRESH_LIST';
export const REFRESH_USER = 'REFRESH_USER';

export function refreshList(usersData) {
  return {
    type: REFRESH_LIST,
    usersData,
  };
}

export function refreshUser(userData) {
  return {
    type: REFRESH_USER,
    userData,
  };
}