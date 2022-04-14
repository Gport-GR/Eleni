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


    const hamburger = document.getElementById('hamburger');
    const navUL = document.getElementById('list');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
    });
