

const images = ['pict/img_6.png', 'pict/img_7.png', 'pict/img_8.png'];
let currentIndex = 0;
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
     updateImage() ;
}
function nextImage() {
    currentIndex = (currentIndex + 1 + images.length) % images.length;
     updateImage() ;
}

function updateImage() {
    document.getElementById("img").src = images[currentIndex];
}
const body = document.getElementById('body');
const book = document.getElementById("book");
const block = document.getElementById('block');

    book.addEventListener('click', function(event) {
        block.classList.toggle('hidden');
        body.classList.toggle('shadow');
    }
    )



const les_parisiens = document.getElementById("les_parisiens");

setTimeout(() => {
    les_parisiens.classList.toggle('hidden1');
}, 2000);

const num = document.getElementById("num");

num.textContent = 2+' personnes';

const data =document.getElementById("data");

data.textContent = 'Sam, 24 août';