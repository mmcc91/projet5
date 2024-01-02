//  imageNumber nombre image 
const slides = [

	{
		image: "./assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span> en boutique et en ligne</span>",
	},
	{
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span> pour vos bureaux et events</span>",
	},
	{
		image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span> de CMJN aux pantones</span>",
	},
	{
		image: "./assets/images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

// relie Constante/variable et nom html
let imageNumber = 0;
const leftButton = document.querySelector(".arrow_left");
const rightButton = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const image = document.querySelector(".banner-image");
const texte = document.querySelector("p");

// Creations de ma fonction dynamicSlide pour rendre les Slide dynamic
function dynamicSlide() {

	// Écouteurs de l'événements click  pour les fleches droites et gauches
	leftButton.addEventListener("click", slideLeft);
	rightButton.addEventListener("click", slideRight);

	//pour les bullets
	for (let j = imageNumber; j < slides.length; j++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dotFull(imageNumber);

		// bullet change sur la bonne icone en cliquant 
		dot.addEventListener("click", function () {
			imageNumber = j
			image.src = slides[imageNumber].image;
			texte.innerHTML = slides[imageNumber].tagLine;
			console.log("dot")
			dotFull(imageNumber);
		})
		dotsContainer.appendChild(dot);
	}
}

// les fonctions appele pour changer les images
function slideLeft() {
	imageNumber--;
	if (imageNumber === -1) {
		imageNumber = slides.length - 1;
	}
	image.src = slides[imageNumber].image;
	texte.innerHTML = slides[imageNumber].tagLine;
	dotFull(imageNumber);
}

function slideRight() {
	imageNumber++;
	if (imageNumber === slides.length) {
		imageNumber = 0;
	}
	image.src = slides[imageNumber].image;
	texte.innerHTML = slides[imageNumber].tagLine;
	dotFull(imageNumber);
}

// MAJ des voyants bullets a chaque changemnt 
function dotFull(count) {

	const dotsbtn = dotsContainer.querySelectorAll(".dot");

	dotsbtn.forEach((dot, imageNumber) => {
		if (imageNumber === count) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

dynamicSlide();