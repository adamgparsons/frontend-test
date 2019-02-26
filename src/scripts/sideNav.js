const navTag = document.querySelector('.nav');
const navToggleTag = document.querySelector('.nav-toggle');

navToggleTag.addEventListener('click', function (e) {
  e.preventDefault();
  navToggleTag.classList.toggle('expanded');
  navTag.classList.toggle('expanded');;
});
