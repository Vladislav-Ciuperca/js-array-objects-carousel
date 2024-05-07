const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
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

// richiamo il container delle slide
const container = document.getElementById("container")
// richiamo i bottodi "dx" e "sx"
const sx = document.getElementById("sx")
const dx = document.getElementById("dx")

// stampo le immagin in pagina insieme alla classe "active"
for (const immagine of images) {
    // console.log(immagine.title)
    container.innerHTML = container.innerHTML + `<img class="slide" src="${immagine.image}">`
}


// mi vado a pescare tutte le immagini stampoate in pagina
const slides = document.querySelectorAll(".slide")

slides[1].classList.add("active")

// console.log(slides)

dx.addEventListener("click", () => {
    // placeholder
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        console.log(slide, i);

        if (slide.classList.contains("active")) {
            slide.classList.remove("active");
            iaa = i;
            console.log("ho rimosso", i)

        }
    }
    if (iaa + 1 == slides.length) {
        slides[0].classList.add("active")
    }
    else {
        slides[iaa + 1].classList.add("active");
    }
})


sx.addEventListener("click", () => {
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        console.log(slide, i);
        if (slide.classList.contains("active")) {
            slide.classList.remove("active");
            iaa = i;
            console.log("ho rimosso", i)
        }
    }

    if (iaa == 0) {
        slides[slides.length - 1].classList.add("active")
    }
    else {
        slides[iaa - 1].classList.add("active");
    }
})