
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
        document.querySelector('html').classList.toggle('hidden');
        window.scrollTo(0, 0);
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.querySelector('html').classList.remove('hidden');
    });
}

let header = document.getElementsByClassName('header')[0];

window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

const navLinks = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('active');
};

navLinks.forEach(n => n.addEventListener('click', linkAction));

const swiperHome = new Swiper('.home_swiper', {
    loop: true,
    speed: 1200,
    parallax: true,
    effect: 'fade',
    autoplay: {
        delay: 3500,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: number => '0' + number,
        formatFractionTotal: number => '0' + number,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



function sendMail(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        emptyerror();
        return;
    }

    if (!validateEmail(email)) {
        invalidEmail();
        return;
    }

    let parms = {
        to_name: email,
        from_name: name,
        message: message,
    };

    emailjs.send("service_a719g6d","template_278dqjc", parms)
        .then(function(response) {
            Success();
        })
        .catch(function(error) {
            swal({
                title: "Email Gönderilemedi",
                text: "Hata: " + error,
                icon: "error",
            });
        });
}

function emptyerror() {
    swal({
        title: "Geçersiz",
        text: "Lütfen alanları doldurun",
        icon: "error",
    });
}

function Success() {
    swal({
        title: "Başarılı",
        text: "Birkaç saat içinde geri dönüş sağlayacağız",
        icon: "success",
    });
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}


