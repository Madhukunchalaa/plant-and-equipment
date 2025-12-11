document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.3 // Trigger when 30% of element is visible
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Truck Animation
                if (entry.target.id === 'truck-anim-trigger') {
                    const truckImg = entry.target.querySelector('.truck-anim-img');
                    if (truckImg) {
                        truckImg.classList.add('animate');
                    }
                }

                // Excavator Animation
                if (entry.target.id === 'excavator-anim-trigger') {
                    const warningOverlay = entry.target.querySelector('#warning-overlay');
                    if (warningOverlay) {
                        // Delay slightly for effect
                        setTimeout(() => {
                            warningOverlay.classList.add('active');
                        }, 1000); // 1 second delay after scrolling into view
                    }
                }

                // Stop observing once triggered (optional, keeps it one-off)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const truckSection = document.getElementById('truck-anim-trigger');
    const excavatorSection = document.getElementById('excavator-anim-trigger');

    if (truckSection) animateOnScroll.observe(truckSection);
    if (excavatorSection) animateOnScroll.observe(excavatorSection);

});

// Tab Switching Logic
function openTab(evt, tabName) {
    // 1. Hide all tab content
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // 2. Remove active class from all buttons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 3. Show current tab and add active class to button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
