const sideNavTag = document.querySelector('.side-nav');
const sideNavToggleTag = document.querySelector('.side-nav-toggle');

sideNavToggleTag.addEventListener('click', function (e) {
  e.preventDefault();
  sideNavToggleTag.classList.toggle('expanded');
  sideNavTag.classList.toggle('expanded');;
});
