// ===========================
// Language Switcher
// ===========================
let currentLang = 'TR';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Language switcher functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            
            // Change icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('open')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }
            });
        });
    }

    // Set active nav link based on current page
    setActiveNavLink();

    // Scroll animations
    observeElements();
});

function switchLanguage(lang) {
    currentLang = lang;

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update all translatable elements
    const elements = document.querySelectorAll('[data-tr][data-en]');
    elements.forEach(el => {
        const text = lang === 'TR' ? el.dataset.tr : el.dataset.en;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else {
            el.textContent = text;
        }
    });
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Intersection Observer for scroll animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that need animation on scroll
    const animatedElements = document.querySelectorAll('.stat-card, .featured-card, .faculty-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth scroll for anchor links
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

// Faculty filter functionality (for faculty.html)
function initFacultyFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const facultyCards = document.querySelectorAll('.faculty-card');

    if (filterButtons.length === 0 || facultyCards.length === 0) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards with animation
            facultyCards.forEach((card, index) => {
                const department = card.dataset.department;
                const shouldShow = filter === 'all' || filter === department;
                
                if (shouldShow) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Curriculum accordion functionality (for curriculum.html)
function initCurriculumAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders.length === 0) return;

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            const isOpen = item.classList.contains('open');

            // Close all other accordions
            document.querySelectorAll('.accordion-item').forEach(i => {
                if (i !== item) {
                    i.classList.remove('open');
                    const c = i.querySelector('.accordion-content');
                    if (c) c.style.maxHeight = '0';
                }
            });

            // Toggle current accordion
            if (isOpen) {
                item.classList.remove('open');
                content.style.maxHeight = '0';
            } else {
                item.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

// Contact form functionality (for contact.html)
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to a server
        console.log('Form submitted:', data);

        // Show success message
        alert(currentLang === 'TR' 
            ? 'Mesajınız başarıyla gönderildi!' 
            : 'Your message has been sent successfully!');

        // Reset form
        contactForm.reset();
    });
}

// Initialize page-specific functionality
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPageSpecific);
} else {
    initPageSpecific();
}

function initPageSpecific() {
    initFacultyFilter();
    initCurriculumAccordion();
    initContactForm();
}
