let hamburgerControl = document.querySelector('.hamburgerImg');
let hamburgerContentDisplay = document.querySelector('#nav2Min');

hamburgerControl.addEventListener('click', function() {
  if (hamburgerContentDisplay.className !== 'newNav2') {
    hamburgerContentDisplay.setAttribute('class', 'newNav2');
    hamburgerControl.setAttribute('src', 'images/icon-cancel.svg');
  } else {
    hamburgerContentDisplay.className = 'nav2';
    hamburgerControl.setAttribute('src', 'images/icon-hamburger.svg');
  }
});
