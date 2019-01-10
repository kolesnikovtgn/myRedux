import store from '../store/createStore';
import { addUserAction } from '../store/action';

const dummyUser = {
  login: 'Vladimir',
  avatarUrl: '#',
  htmlUrl: '#',
  name: 'qqqz',
  location: 'qsdfa',
  email: 'asda',
  id: 20,
};

const countUsersList = 3;
const randomNumber = a => Math.floor(Math.random() * a);
const userTemplate = (avatar, name, location, email) => ` 
<div class="main__user-block container-row">
  <img class="main__user-block-avatar" src="${avatar}">
  <div class="main__user-block-text container-column">
    <div class="main__user-block-text_name">${name}</div>
    <div class="main__user-block-text_location container-row">
    <i class="main__user-block-text_location-marker fas fa-map-marker-alt"></i>
    <div class="main__user-block-text_location-text">${location}</div>
  </div>
  <div class="main__user-block-text_mail">${email}</div>
</div>
<div class="main__user-block-arrow container-column">
  <i class="fas fa-chevron-right arrow"></i> 
</div>
<div class="main__user-block-trash not-active"> 
  <i class="far fa-trash-alt trash"></i>
</div> 
</div>`;

function renderBlock(avatar, name, location, email) {
  $('#usersBlock').prepend(userTemplate(avatar, name, location, email));
}

$(document).ready(() => {
  function loadStore() {
    const currentState = store.getState();
    console.log('currentState', currentState);
    currentState.userData.forEach(({ name, email, location }) => {
      renderBlock(null, name, email, location);
    });
  }
  function addItem() {
    store.dispatch({ type: 'ADD_USER', payload: dummyUser });
  }

  function deleteItem() {
    store.dispatch({ type: 'DELETE_USER', payload: 20 });
  }

  addItem();
  loadStore();

  function addUser(){
    store.dispatch(addUserAction());

  }
    addUser();
  $('#usersBlock').on('click', '.arrow', function (event) {
    event.preventDefault();
    $(this)
      .parent()
      .siblings('.main__user-block-trash')
      .toggle('not-active');
    $(this)
      .parent()
      .siblings('img')
      .toggle('.margin-left');
  });
  $('#usersBlock').on('click', '.trash', function (event) {
    event.preventDefault();
    $(this)
      .parent()
      .parent()
      .remove();
    console.log(
      $(this)
        .parent()
        .parent()
        .prop('id'),
    );
  });
  store.subscribe(loadStore);
});
