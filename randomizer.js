const imageArray = [
	"images/G4.jpeg",
    	"images/IMG_2558.jpeg",
	"images/IMG_1543.jpg",
	"images/IMG_1546.jpg",
	"images/73326c46-a028-4503-8614-b696f4d1195a.jpeg",
	"images/FullSizeRender (1).jpeg",
	"images/FullSizeRender (2).jpeg",
	"images/FullSizeRender (3).jpeg",
	"images/FullSizeRender 2.jpeg",
	"images/FullSizeRender 3.jpeg",
	"images/FullSizeRender 4.jpeg",
	"images/FullSizeRender 5.jpeg",
	"images/FullSizeRender 6.jpeg",
	"images/FullSizeRender.jpeg",
	"images/G4.jpeg IMG_0302.jpeg",
	"images/IMG_0831.jpeg",
	"images/IMG_1543.jpg",
	"images/IMG_1546.jpeg",
	"images/IMG_1639 IMG_1721.jpg",
	"images/IMG_1764 IMG_2558.jpeg",
	"images/IMG_2922.jpg",
	"images/IMG_3509.jpeg",
	"images/IMG_4789.jpeg",
	"images/IMG_5152.jpg",
	"images/IMG_5411.jpeg",
	"images/IMG_5956.jpg",
	"images/IMG_6009.jpg",
	"images/IMG_7639.jpg",
	"images/IMG_8059.jpg",
	"images/IMG_9826.jpeg",
	"images/SNovak07172338.jpg",
	"images/SNovak07172342.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
