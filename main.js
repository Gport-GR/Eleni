 window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})


const hamburger = document.getElementById('menu-btn');
    const navUL = document.getElementById('list');
    const menu = document.getElementById('myHeader');
    const photo = document.getElementById('mainphoto');
    const head = document.getElementById('head');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
        menu.classList.toggle('show');
        photo.classList.toggle('show');
        head.classList.toggle('show');
    });




/*var scrollAmount = document.getElementsByClassName('.menu').height;
var element = document.getElementsByClassName('serv-button');

element.addEventListener("click", scrollPage);

function scrollPage() {
    var currentPositionOfPage = window.scrollY;
    window.scrollTo(0, currentPositionOfPage + scrollAmount);
}




let servButton = document.querySelector('.serv-button')
servButton.addEventListener('click', () => {
    function scrollWin();
})

function scrollWin() {
  window.scrollBy(0, -1000);
}

*/

