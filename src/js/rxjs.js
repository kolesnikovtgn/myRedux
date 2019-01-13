import store from '../store/createStore';
import { refreshListAction } from '../store/action';
// import { deleteUserAction } from '../store/action';

// const testUser = {
//   login: 'Vladimir',
//   avatarUrl: '#',
//   htmlUrl: '#',
//   name: 'qqqz',
//   location: 'qsdfa',
//   email: 'asda',
//   id: 20,
// };

const userTemplate = (avatar, name, location, email, id) => ` 
<div class="main__user-block container-row" id="${id}">
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

function renderBlock(avatar, name, location, email, id) {
  $('#usersBlock').prepend(userTemplate(avatar, name, location, email, id));
}

$(document).ready(() => {

  // function deleteItem() {
  //   store.dispatch({ type: 'DELETE_USER', payload: 20 });
  // }
  
  // function addOneUserAfterDelete() {
  //   const currentState = store.getState();
  //   renderBlock(currentState.userData.avatar_url, currentState.userData.login, currentState.userData.login, currentState.userData.login);
  // }

  // function deleteOneUser() {
  //   store.dispatch(deleteUserAction());
  // }

  function deleteItem(id) {
    store.dispatch({ type: 'DELETE_USER', payload: id });
  }

  function refreshAllUsers() {
    const currentState = store.getState();
    $('#usersBlock').empty();
    currentState.userData.forEach((el) => {
      renderBlock(el.avatar_url, el.login, el.login, el.login, el.id);
    });
  }

  function addUsers() {
    store.dispatch(refreshListAction());
  }

  $('#usersBlock').on('click', '.arrow', function (event) {
    event.preventDefault();
    $(this).parent().siblings('.main__user-block-trash').toggle('.not-active');
    $(this).parent().siblings('img').toggle('.margin-left');
  });

  $('#usersBlock').on('click', '.trash', function (event) {
    event.preventDefault();
    $(this).parent().parent().remove();

    // console.log($(this).parent().parent().prop('id'));
    deleteItem($(this).parent().parent().prop('id'));
    // addUsers();
    // console.log($(this).parent().parent().prop('id'));
  });

  $('.refresh').on('click', function() {
    console.log('refresh button is click');
    addUsers();
  });
  
  addUsers();
  store.subscribe(refreshAllUsers);
  store.subscribe(addOneUserAfterDelete);
});
