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


//inserisco immagini e testo
const heroDiv = document.querySelector('.hero');
const carouselDiv = document.querySelector('.carousel');

let heroContent = '';
let Thumbnails = '';

for (let i = 0; i < items.length; i++) {
    //accumulo tutti gli elementi degli array all'interno delle variabili
    heroContent += `
        <div class="hero_content">
            <img src="./assets/${items[i]}" alt="">
            <div class="hero_txt">
                <h1>${title[i]}</h1>
                <p>${text[i]}</p>
            </div>
        </div>`;
    Thumbnails += `
        <div class="thumb_img">
            <img src="./assets/${items[i]}" alt="">
        </div>`;
}
//stampo quello che si è generato nel for loop
heroDiv.insertAdjacentHTML('afterbegin', heroContent);
carouselDiv.insertAdjacentHTML('afterbegin', Thumbnails);

//assegno la classe 'active' agli elementi selezionati
let activeElement = 0;
document.getElementsByClassName('hero_content')[activeElement].classList.add('active');
document.getElementsByClassName('thumb_img')[activeElement].classList.add('active');

//seleziono i pulsanti dalla DOM
const scrollBtnUp = document.getElementById('btn_up');
const scrollBtnDown = document.getElementById('btn_down');

//Per ogni click, incremento il valore di activeElement per passare ai contenuti successivi
// scrollBtnDown.addEventListener('click', function(){
//     activeElement++;
//     document.querySelector('.hero_content').classList.add('active');
//     // document.querySelector('.hero_content.active').classList.remove('active');
    
// })

