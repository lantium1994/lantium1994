// variables
const profPic = document.querySelector('.prof-pic');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.nav-bar');
const optList = document.querySelector('.opt-list');
const navList = document.querySelector('.nav-list');
const banner = document.querySelector('.banner');
const socialLink = document.querySelector('.social-link');
const followBtn = document.querySelector('.follow-btn');

// functions
window.addEventListener('scroll', (e) => {
  let scrollHeight = parseInt(window.scrollY);
  let bannerHeight = parseInt(banner.offsetHeight);
  if (scrollHeight >= 658) {
    navBar.classList.add('just-center');
    profPic.classList.add('opc');
  } else {
    navBar.classList.remove('just-center');
    profPic.classList.remove('opc');
  }
  if (scrollHeight >= bannerHeight - 100) {
    nav.classList.add('top');
  } else if (scrollHeight < bannerHeight - 150) {
    nav.classList.remove('top');
  }

  if (scrollHeight > bannerHeight - parseInt(navList.offsetHeight)) {
    navList.classList.remove('switch');
  }
});

profPic.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

optList.addEventListener('click', () => {
  navList.classList.toggle('switch');
});

followBtn.addEventListener('click', () => {
  followBtn.classList.add('vanish');
  socialLink.classList.add('vanish');
});
