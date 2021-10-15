const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

/* INSTRUCTIONS
Creare un carosello come nella foto allegata. 
Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e testo.
Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre.

BONUS:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
*/

//Strumenti: addEventListener() | array[] 


//inserire immagini e testo
const heroDiv = document.querySelector('.hero');
const carouselDiv = document.querySelector('.carousel');

let heroContent = '';
let Thumbnails = '';

for (let i = 0; i < items.length; i++) {
    heroContent += `
    <img src="./assets/${items[i]}" alt="">
    <div class="hero_txt">
        <h1>${title[i]}</h1>
        <p>${text[i]}</p>
    </div>`;
    Thumbnails += `
    <div class="thumb_img">
        <img src="./assets/${items[i]}" alt="">
    </div>`;
}

heroDiv.insertAdjacentHTML('afterbegin', heroContent);
carouselDiv.insertAdjacentHTML('afterbegin', Thumbnails);

//seleziono i pulsanti dalla DOM
const scrollBtnUp = document.getElementById('btn_up');
const scrollBtnDown = document.getElementById('btn_down');
// console.log(scrollBtnUp,scrollBtnDown);

//Per ogni click, seleziono un elemento dagli array
scrollBtnUp.addEventListener('click', function(){
    //cambia hero_img
    const x = document.getElementsByClassName('hero_img')[0];
    console.log(x);
})

