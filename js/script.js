/* ===================================
   PORTFOLIO INTERACTIVE JAVASCRIPT
   =================================== */

// ===================================
// BACKGROUND ANIMATIONS
// ===================================

function initBackgroundAnimation() {
    const bgAnimation = document.getElementById('bgAnimation');
    if (!bgAnimation) return;

    // Create 50 floating particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        bgAnimation.appendChild(particle);
    }

    // Create geometric shapes
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.className = 'geometric-shape';
        const size = Math.random() * 100 + 50;
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';
        shape.style.left = Math.random() * 100 + '%';
        shape.style.top = Math.random() * 100 + '%';
        shape.style.animationDuration = (Math.random() * 20 + 15) + 's';
        shape.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        bgAnimation.appendChild(shape);
    }

    // Create grid lines
    for (let i = 0; i < 10; i++) {
        const gridH = document.createElement('div');
        gridH.className = 'grid-line horizontal';
        gridH.style.top = (i * 10) + '%';
        bgAnimation.appendChild(gridH);

        const gridV = document.createElement('div');
        gridV.className = 'grid-line vertical';
        gridV.style.left = (i * 10) + '%';
        bgAnimation.appendChild(gridV);
    }
}

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.section-title, .about-content, .timeline-item, .skill-category, .skill-item').forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// MOBILE NAVIGATION
// ===================================

function initMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===================================
// SMOOTH SCROLLING
// ===================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// CONTACT FORM HANDLER
// ===================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Create mailto link
            const mailtoLink = `mailto:sriraksha.connect@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            window.location.href = mailtoLink;

            // Show confirmation
            alert('Opening your email client...');

            // Reset form
            contactForm.reset();
        });
    }
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================

function initScrollToTop() {
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// PAGE LOADER
// ===================================

function initPageLoader() {
    window.addEventListener('load', () => {
        const pageLoader = document.querySelector('.page-loader');
        if (pageLoader) {
            setTimeout(() => {
                pageLoader.style.opacity = '0';
                setTimeout(() => {
                    pageLoader.style.display = 'none';
                }, 500);
            }, 1000);
        }
    });
}

// ===================================
// PARALLAX EFFECT
// ===================================

function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content');

        parallaxElements.forEach(el => {
            const speed = 0.3;
            if (el) {
                el.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    });
}

// ===================================
// TYPING ANIMATION
// ===================================

function initTypingAnimation() {
    const heroSubtitle = document.querySelector('.hero-text h2');

    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        let i = 0;

        setTimeout(() => {
            const typeWriter = setInterval(() => {
                if (i < text.length) {
                    heroSubtitle.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeWriter);
                }
            }, 100);
        }, 1500);
    }
}

// ===================================
// CUSTOM CURSOR (DISABLED)
// ===================================

function initCustomCursor() {
    // Custom cursor feature disabled by user preference
    // Normal cursor will be used instead
    return;
}

// ===================================
// SCROLL PROGRESS BAR
// ===================================

function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================

function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// IMAGE LAZY LOADING
// ===================================

function initLazyLoading() {
    const images = document.querySelectorAll('img');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// PROJECT FILTERS
// ===================================

function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    card.classList.remove('hidden');
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filterValue) {
                        card.style.display = 'block';
                        card.classList.remove('hidden');
                    } else {
                        card.style.display = 'none';
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
}

// ===================================
// ACCESSIBILITY - REDUCED MOTION
// ===================================

function initReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        document.body.classList.add('reduce-motion');
    }
}

// ===================================
// EASTER EGG - KONAMI CODE
// ===================================

function initKonamiCode() {
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join('') === konamiSequence.join('')) {
            document.body.style.animation = 'rainbow 2s linear infinite';

            // Show easter egg message
            const message = document.createElement('div');
            message.textContent = '🎉 You found the secret! 🎉';
            message.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #f97316, #ec4899);
                color: white;
                padding: 2rem 3rem;
                border-radius: 20px;
                font-size: 1.5rem;
                font-weight: bold;
                z-index: 10002;
                box-shadow: 0 10px 40px rgba(249, 115, 22, 0.6);
            `;
            document.body.appendChild(message);

            setTimeout(() => {
                document.body.style.animation = '';
                message.remove();
            }, 5000);
        }
    });
}

// ===================================
// HEXAGON GRID ANIMATION
// ===================================

function initHexagonGrid() {
    const hexGrid = document.getElementById('hexGrid');
    if (!hexGrid) return;

    for (let i = 0; i < 12; i++) {
        const hex = document.createElement('div');
        hex.className = 'hex';
        const angle = (i / 12) * Math.PI * 2;
        const radius = 120;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        hex.style.left = `calc(50% + ${x}px)`;
        hex.style.top = `calc(50% + ${y}px)`;
        hex.style.animationDelay = `${i * 0.1}s`;
        hexGrid.appendChild(hex);
    }
}

// ===================================
// INITIALIZE ALL FUNCTIONS
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initBackgroundAnimation();
    initScrollAnimations();
    initMobileMenu();
    initNavbarScroll();
    initSmoothScroll();
    initContactForm();
    initScrollToTop();
    initPageLoader();
    initParallaxEffect();
    initTypingAnimation();
    initCustomCursor();
    initScrollProgress();
    initActiveNavigation();
    initLazyLoading();
    initProjectFilters();
    initReducedMotion();
    initKonamiCode();
    initHexagonGrid();
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for frequent events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c👋 Welcome to Sriraksha\'s Portfolio!', 'color: #f97316; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Built with passion and creativity', 'color: #ec4899; font-size: 14px;');
console.log('%c💡 Try the Konami Code for a surprise!', 'color: #fbbf24; font-size: 12px;');