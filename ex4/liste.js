document.addEventListener('DOMContentLoaded', (event) => {
    const listeItems = document.querySelectorAll('#Liste li');

    listeItems.forEach((item) => {
        item.addEventListener('click', () => {
            const couleurAleatoire = '#' + Math.floor(Math.random()*16898225).toString(16);
            item.style.color = couleurAleatoire;
        });
    });
});
