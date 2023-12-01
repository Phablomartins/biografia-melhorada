
const hanburger = document.querySelector(".hanburger");

const navMenu = document.querySelector(".nav-menu");


hanburger.addEventListener("click", () => {
   
    hanburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})
window.sr = ScrollReveal({ reset: true });
 
sr.reveal('.conteudo',
    { duration: 850 });

    sr.reveal('.imagem', 
        {duration: 850 });

        sr.reveal('.fundoGalery', 
            {duration: 850 });



