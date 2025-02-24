document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.querySelector('.read-more-button');
    const readMoreContent = document.querySelector('.read-more-content');

    readMoreButton.addEventListener('click', function() {
        readMoreContent.style.display = readMoreContent.style.display === 'block' ? 'none' : 'block';
        readMoreButton.classList.toggle('active');
    });
});

const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const slider = document.querySelector('.card-slider');
        let offset = 0;

        nextBtn.addEventListener('click', () => {
            if (offset > -600) { 
                offset -= 320;
                slider.style.transform = `translateX(${offset}px)`;
            }
        });

        prevBtn.addEventListener('click', () => {
            if (offset < 0) {
                offset += 320;
                slider.style.transform = `translateX(${offset}px)`;
            }
        });