//Menu redirection

const aboutMenu = document.getElementById("about-menu");
const servicesMenu = document.getElementById("services-menu");
const albumsMenu = document.getElementById("albums-menu");
const contactMenu = document.getElementById("contact-menu");

const aboutSection = document.getElementById("about-section");
const servicesSection = document.getElementById("services-section");
const albumsSection = document.getElementById("albums-section");
const contactSection = document.getElementById("contact-section");

aboutMenu.addEventListener('click', function() {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

servicesMenu.addEventListener('click', function() {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
});

albumsMenu.addEventListener('click', function() {
    albumsSection.scrollIntoView({ behavior: 'smooth' });
});

contactMenu.addEventListener('click', function() {
    contactSection.scrollIntoView({ behavior: 'smooth' });
});


//Verifier toutes les images sont chargée

const images = document.images; // Récupérer toutes les images
let loadedImagesCount = 0;

const checkImagesLoaded = () => {
    loadedImagesCount++;
    if (loadedImagesCount === images.length) {
        document.body.style.display = 'block'; // Afficher le corps
    }
};

for (const img of images) {
    if (img.complete) {
        checkImagesLoaded();
    } else {
        img.addEventListener('load', checkImagesLoaded);
        img.addEventListener('error', checkImagesLoaded); // Gérer les erreurs de chargement
    }
}



const apiUrl = import.meta.env.VITE_API_URL;

console.log(apiUrl);

