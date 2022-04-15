function addline(id)
{
    switch (id) {
        case "but1":
        {
                window.location.href = "input.html";
            break;
        }
        case "but2":
            {
                window.location.href = "podcasty.html"
                break;
            }
        case "but5":
            {
                window.location.href = "rekrut.html"
                break;
            }
        case "but6":
            {
                window.location.href = "uczelnia.html"
                break;
            }
        case "but3":
            {
                window.location.href = "my.html"
                break;
            }
        case "but4":
            {
                window.location.href = "tydzien.html"
                break;
            }
    }
}

function que() {
    let m = document.getElementById("que");
    m.style.display = "block";
}

/* »ндекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* ‘ункци€ увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* ‘ункци€ уменьш€ет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* ”станавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* ќсновна€ функци€ слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function addblock() {
    let m = document.getElementById("add");
     m.style.display = "flex";
    let x = document.getElementById("add2");
    x.style.display = "flex";
    let y = document.getElementById("but");
    y.style.display = "none";
}

function hide() {
    let m = document.getElementById("que");
    m.style.display = "none";
}
