function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav'); 

    if (mobileNav && mobileOverlay && hamburger && mainNav) {
        mobileNav.classList.toggle('open');
        mobileOverlay.classList.toggle('open');
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('nav-open'); 
    }
}

function closeMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');

    if (mobileNav && mobileOverlay && hamburger && mainNav) {
        mobileNav.classList.remove('open');
        mobileOverlay.classList.remove('open');
        hamburger.classList.remove('active');
        mainNav.classList.remove('nav-open'); 
    }
}

function scrollToSectionMobile(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMobileNav();
    }
}

function highlightActiveNavButton() {
    const sections = document.querySelectorAll('section');
    const navButtons = document.querySelectorAll('.nav-button');
    const mobileNavButtons = document.querySelectorAll('.mobile-nav .nav-button');

    let currentActive = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentActive = section.id;
        }
    });

    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.id === `nav-${currentActive}`) {
            button.classList.add('active');
        }
    });

    mobileNavButtons.forEach(button => {
        button.classList.remove('active');
        if (button.id === `mobile-nav-${currentActive}`) {
            button.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const lucide = window.lucide;
    if (lucide) {
        lucide.createIcons();
    }
    highlightActiveNavButton();
});

window.addEventListener('scroll', highlightActiveNavButton);