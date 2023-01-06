const banner = document.querySelector('.banner');
const blockAll = document.querySelector('.block-all');
const profPic = document.querySelector('.prof-pic');
const navList = document.querySelector('.nav-list');
const optList = document.querySelector('.opt-list');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.nav-bar');

// functions
profPic.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
  let scrollHeight = parseInt(window.scrollY);
  let bannerHeight = parseInt(banner.offsetHeight);
  if (scrollHeight >= 258) {
    navBar.classList.add('just-center');
    profPic.classList.add('opc');
  } else {
    navBar.classList.remove('just-center');
    profPic.classList.remove('opc');
  }

  if (scrollHeight >= bannerHeight) {
    nav.classList.add('top');
  } else if (scrollHeight < bannerHeight) {
    nav.classList.remove('top');
  }

  if (scrollHeight > bannerHeight - parseInt(navList.offsetHeight)) {
    navList.classList.remove('switch');
  }
});

window.addEventListener('click', () => {
  // setTimeout(() => {
  if (blockAll.classList.contains('show')) {
    blockAll.classList.remove('show');
  }
  // }, 100);
});

let showArr = [];
const time = (time) => {
  return `${time.split(',')[3]} : ${time.split(',')[4]}`;
};

const dataObj = async function () {
  const response = await fetch('./dev-data/data.json').then();
  const datas = await response.json();
  // console.log(datas);
  renderContent = '';

  datas.forEach((data) => {
    // console.log(data);
    let renderContent = document.querySelector('.render-zone');
    showArr.push(`
    <div class="image-area"><img src="${data.image}" alt="圖"></div>
            <div class="content-area">
              <h1>${data.exhibitionName}</h1>
              <h4>表演者 : ${data.performer}</h4>
              <p>${data.performerDescription} </p>
              <p>${data.date.begin
                .replace(',', '年')
                .replace(',', '月')
                .concat('日')} </p> 
              <p>入場時間 : ${time(data.enterTime.from)} 到 ${time(
      data.enterTime.to
    )}</p>
              <p>${data.description}</p>
            </div>
    `);
    renderContent.innerHTML += `<figure class="information-card"><div class="container"><div class="image-area"><img src="${
      data.image
    }" alt="圖"></div><div class="content-area"><h1>${
      data.exhibitionName
    }</h1><!-- <h4>表演者 : ${data.performer}</h4>--><p>日期 : ${data.date.begin
      .replace(',', '年')
      .replace(',', '月')
      .concat('日')}</p>
      <p>入場時間 : ${time(data.enterTime.from)} 到 ${time(
      data.enterTime.to
    )}</p>
    <p>票價 : ${data.ticketPrice}</p>
    <button data-id="${
      data.id
    }"class="alink">詳細資訊</button></div></div></figure>`;
  });
  const alink = document.querySelectorAll('.alink');
  alink.forEach((link) => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        blockAll.classList.add('show');
        blockAll.innerHTML = `${showArr[link.dataset.id]}`;
      });
    });
  });
  // console.log(showArr);
};

dataObj();
