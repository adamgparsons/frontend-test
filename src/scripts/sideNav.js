// tags to reference classes
const sideNavTag = document.querySelector('.side-nav');
const sideNavToggleTag = document.querySelector('.side-nav-toggle');

//when side nav icon is clicked
sideNavToggleTag.addEventListener('click', function (e) {
  e.preventDefault();
  // toggle 'expanded class to side nav toggle and side nav
  sideNavToggleTag.classList.toggle('expanded');
  sideNavTag.classList.toggle('expanded');;
});
