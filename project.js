let datas = JSON.parse(localStorage.getItem('photos'));
let projectHtml = '';
datas.forEach((element) => {
  projectHtml += `
  <div>
    <img src="${element.image}" width="100%">
  </div>
  `
})
document.querySelector('.js-project-gallery').innerHTML = projectHtml;