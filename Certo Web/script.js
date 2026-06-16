// JavaScript for Certo Software page clone
document.addEventListener('DOMContentLoaded', () => {
    // Add simple interaction to testimonial slider
    // Note: Since this is a static layout per screenshot, we just add a smooth scroll or simple drag if needed.
    const slider = document.querySelector('.testimonials-slider');
    
    if (slider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });
        
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });
        
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }

    // Add button click effects (ripple or smooth scroll if hrefs existed)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#') {
                e.preventDefault();
                console.log('Button clicked: ' + this.textContent.trim());
            }
        });
    });
});
