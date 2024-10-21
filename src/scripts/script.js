const apiUrl = import.meta.env.VITE_API_URL;

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
        document.body.style.display = 'block';
    }
};

for (const img of images) {
    if (img.complete) {
        checkImagesLoaded();
    } else {
        img.addEventListener('load', checkImagesLoaded);
        img.addEventListener('error', checkImagesLoaded);
    }
}

//Albums

const tennisDeTableAlbum = document.getElementById("tennis-de-table");
const handballAlbum = document.getElementById("handball");
const basketballAlbum = document.getElementById("basketball");

tennisDeTableAlbum.addEventListener('click', function() {
    window.location.href = apiUrl+"/albums?id=Tennis de table";
});

handballAlbum.addEventListener('click', function() {
    window.location.href = apiUrl+"/albums?id=Handball";
});

basketballAlbum.addEventListener('click', function() {
    window.location.href = apiUrl+"/albums?id=basketball";
});