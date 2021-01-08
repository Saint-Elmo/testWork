$(document).ready(() => {

    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        speed:700,
        width: 1200,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            1439: {
                slidesPerView: 2,
                speed:700,
                width: 1800,
            },
            1023: {
                slidesPerView: 2,
                width: 1200,
            },
            767: {
                slidesPerView: 2,
                width: 932,
            },
            413: {
                slidesPerView: 2,
                width: 550,
            },
            374: {
                slidesPerView: 2,
                width: 500,
            }
        }
    });
    let leftBg = document.querySelector('#parallax-left-image');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        leftBg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
    let MainBg = document.querySelector('#parallax-main-image');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        MainBg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
    let RightBg = document.querySelector('#parallax-right-image');
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        RightBg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });

    $('.swiper-container').mousemove(function(e){
        var X = e.pageX;
        var Y = e.pageY;
        var top = Y  - 140 + 'px';
        var left = X  + 15 + 'px';
        $('#focus').css({
            opacity: 1,
            top: top,
            left: left
        });
    });
    $('.swiper-container').mouseout (function(){
        $('#focus').css({
            opacity: 0
        });
    });

    $('#main').mousemove(function (e){
        $('focus').addClass('open')
    });
    $('#main').mouseout(function (e){
        $('focus').removeClass('open')
    });


    $('#burger').click(() => {
        $('#menu').addClass('open');
    });
    document.querySelectorAll('#menu > *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('menu').classList.remove('open');
        }

    });

    $('#menu-cancel').click((e) => {
        if (e.target.id === 'menu-close') {
            $('#reservation-container').removeClass('open');
        }
    })
})

