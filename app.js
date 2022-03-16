const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const id = link.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};