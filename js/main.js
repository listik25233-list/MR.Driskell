document.addEventListener('DOMContentLoaded', () => {
    const dotButtons = document.querySelectorAll('.main-banner-dot-button');
    const prevButton = document.querySelector('.main-banner-prev-button');
    const nextButton = document.querySelector('.main-banner-next-button');
    let currentSlide = 0;

    if (dotButtons.length > 0 && prevButton && nextButton) {
        function updateActiveDot(index) {
            dotButtons.forEach((dot, i) => {
                const img = dot.querySelector('img');
                if (i === index) {
                    img.src = './img/dot-active.svg';
                } else {
                    img.src = './img/dot.svg';
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % dotButtons.length;
            updateActiveDot(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + dotButtons.length) % dotButtons.length;
            updateActiveDot(currentSlide);
        }

        dotButtons.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateActiveDot(currentSlide);
            });
        });

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        updateActiveDot(currentSlide);
    }

    const productCards = document.querySelectorAll('.catalog-item');

    productCards.forEach(card => {
        const imageWrapper = card.querySelector('.catalog-item__image-wrapper');
        if (!imageWrapper) return;

        const imageData = imageWrapper.dataset.images;
        if (!imageData) return;

        const images = JSON.parse(imageData);
        const mainImage = card.querySelector('.catalog-item__image');
        const dots = card.querySelectorAll('.catalog-item__slider-dots img');

        if (images.length === 0 || !mainImage || dots.length === 0) return;

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (images[index]) {
                    mainImage.src = images[index];

                    dots.forEach(d => d.src = './img/square.svg');
                    dot.src = './img/active-square.svg';
                }
            });
        });
    });

    const OpnModal = document.getElementById('openModal');
    const Clsmodal = document.getElementById('modalClose');
    const modal = document.getElementById('popup');

    if (OpnModal && Clsmodal && modal) {
        OpnModal.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        Clsmodal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});
