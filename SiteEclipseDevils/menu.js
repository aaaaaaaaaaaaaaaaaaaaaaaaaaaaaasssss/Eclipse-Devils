const menuPanel = document.querySelector('.menu-panel');
const menuBackground = document.querySelector('.menu-background');
const openBtn = document.querySelector('.menu-btn');

function openMenu() {
    menuPanel.classList.add('is-open');
    menuBackground.classList.add('is-open');
    document.body.classList.add('no-scroll');
}

function closeMenu() {
    menuPanel.classList.remove('is-open');
    menuBackground.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
}

openBtn.addEventListener('click', openMenu);
menuBackground.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeMenu();
});

const hero = document.querySelector("#initial-section");
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    const heroBottom = hero.offsetTop + hero.offsetHeight;

    if (window.scrollY > heroBottom - 100) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});