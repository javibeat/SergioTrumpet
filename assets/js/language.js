/* [language.js] - Reemplaza todo el contenido con este */
document.addEventListener("DOMContentLoaded", function () {
    const langElements = document.querySelectorAll(".lang");
    const langData = {
        "en": {
            "home": "HOME",
            "gigs": "GIGS",
            "music": "MUSIC",
            "bio": "BIO",
            "contact": "CONTACT"
        },
        "es": {
            "home": "INICIO",
            "gigs": "EVENTOS",
            "music": "MÚSICA",
            "bio": "BIOGRAFÍA",
            "contact": "CONTACTO"
        }
    };

    function setLanguage(lang) {
        if (!langData[lang]) return;

        // Guardar en localStorage para recordar la elección
        localStorage.setItem("selectedLanguage", lang);

        // Cambiar textos en la página
        document.querySelector('a[href="index.html"]').textContent = langData[lang]["home"];
        document.querySelector('a[href="gigs.html"]').textContent = langData[lang]["gigs"];
        document.querySelector('a[href="music.html"]').textContent = langData[lang]["music"];
        document.querySelector('a[href="bio.html"]').textContent = langData[lang]["bio"];
        document.querySelector('a[href="contact.html"]').textContent = langData[lang]["contact"];

        // Marcar la bandera activa
        langElements.forEach(el => el.classList.remove("active"));
        document.getElementById(lang).classList.add("active");
    }

    // Evento click en las banderas
    langElements.forEach(el => {
        el.addEventListener("click", function () {
            const selectedLang = this.id;
            setLanguage(selectedLang);
        });
    });

    // Cargar idioma guardado o inglés por defecto
    const storedLang = localStorage.getItem("selectedLanguage") || "en";
    setLanguage(storedLang);
});