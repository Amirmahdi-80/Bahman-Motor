const ToTop = document.querySelector('.to-top');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
        ToTop.classList.add('active');
    }
    else {
        ToTop.classList.remove('active');
    }
})