const imageArray = [
	"images/G4.jpeg",
    "images/IMG_2558.jpeg",
	"IMG_1543.jpg",
	"IMG_1546.jpg",
	"73326c46-a028-4503-8614-b696f4d1195a.jpeg",
	"FullSizeRender (1).jpeg",
	"FullSizeRender (2).jpeg",
	"FullSizeRender (3).jpeg",
	"FullSizeRender 2.jpeg",
	"FullSizeRender 3.jpeg",
	"FullSizeRender 4.jpeg",
	"FullSizeRender 5.jpeg",
	"FullSizeRender 6.jpeg",
	"FullSizeRender.jpeg",
	"G4.jpeg IMG_0302.jpeg",
	"IMG_0831.jpeg",
	"IMG_1543.jpg",
	"IMG_1546.jpeg",
	"IMG_1639 IMG_1721.jpg",
	"IMG_1764 IMG_2558.jpeg",
	"IMG_2922.jpg",
	"IMG_3509.jpeg",
	"IMG_4789.jpeg",
	"IMG_5152.jpg",
	"IMG_5411.jpeg",
	"IMG_5956.jpg",
	"IMG_6009.jpg",
	"IMG_7639.jpg",
	"IMG_8059.jpg",
	"IMG_9826.jpeg",
	"SNovak07172338.jpg",
	"SNovak07172342.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
