import { createStore } from 'redux';
import githubApp from '../reducer/reducer';
import { refreshList, refreshUser1, refreshUser2, refreshUser3 } from '../action/action';

const store = createStore(githubApp);

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
   $('#usersBlock').on('click', '.arrow', function (event) {
    event.preventDefault();
    $(this).parent().siblings('.main__user-block-trash').toggle('not-active');
    $(this).parent().siblings('img').toggle('.margin-left');
    $currentId = $(this).parent().parent().prop('id');
    console.log($currentId);
  });
  $('#usersBlock').on('click', '.trash', function (event) {
    event.preventDefault();
    $(this).parent().parent().remove();
    console.log($(this).parent().parent().prop('id'));
  });
});
