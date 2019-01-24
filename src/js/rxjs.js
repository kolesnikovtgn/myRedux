import store from '../store/createStore';
import { refreshListAction } from '../store/action';

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

const userTemplateArrow = (avatar, name, location, email, id) => ` 
<div class="main__user-block container-row" id="${id}">
  <img class="main__user-block-avatar margin-left" src="${avatar}">
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
<div class="main__user-block-trash"> 
  <i class="far fa-trash-alt trash"></i>
</div> 
</div>`;

function renderBlock(avatar, name, location, email, id, status) {
// eslint-disable-next-line no-unused-expressions
  status
    ? $('#usersBlock')
      .prepend(userTemplateArrow(avatar, name, location, email, id))
    : $('#usersBlock')
      .prepend(userTemplate(avatar, name, location, email, id));
}

$(document).ready(() => {
  function deleteItem(id) {
    store.dispatch({ type: 'DELETE_USER', payload: id });
  }

  function renderArrow(id) {
    store.dispatch({ type: 'ARROW_CLICK', payload: id });
  }

  function renderUsers() {
    const currentState = store.getState();
    $('#usersBlock').empty();
    for (let i = 0; i < 3; i += 1) {
      renderBlock(currentState.userData[i].avatar_url, currentState.userData[i].login,
        currentState.userData[i].login, currentState.userData[i].login,
        currentState.userData[i].id, currentState.userData[i].arrowStatus);
    }
  }

  function addUsers() {
    store.dispatch(refreshListAction());
  }
  // eslint-disable-next-line func-names
  $('#usersBlock').on('click', '.arrow', function (event) {
    event.preventDefault();
    renderArrow(parseInt($(this).parent().parent().prop('id'), 0));
  });

  // eslint-disable-next-line func-names
  $('#usersBlock').on('click', '.trash', function (event) {
    event.preventDefault();
    deleteItem(parseInt($(this).parent().parent().prop('id'), 0));
  });

  $('.refresh').on('click', () => {
    addUsers();
  });

  addUsers();
  store.subscribe(renderUsers);
});
