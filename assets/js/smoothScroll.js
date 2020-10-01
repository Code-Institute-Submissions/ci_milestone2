//Smooth scroll function https://www.codegrepper.com/code-examples/javascript/scrolling+link+java+script

window.scrollTo({ top: 900, behavior: 'smooth' })

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});