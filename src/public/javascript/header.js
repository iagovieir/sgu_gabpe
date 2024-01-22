document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const img = document.getElementById('image')
    let scrolled = false;

    console.log(header)

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) { // Ajuste esse valor conforme necessário
            if (!scrolled) {
                header.style.padding = '0px';
                img.style.height = '80%';
                scrolled = true;
            }
        } else {
            if (scrolled) {
                header.style.padding = '10px';
                img.style.height = '100%';
                scrolled = false;
            }
        }
    });
});