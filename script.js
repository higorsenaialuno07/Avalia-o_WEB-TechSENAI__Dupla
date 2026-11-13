
/* =========================================
   CARROSSEL DE BANNERS
========================================= */

const bannerTrack = document.getElementById("bannerTrack");
const bannerSlides = document.querySelectorAll(".banner-slide");
const bannerPrev = document.getElementById("bannerPrev");
const bannerNext = document.getElementById("bannerNext");
const bannerIndicators = document.querySelectorAll("#bannerIndicators button");

let currentBanner = 0;
let bannerInterval;

function showBanner(index) {
    currentBanner = (index + bannerSlides.length) % bannerSlides.length;

    bannerTrack.style.transform =
        `translateX(-${currentBanner * 100}%)`;

    bannerIndicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === currentBanner);
    });
}

function nextBanner() {
    showBanner(currentBanner + 1);
}

function prevBanner() {
    showBanner(currentBanner - 1);
}

function startBannerAutoplay() {
    clearInterval(bannerInterval);

    bannerInterval = setInterval(() => {
        nextBanner();
    }, 5000);
}

bannerNext.addEventListener("click", () => {
    nextBanner();
    startBannerAutoplay();
});

bannerPrev.addEventListener("click", () => {
    prevBanner();
    startBannerAutoplay();
});

bannerIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        showBanner(index);
        startBannerAutoplay();
    });
});

if (bannerSlides.length > 0) {
    showBanner(0);
    startBannerAutoplay();
}
