// Master Home Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Profile picture placeholder interaction
    const profilePlaceholder = document.querySelector('.profile-picture-placeholder');
    if (profilePlaceholder) {
        profilePlaceholder.addEventListener('click', function() {
            // Placeholder for future profile picture upload functionality
            console.log('Profile picture clicked - future upload functionality');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }, 150);
        });
    }
    
    // Add hover effects and analytics tracking for nav tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('mouseenter', function() {
            // Add subtle animation to icon
            const icon = this.querySelector('.tab-icon svg');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        tab.addEventListener('mouseleave', function() {
            // Reset icon animation
            const icon = this.querySelector('.tab-icon svg');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
        
        tab.addEventListener('click', function(e) {
            // Add click tracking if needed
            const tabName = this.querySelector('.tab-label').textContent;
            console.log(`Navigating to: ${tabName}`);
            
            // Add click animation
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                // Let the browser handle the navigation
            }, 100);
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const tabs = Array.from(document.querySelectorAll('.nav-tab'));
        let currentIndex = -1;
        
        // Find currently focused tab
        tabs.forEach((tab, index) => {
            if (tab === document.activeElement) {
                currentIndex = index;
            }
        });
        
        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % tabs.length;
                tabs[nextIndex].focus();
                break;
                
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                const prevIndex = currentIndex === -1 ? tabs.length - 1 : (currentIndex - 1 + tabs.length) % tabs.length;
                tabs[prevIndex].focus();
                break;
                
            case 'Enter':
            case ' ':
                if (currentIndex !== -1) {
                    e.preventDefault();
                    tabs[currentIndex].click();
                }
                break;
        }
    });
    
    // Add focus styles for accessibility
    navTabs.forEach(tab => {
        tab.addEventListener('focus', function() {
            this.style.outline = '3px solid rgba(255, 255, 255, 0.5)';
            this.style.outlineOffset = '2px';
        });
        
        tab.addEventListener('blur', function() {
            this.style.outline = 'none';
            this.style.outlineOffset = '0';
        });
    });
    
    // Add entrance animations with stagger
    const elements = [
        document.querySelector('.profile-section'),
        ...document.querySelectorAll('.nav-tab'),
        document.querySelector('.master-footer')
    ];
    
    elements.forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 150 + 300);
        }
    });
    
    // Add particle background effect (optional)
    createParticleBackground();
});

function createParticleBackground() {
    const particleCount = 20;
    const body = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: particleFloat ${10 + Math.random() * 20}s infinite linear;
        `;
        
        body.appendChild(particle);
    }
    
    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(100vh) translateX(0px);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}