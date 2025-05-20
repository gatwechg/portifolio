// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fade-in animation for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach((section) => {
    section.classList.add('fade-in');
    observer.observe(section);
});

const texts = [
    "Hi there! '👋'",
    "I'm Gatwech Gatmuon Mut",
    "Full Stack Web Developer",
    "Mern Stack Expertise"
];

// In your typeText function, update to use innerHTML instead of textContent
function type() {
    if (charIndex < currentText.length) {
        typingText.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

let textIndex = 0;
const typingText = document.getElementById('typing-text');

function typeText() {
    typingText.style.opacity = '1';
    typingText.style.color = '#3B82F6';  // Brighter blue color
    typingText.style.textShadow = '0 0 10px rgba(59, 130, 246, 0.5)';  // Blue glow effect
    const currentText = texts[textIndex];
    let charIndex = 0;
    
    function type() {
        if (charIndex < currentText.length) {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, 500);
        }
    }

    type();
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', typeText);

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking menu items
    const mobileMenuItems = mobileMenu.getElementsByTagName('a');
    for (let item of mobileMenuItems) {
        item.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    }
});


function sendEmail(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const mailtoUrl = `https://mail.google.com/mail/u/0/#inbox?compose=new&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.open(mailtoUrl, '_blank');
    
    // Reset form
    document.getElementById('contactForm').reset();
}


// Add animation for skill items
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 100);
            });
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('#skills').forEach((section) => {
    skillsObserver.observe(section);
});

// Function to handle image loading and animations
document.addEventListener('DOMContentLoaded', function() {
    // Select all project images
    const projectImages = document.querySelectorAll('.project-image-container img');
    
    // Add loading and error handling for project images
    projectImages.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            this.src = 'fallback-image.jpg'; // Replace with your fallback image
        });
    });
});