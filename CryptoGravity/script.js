document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. Mobile Menu Drawer
    // ==========================================================================
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-active');
            menuToggle.classList.toggle('active');
            
            // Lock body scroll
            if (nav.classList.contains('mobile-active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }

            // Toggle hamburger animation
            const bars = menuToggle.querySelectorAll('.bar');
            if (menuToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu drawer when clicking on any navigation link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('mobile-active')) {
                    nav.classList.remove('mobile-active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                    const bars = menuToggle.querySelectorAll('.bar');
                    bars[0].style.transform = 'none';
                    bars[1].style.opacity = '1';
                    bars[2].style.transform = 'none';
                }
            });
        });
    }

    // ==========================================================================
    // 2. Testimonial Carousel Slider
    // ==========================================================================
    const track = document.querySelector('.slider-track');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    const prevBtn = document.querySelector('.arrow-prev');
    const nextBtn = document.querySelector('.arrow-next');

    let currentSlideIndex = 0;

    const updateSlider = (index) => {
        // Handle boundary conditions safely
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        currentSlideIndex = index;
        
        // Translate the slider track
        const amountToMove = -(100 / slides.length) * currentSlideIndex;
        track.style.transform = `translateX(${amountToMove}%)`;
        
        // Update active class on slides
        slides.forEach((slide, idx) => {
            if (idx === currentSlideIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update active class on dots
        dots.forEach((dot, idx) => {
            if (idx === currentSlideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    if (track && slides.length > 0) {
        // Click handlers for next/prev arrows
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                updateSlider(currentSlideIndex + 1);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                updateSlider(currentSlideIndex - 1);
            });
        }

        // Click handlers for dots
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                updateSlider(idx);
            });
        });

        // Auto slide every 7 seconds
        let autoSlideInterval = setInterval(() => {
            updateSlider(currentSlideIndex + 1);
        }, 7000);

        // Pause auto-sliding when mouse hovers over testimonial box
        const testimonialBox = document.querySelector('.testimonial-box');
        if (testimonialBox) {
            testimonialBox.addEventListener('mouseenter', () => {
                clearInterval(autoSlideInterval);
            });
            
            testimonialBox.addEventListener('mouseleave', () => {
                autoSlideInterval = setInterval(() => {
                    updateSlider(currentSlideIndex + 1);
                }, 7000);
            });
        }
    }

    // ==========================================================================
    // 3. Contact Dialog Modal & Form Logic
    // ==========================================================================
    const modal = document.getElementById('contact-modal');
    const navContactBtn = document.getElementById('nav-contact-btn');
    const heroCtaBtn = document.getElementById('hero-cta-btn');
    const contactBtn = document.getElementById('contact-btn');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const contactForm = document.getElementById('contact-form-el');
    const successMsg = document.getElementById('success-msg');

    const openModal = () => {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock background scrolling
        }
    };

    const closeModal = () => {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Unlock scrolling
            // Reset success message state
            if (contactForm && successMsg) {
                contactForm.style.display = 'flex';
                successMsg.style.display = 'none';
                contactForm.reset();
            }
        }
    };

    // Bind triggers to open modal
    if (navContactBtn) navContactBtn.addEventListener('click', openModal);
    if (heroCtaBtn) heroCtaBtn.addEventListener('click', openModal);
    if (contactBtn) contactBtn.addEventListener('click', openModal);

    // Bind triggers to close modal
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Scroll to contact section for service link anchor tags
    const scrollLinks = document.querySelectorAll('.scroll-to-contact');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Handle contact form submissions
    if (contactForm && successMsg) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values for verification/mock send
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log('Sending message:', { name, email, message });
            
            // Show success overlay inside modal
            contactForm.style.display = 'none';
            successMsg.style.display = 'flex';
            
            // Close modal after 3.5 seconds automatically
            setTimeout(() => {
                closeModal();
            }, 3500);
        });
    }
});
