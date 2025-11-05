// main.js - Scripts d'interactivité pour le portfolio

// ===== CONFIGURATION ET INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de toutes les fonctionnalités
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initProjectCards();
    initTypewriterEffect();
    initScrollToTop();
    initActiveSectionObserver();
});

// ===== GESTION DE LA NAVIGATION =====
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Changement de style de la navbar au scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.backgroundColor = '';
            navbar.style.backdropFilter = '';
            navbar.style.padding = '1rem 0';
        }
    });
    
    // Smooth scroll pour les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Mise à jour des liens actifs (gérée par l'observateur)
            }
        });
    });
}

// ===== OBSERVATEUR DE SECTIONS ACTIVES =====
function initActiveSectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeSection = entry.target.getAttribute('id');
                
                // Mise à jour des liens de navigation
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeSection}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// ===== ANIMATIONS AU SCROLL =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up, .project-card, .skill-item, .timeline-item');
    
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -10% 0px',
        threshold: 0
    };
    
    const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animation spécifique pour les cartes projets
                if (entry.target.classList.contains('project-card')) {
                    entry.target.style.transition = 'all 0.6s ease-out';
                }
                
                // Animation spécifique pour les éléments de timeline
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.transition = 'all 0.8s ease-out';
                }
            }
        });
    }, observerOptions);
    
    // Configuration initiale des éléments animés
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        animationObserver.observe(element);
    });
}

// ===== ANIMATION DES BARRES DE COMPÉTENCES =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const width = skillLevel.style.width;
                
                // Réinitialiser la largeur pour l'animation
                skillLevel.style.width = '0%';
                
                // Animer vers la largeur cible
                setTimeout(() => {
                    skillLevel.style.transition = 'width 1.5s ease-in-out';
                    skillLevel.style.width = width;
                }, 300);
                
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// ===== GESTION DU FORMULAIRE DE CONTACT =====
function initContactForm() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validation
            if (validateForm(formData)) {
                // Simulation d'envoi (à remplacer par une vraie requête AJAX)
                simulateFormSubmission(formData);
            }
        });
        
        // Validation en temps réel
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function validateForm(formData) {
    let isValid = true;
    
    if (!formData.name.trim()) {
        showFieldError('name', 'Le nom est requis');
        isValid = false;
    }
    
    if (!formData.email.trim()) {
        showFieldError('email', 'L\'email est requis');
        isValid = false;
    } else if (!isValidEmail(formData.email)) {
        showFieldError('email', 'Format d\'email invalide');
        isValid = false;
    }
    
    if (!formData.subject.trim()) {
        showFieldError('subject', 'Le sujet est requis');
        isValid = false;
    }
    
    if (!formData.message.trim()) {
        showFieldError('message', 'Le message est requis');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    switch (field.id) {
        case 'name':
            if (!value) showFieldError(field, 'Le nom est requis');
            break;
        case 'email':
            if (!value) {
                showFieldError(field, 'L\'email est requis');
            } else if (!isValidEmail(value)) {
                showFieldError(field, 'Format d\'email invalide');
            }
            break;
        case 'subject':
            if (!value) showFieldError(field, 'Le sujet est requis');
            break;
        case 'message':
            if (!value) showFieldError(field, 'Le message est requis');
            break;
    }
}

function showFieldError(fieldId, message) {
    const field = typeof fieldId === 'string' ? document.getElementById(fieldId) : fieldId;
    const formGroup = field.closest('.col-md-6') || field.closest('.col-12');
    
    // Supprimer les erreurs existantes
    clearFieldError(field);
    
    // Ajouter le message d'erreur
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback d-block';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
    
    // Ajouter la classe Bootstrap d'erreur
    field.classList.add('is-invalid');
}

function clearFieldError(field) {
    const formGroup = field.closest('.col-md-6') || field.closest('.col-12');
    const errorDiv = formGroup.querySelector('.invalid-feedback');
    
    if (errorDiv) {
        errorDiv.remove();
    }
    
    field.classList.remove('is-invalid');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function simulateFormSubmission(formData) {
    const submitButton = document.querySelector('#contact button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Afficher l'état de chargement
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Envoi en cours...';
    
    // Simulation d'envoi (remplacer par fetch() ou axios)
    setTimeout(() => {
        // Réinitialiser le formulaire
        document.getElementById('contact').reset();
        
        // Afficher le message de succès
        showNotification('Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.', 'success');
        
        // Réactiver le bouton
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 2000);
}

// ===== INTERACTIVITÉ DES CARTES PROJETS =====
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Effet de zoom au survol de l'image
        const cardImage = card.querySelector('img');
        const cardBody = card.querySelector('.card-body');
        
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0) scale(1)';
        });
        
        // Animation des badges
        const badges = card.querySelectorAll('.badge');
        badges.forEach((badge, index) => {
            badge.style.opacity = '0';
            badge.style.transform = 'translateY(20px)';
            badge.style.transition = `all 0.4s ease ${index * 0.1}s`;
        });
        
        const cardObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    badges.forEach(badge => {
                        badge.style.opacity = '1';
                        badge.style.transform = 'translateY(0)';
                    });
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        cardObserver.observe(card);
    });
}

// ===== EFFET MACHINE À ÉCRIRE =====
function initTypewriterEffect() {
    const heroText = document.querySelector('.hero-section h2');
    if (!heroText) return;
    
    const originalText = heroText.textContent;
    heroText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Démarrer l'animation quand la section est visible
    const heroObserver = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            typeWriter();
            heroObserver.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });
    
    heroObserver.observe(heroText);
}

// ===== BOUTON SCROLL TO TOP =====
function initScrollToTop() {
    // Créer le bouton
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Retour en haut');
    document.body.appendChild(scrollBtn);
    
    // Style du bouton
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--secondary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    // Afficher/masquer le bouton
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Fonction de scroll
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    `;
    
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-suppression après 5 secondes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ===== ANIMATION DES ICÔNES SOCIALES =====
function initSocialIcons() {
    const socialIcons = document.querySelectorAll('.social-links a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0) scale(1)';
        });
    });
}

// Initialiser les icônes sociales
document.addEventListener('DOMContentLoaded', initSocialIcons);

// ===== GESTION DES IMAGES =====
function handleImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Ajouter un effet de chargement
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Gérer les erreurs de chargement
        img.addEventListener('error', function() {
            this.style.opacity = '1';
            this.alt = 'Image non disponible';
        });
    });
}

// Initialiser la gestion des images
document.addEventListener('DOMContentLoaded', handleImageLoading);

// ===== PERFORMANCE ET OPTIMISATIONS =====
// Délégation d'événements pour les éléments dynamiques
document.addEventListener('click', function(e) {
    // Gérer les clics sur les liens des projets
    if (e.target.matches('.project-card a') || e.target.closest('.project-card a')) {
        e.preventDefault();
        const projectTitle = e.target.closest('.project-card').querySelector('.card-title').textContent;
        showNotification(`Ouverture des détails du projet: ${projectTitle}`, 'info');
    }
});

// Optimisation des animations
let ticking = false;
function updateOnScroll() {
    // Code pour les animations dépendantes du scroll
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Export des fonctions principales pour une utilisation externe si nécessaire
window.Portfolio = {
    showNotification,
    validateForm,
    initSkillBars
};