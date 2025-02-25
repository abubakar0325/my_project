let datas = JSON.parse(localStorage.getItem('photos'));  

if (!datas) {  
  datas = [{  
      image: '/images/FEB4CD45-2E42-4328-B224-D70A49CF1CCC-3762800813.jpeg',  
      message: 'Barkanmu da wannan Lokachi'  
  }, {  
      image: '/images/ABBA-KABIR-YUSUF-CCB-1000x600-2088897328.jpeg',  
      message: 'Barkanmu da wannan Lokachi'  
  }, {  
      image: '/images/Kwankwaso_HD-1528762212.jpeg',  
      message: 'Barkanmu da wannan Lokachi'  
  }, {  
      image: '/images/Kwankwaso-4185211543.jpg',  
      message: 'Barkanmu da wannan Lokachi'  
  }, {  
      image: '/images/ganduje-apc-1744930061.jpg',  
      message: 'Barkanmu da wannan Lokachi'  
  }, {  
      image: "/images/ganduje...-3961510402.jpg",  
      message: 'Barkanmu da wannan Lokachi'  
  }];  
}  

// Function to save data to localStorage  
function saveToStorage() {  
    localStorage.setItem('photos', JSON.stringify(datas));  
}  

// Call to save data in localStorage  
saveToStorage();  

var slideIndex = 0;  
showSlides();  

function showSlides() {  
    var i;  
    var slides = document.getElementsByClassName("mySlides");  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slideIndex++;  
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds  
}  

let htmlData = '';  
let projectHtml = '';  
datas.forEach((element) => {  
    htmlData += `<div>  
          <img src="${element.image}" width="100%">  
          <p>${element.message}</p>  
      </div>`;  
    
    projectHtml += `  
      <div>  
          <img src="${element.image}" width="100%">  
      </div>`;  
});  

console.log(projectHtml);  
document.querySelector('.js-gellary').innerHTML = htmlData;
