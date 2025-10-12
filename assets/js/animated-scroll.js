// Animated scroll background switcher
document.addEventListener('DOMContentLoaded', function() {
    const animatedBg = document.getElementById('animated-background');
    const skySection = document.getElementById('sky-section');
    const undergroundSection = document.getElementById('underground-section');
    
    let currentTheme = 'sky';
    let isScrolling = false;
    
    // Throttle scroll events for better performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    function updateBackground() {
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const skyHeight = skySection.offsetHeight;
        
        // Calculate the transition point (middle of sky section)
        const transitionPoint = skyHeight * 0.6;
        
        if (scrollPosition < transitionPoint && currentTheme !== 'sky') {
            // Switch to sky theme
            currentTheme = 'sky';
            animatedBg.className = 'animated-bg sky-theme';
            
            // Add gentle transition effects
            document.body.style.background = 'transparent';
            
        } else if (scrollPosition >= transitionPoint && currentTheme !== 'underground') {
            // Switch to underground theme
            currentTheme = 'underground';
            animatedBg.className = 'animated-bg underground-theme';
            
            // Add underground ambiance
            document.body.style.background = 'transparent';
        }
        
        // Add parallax effect to elements
        const parallaxStrength = scrollPosition * 0.5;
        
        // Move clouds slower when scrolling
        const clouds = document.querySelectorAll('.cloud');
        clouds.forEach((cloud, index) => {
            const speed = 0.3 + (index * 0.1);
            cloud.style.transform = `translateX(${parallaxStrength * speed}px)`;
        });
        
        // Move sun with parallax
        const sun = document.querySelector('.sun');
        if (sun) {
            sun.style.transform = `translateY(${parallaxStrength * 0.2}px)`;
        }
        
        // Underground elements appear with scroll
        const rocks = document.querySelectorAll('.rock');
        const crystals = document.querySelectorAll('.crystal');
        const bubbles = document.querySelectorAll('.lava-bubble');
        
        if (currentTheme === 'underground') {
            [...rocks, ...crystals, ...bubbles].forEach((element, index) => {
                const delay = index * 100;
                setTimeout(() => {
                    element.style.opacity = element.classList.contains('rock') ? '0.6' : '0.8';
                }, delay);
            });
        }
    }
    
    // Smooth scroll behavior
    function smoothScrollToSection(targetSection) {
        isScrolling = true;
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }
    
    // Add click handlers for smooth navigation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            smoothScrollToSection(undergroundSection);
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (isScrolling) return;
        
        if (e.key === 'ArrowDown' || e.key === ' ') {
            e.preventDefault();
            if (currentTheme === 'sky') {
                smoothScrollToSection(undergroundSection);
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (currentTheme === 'underground') {
                smoothScrollToSection(skySection);
            }
        }
    });
    
    // Enhanced scroll event with throttling
    window.addEventListener('scroll', throttle(updateBackground, 16)); // ~60fps
    
    // Initial background setup
    updateBackground();
    
    // Add entrance animations
    setTimeout(() => {
        skySection.style.opacity = '1';
        skySection.style.transform = 'translateY(0)';
    }, 300);
    
    // Preload underground section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    observer.observe(undergroundSection);
    
    // Add mouse wheel smooth scrolling
    let wheelTimeout;
    window.addEventListener('wheel', (e) => {
        if (isScrolling) {
            e.preventDefault();
            return;
        }
        
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
            const delta = e.deltaY;
            
            if (Math.abs(delta) > 50) { // Significant scroll
                if (delta > 0 && currentTheme === 'sky') {
                    // Scrolling down from sky
                    e.preventDefault();
                    smoothScrollToSection(undergroundSection);
                } else if (delta < 0 && currentTheme === 'underground' && window.pageYOffset <= undergroundSection.offsetTop + 100) {
                    // Scrolling up from underground
                    e.preventDefault();
                    smoothScrollToSection(skySection);
                }
            }
        }, 100);
    }, { passive: false });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate clouds in
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach((cloud, index) => {
        setTimeout(() => {
            cloud.style.opacity = '0.7';
        }, index * 500);
    });
    
    // Animate sun
    setTimeout(() => {
        const sun = document.querySelector('.sun');
        if (sun) {
            sun.style.opacity = '1';
        }
    }, 1000);
});