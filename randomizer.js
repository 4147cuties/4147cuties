const imageArray = [
	"images/G4.jpeg",
    	"images/IMG_2558.jpeg",
	"images/IMG_1543.jpg",
	"images/IMG_1546.jpg",
	"images/73326c46a.jpeg",
	"images/FullSizeRender7.jpeg",
	"images/FullSizeRender8.jpeg",
	"images/FullSizeRender9.jpeg",
	"images/FullSizeRender2.jpeg",
	"images/FullSizeRender3.jpeg",
	"images/FullSizeRender4.jpeg",
	"images/FullSizeRender5.jpeg",
	"images/FullSizeRender6.jpeg",
	"images/FullSizeRender.jpeg",
	"images/IMG_0302.jpg",
	"images/IMG_0831.jpeg",
	"images/IMG_1639.jpg",
	"images/IMG_1721.jpg",
	"images/IMG_1764.jpg",
	"images/IMG_2558.jpeg",
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
	"images/SNovak07172342.jpg",
	"images/apic1.JPG",
	"images/apic2.JPG",
	"images/apic3.JPG",
	"images/apic4.JPG",
	"images/apic5.JPG",
	"images/apic6.JPG",
	"images/apic7.JPG",
	"images/apic8.jpg",
	"images/apic9.JPG",
	"images/apic10.jpeg",
	"images/apic11.jpg",
	"images/apic12.JPG",
	"images/apic13.JPG",
	"images/apic14.jpg",
	"images/apic15.jpg",
	"images/apic16.jpg",
	"images/apic17.jpg",
	"images/apic18.jpg",
	"images/apic19.jpg",
	"images/apic20.JPG",
	"images/apic21.jpg",
	"images/apic22.jpg",
	"images/apic23.jpg",
	"images/apic24.JPG",
	"images/apic25.JPG",
	"images/apic26.JPG",
	"images/apic27.JPG",
	"images/apic28.JPG",
	"images/apic29.JPG",
	"images/pic30.JPG",
	"images/apic31.JPG",
	"images/apic32.jpg",
	"images/apic33.jpg",
	"images/apic34.JPG",
	"images/apic35.JPG",
	"images/apic36.JPG",
	"images/apic37.JPG",
	"images/apic38.JPG",
	"images/apic39.JPG",
	"images/apic40.JPG",
	"images/apic41.JPG",
	"images/apic42.JPG",
	"images/apic43.JPG",
	"images/apic44.JPG",
	"images/apic45.jpg",
	"images/apic46.jpeg",
	"images/apic47.jpeg",
	"images/apic48.jpg",
	"images/apic49.jpg",
	"images/apic50.jpg",
	"images/apic51.jpg",
	"images/apic52.jpg",
	"images/apic53.jpg",
	"images/apic54.jpg",
	"images/apic55.jpg",
	"images/apic56.jpg",
	"images/apic57.jpg",
	"images/apic58.jpeg",
	"images/apic59.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
