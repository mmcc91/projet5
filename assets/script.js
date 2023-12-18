//  nbimg nombre image 
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
// affiche dans la console le nb de slides dans ma boite 
console.log(slides)

// relie Constante/variable et nom html
let nbimg = 0;
const leftbtn = document.querySelector(".arrow_left");
const rightbtn = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const img = document.querySelector(".banner-img");
const txt = document.querySelector("p");


// Creations des points .dot en fonction du nobre de slides image
for (let j = nbimg; j < slides.length; j++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	// bullet change sur la bonne icone en cliquant 
	dot.addEventListener("click", function () {
		nbimg = j
		img.src = slides[nbimg].image;
		txt.innerHTML = slides[nbimg].tagLine;
		DotFull(nbimg);
	})
	dotsContainer.appendChild(dot);
}


// Sélectionnez à nouveau les éléments .dot après les avoir ajoutés
const dotsbtn = dotsContainer.querySelectorAll(".dot");

// Ajoutez la classe dot_selected à la première bullet (index 0)
dotsbtn[0].classList.add("dot_selected");


// Écouteurs de l'événements click  pour les boutons droit et gauche
leftbtn.addEventListener("click", slideLeft);
rightbtn.addEventListener("click", slideRight);


// les fonctions appele pour changer les images
function slideLeft() {
	nbimg--;
	if (nbimg === -1) {
		nbimg = slides.length - 1;
	}
	img.src = slides[nbimg].image;
	txt.innerHTML = slides[nbimg].tagLine;
	DotFull(nbimg);
}
function slideRight(){
	nbimg++;
	if (nbimg === slides.length) {
		nbimg = 0;
	}
	img.src = slides[nbimg].image;
	txt.innerHTML = slides[nbimg].tagLine;
	DotFull(nbimg);
}



// MAJ des voyants bullets a chaque changemnt 
function DotFull(count) {
	dotsbtn.forEach((dot, nbimg) => {
		if (nbimg === count) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}