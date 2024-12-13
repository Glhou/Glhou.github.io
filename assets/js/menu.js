// Récupérer les éléments du DOM
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

// Ajouter un événement de clic pour basculer l'état du menu
menuButton.addEventListener('click', () => {
    // Bascule la visibilité du menu mobile
    mobileMenu.classList.toggle('hidden');

    // Bascule les icônes (menu ouvert / fermé)
    menuIconOpen.classList.toggle('hidden');
    menuIconClose.classList.toggle('hidden');
});
