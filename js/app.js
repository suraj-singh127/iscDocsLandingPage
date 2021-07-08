function myFunction(x) {
    x.classList.toggle("change");
    // let navbarUl = document.querySelector('.navbar-nav');
    let navbar = document.querySelector('.navbar');
    let header = document.getElementById('header');
    header.classList.toggle("sticky");
    navbar.classList.toggle("show");
    console.log(navbar.classList);
}

window.addEventListener("scroll",function(e) {
    let header = document.getElementById('header');
    header.classList.toggle("sticky",window.scrollY>0);
});