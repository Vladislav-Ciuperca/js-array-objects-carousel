const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// richiamo il container delle slide, thumbnails e della descrizione
const container = document.getElementById("container")
const thumbnails = document.getElementById("thumbnails")
const description = document.getElementById("desc")

// richiamo i bottodi "dx" e "sx"
const sx = document.getElementById("sx")
const dx = document.getElementById("dx")

// stampo le immagin,le thumb e le descrizioni in pagina
for (const immagine of images) {
    container.innerHTML = container.innerHTML + ` <img class="slide" src="${immagine.image}">`
    thumbnails.innerHTML = thumbnails.innerHTML + ` <img class="thumbnail" src="${immagine.image}">`
    description.innerHTML = description.innerHTML + ` <p class="title">${immagine.title}</p> `
    description.innerHTML = description.innerHTML + ` <p class="text">${immagine.text}</p> `
}


// mi vado a pescare tutte le immagini stampoate in pagina
const slides = document.querySelectorAll(".slide")
const thumbs = document.querySelectorAll(".thumbnail")
const titles = document.querySelectorAll(".title")
const texts = document.querySelectorAll(".text")

// aggioungo la classe active alla prima immagine e descrizione in lista
slides[0].classList.add("active")
thumbs[0].classList.add("active")
titles[0].classList.add("active")
texts[0].classList.add("active")


//quando clicco su DX
dx.addEventListener("click", () => {
    for (let i = 0; i < slides.length; i++) {
        // conto dentro quest elementi
        const slide = slides[i];
        const thumb = thumbs[i];
        const title = titles[i];
        const text = texts[i];

        if (slide.classList.contains("active")) {
            slide.classList.remove("active");
            thumb.classList.remove("active");
            title.classList.remove("active");
            text.classList.remove("active");
            iaa = i;
            console.log("ho rimosso", i)

        }
    }
    if (iaa + 1 == slides.length) {
        slides[0].classList.add("active")
        thumbs[0].classList.add("active")
        titles[0].classList.add("active")
        texts[0].classList.add("active")
    }
    else {
        slides[iaa + 1].classList.add("active");
        thumbs[iaa + 1].classList.add("active");
        titles[iaa + 1].classList.add("active");
        texts[iaa + 1].classList.add("active");
    }


})

//quandoi clicco su SX
sx.addEventListener("click", () => {
    for (let i = 0; i < slides.length; i++) {
        // conto dentro quest elementi
        const slide = slides[i];
        const thumb = thumbs[i];
        const title = titles[i];
        const text = texts[i];


        if (slide.classList.contains("active")) {
            slide.classList.remove("active");
            thumb.classList.remove("active");
            title.classList.remove("active");
            text.classList.remove("active");
            iaa = i;
            console.log("ho rimosso", i)
        }
    }

    if (iaa == 0) {
        slides[slides.length - 1].classList.add("active")
        thumbs[slides.length - 1].classList.add("active")
        titles[slides.length - 1].classList.add("active")
        texts[slides.length - 1].classList.add("active")
    }
    else {
        slides[iaa - 1].classList.add("active");
        thumbs[iaa - 1].classList.add("active");
        titles[iaa - 1].classList.add("active");
        texts[iaa - 1].classList.add("active");
    }
})