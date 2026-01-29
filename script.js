// Header Hide/Show on Scroll & Dynamic Background
let lastScrollTop = 0;
const header = document.getElementById('main-header');
const headerBg = document.getElementById('header-bg');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Toggle Header Visibility
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    // Toggle Header Background Opacity
    if (scrollTop > 50) {
        headerBg.classList.remove('opacity-0');
        header.classList.add('shadow-sm');
    } else {
        headerBg.classList.add('opacity-0');
        header.classList.remove('shadow-sm');
    }

    lastScrollTop = scrollTop;
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Animate opacity/slide for mobile menu
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.animate([
            { opacity: 0, transform: 'translateY(-10px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 200,
            fill: 'forwards'
        });
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Modal Logic
const modal = document.getElementById('privacy-modal');

function openModal() {
    modal.classList.remove('hidden');
    // Simple fade in animation via CSS transitions on the child elements could be added
}

function closeModal() {
    modal.classList.add('hidden');
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
});