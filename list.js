let data = JSON.parse(localStorage.getItem('photos'));
let listHtml = '';
data.forEach((element) => {
  listHtml += `
  <div class="second-container">
      <div>
        <img src="${element.image}" width="100%">
      </div>
      <div>
        <p>Description</p>
        <p> provides for testi only to demonstrate but also to improve their resourcefulness as teachers to be. The goals of teaching practice are to:</p>
      </div>
      <div>
        <span>Name: Floyer</span>
        <span>Location: Gwale</span>
        <span>Type: Civil Insfracture</span>
        <span>Status: On-going</span>
        <span>Budget: 1.3 Billoin</span>
      </div>
      <div>
        <button>View Project ></button>
      </div>
    </div>
  `
  console.log(element.image)
})
document.querySelector('.js-main-container').innerHTML = listHtml;