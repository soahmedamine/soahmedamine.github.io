// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const contactForm = document.getElementById('contactForm');

// Translation data
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Software Architect Engineer & Full Stack Developer',
        'hero-description': 'Passionate about designing robust software architectures and building scalable, enterprise-level applications with cutting-edge technologies and best practices.',
        'btn-contact': 'Get In Touch',
        'btn-projects': 'View My Work',
        'about-title': 'About Me',
        'about-description': "I'm a passionate Software Architect Engineer with extensive experience in designing and building scalable software systems. I specialize in full-stack development, system architecture, and creating innovative solutions that drive business success.",
        'skills-title': 'Technical Skills',
        'projects-title': 'Featured Projects',
        'contact-title': 'Get In Touch',
        'contact-subtitle': "Let's Connect",
        'contact-description': "I'm always interested in hearing about new opportunities and interesting projects.",
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-subject': 'Subject',
        'form-message': 'Your Message',
        'btn-send': 'Send Message',
        // Skills
        'skills-frontend': 'Frontend',
        'skills-backend': 'Backend',
        'skills-database': 'Database',
        'skills-tools': 'Tools & DevOps',
        'skills-languages': 'Languages',
        'skills-apis': 'APIs & Web Services',
        'skills-team': 'Team & Leadership',
        'skills-systems': 'Systems & Virtualization',
        // Timeline
        'timeline-architect': 'Software Architect Engineer',
        'timeline-fullstack': 'Full Stack Developer',
        'timeline-junior': 'Junior Developer',
        // Stats
        'stats-experience': 'Years Experience',
        'stats-projects': 'Projects Completed',
        'stats-technologies': 'Technologies',
        // Contact
        'contact-email': 'soualhi.ahmedamine@esprit.tn',
        'contact-phone': '+216 53969043',
        'contact-location': 'Tunis, Tunisia',
        // Footer
        'footer-text': '© 2025 Ahmed Amine. All rights reserved.',
        // Projects
        'project-hotel-title': 'E-commerce Site',
        'project-hotel-desc': 'Comprehensive e-commerce platform with product catalog, shopping cart, and payment integration',
        'project-mobile-title': 'Mobile Application Development',
        'project-mobile-desc': 'Cross-platform mobile applications with modern UI/UX design and backend integration',
        'project-web-title': 'Full-Stack Web Applications',
        'project-web-desc': 'Enterprise-level web applications with scalable architecture and modern technology stack',
        'project-iot-title': 'IoT & Embedded Systems',
        'project-iot-desc': 'Internet of Things solutions with sensor integration, data collection, and real-time monitoring',
        'project-code': 'Code',
        'project-demo': 'Demo'
    },
    fr: {
        'nav-home': 'Accueil',
        'nav-about': 'À Propos',
        'nav-skills': 'Compétences',
        'nav-projects': 'Projets',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Ingénieur Architecte Logiciel & Développeur Full Stack',
        'hero-description': 'Passionné par la conception d\'architectures logicielles robustes et la création d\'applications évolutives de niveau entreprise avec des technologies de pointe et les meilleures pratiques.',
        'btn-contact': 'Contactez-moi',
        'btn-projects': 'Voir Mon Travail',
        'about-title': 'À Propos de Moi',
        'about-description': "Je suis un Ingénieur Architecte Logiciel passionné avec une vaste expérience dans la conception et la construction de systèmes logiciels évolutifs. Je me spécialise dans le développement full-stack, l'architecture système et la création de solutions innovantes qui favorisent le succès commercial.",
        'skills-title': 'Compétences Techniques',
        'projects-title': 'Projets en Vedette',
        'contact-title': 'Contactez-moi',
        'contact-subtitle': 'Connectons-nous',
        'contact-description': "Je suis toujours intéressé à entendre parler de nouvelles opportunités et de projets intéressants.",
        'form-name': 'Votre Nom',
        'form-email': 'Votre Email',
        'form-subject': 'Sujet',
        'form-message': 'Votre Message',
        'btn-send': 'Envoyer le Message',
        // Skills
        'skills-frontend': 'Frontend',
        'skills-backend': 'Backend',
        'skills-database': 'Base de Données',
        'skills-tools': 'Outils & DevOps',
        'skills-languages': 'Langues',
        'skills-apis': 'APIs & Services Web',
        'skills-team': 'Équipe & Leadership',
        'skills-systems': 'Systèmes & Virtualisation',
        // Timeline
        'timeline-architect': 'Ingénieur Architecte Logiciel',
        'timeline-fullstack': 'Développeur Full Stack',
        'timeline-junior': 'Développeur Junior',
        // Stats
        'stats-experience': 'Années d\'Expérience',
        'stats-projects': 'Projets Réalisés',
        'stats-technologies': 'Technologies',
        // Contact
        'contact-email': 'soualhi.ahmedamine@esprit.tn',
        'contact-phone': '+216 53969043',
        'contact-location': 'Tunis, Tunisie',
        // Footer
        'footer-text': '© 2025 Ahmed Amine. Tous droits réservés.',
        // Projects
        'project-hotel-title': 'Site E-commerce',
        'project-hotel-desc': 'Plateforme e-commerce complète avec catalogue de produits, panier d\'achat et intégration de paiement',
        'project-mobile-title': 'Développement d\'Applications Mobile',
        'project-mobile-desc': 'Applications mobiles multiplateformes avec design UI/UX moderne et intégration backend',
        'project-web-title': 'Applications Web Full-Stack',
        'project-web-desc': 'Applications web de niveau entreprise avec architecture évolutive et pile technologique moderne',
        'project-iot-title': 'IoT & Systèmes Embarqués',
        'project-iot-desc': 'Solutions Internet des Objets avec intégration de capteurs, collecte de données et surveillance en temps réel',
        'project-code': 'Code',
        'project-demo': 'Démo'
    },
    ar: {
        'nav-home': 'الرئيسية',
        'nav-about': 'نبذة عني',
        'nav-skills': 'المهارات',
        'nav-projects': 'المشاريع',
        'nav-contact': 'التواصل',
        'hero-subtitle': 'مهندس معماري برمجيات ومطور متكامل',
        'hero-description': 'شغوف بتصميم هياكل برمجية قوية وبناء تطبيقات قابلة للتوسع على مستوى المؤسسات باستخدام أحدث التقنيات وأفضل الممارسات.',
        'btn-contact': 'تواصل معي',
        'btn-projects': 'اطلع على أعمالي',
        'about-title': 'نبذة عني',
        'about-description': 'أنا مهندس معماري برمجيات شغوف بخبرة واسعة في تصميم وبناء أنظمة برمجية قابلة للتوسع. أتخصص في التطوير المتكامل وهندسة الأنظمة وإنشاء حلول مبتكرة تدفع النجاح التجاري.',
        'skills-title': 'المهارات التقنية',
        'projects-title': 'المشاريع المميزة',
        'contact-title': 'تواصل معي',
        'contact-subtitle': 'لنتواصل',
        'contact-description': 'أهتم دائماً بسماع الفرص الجديدة والمشاريع المثيرة للاهتمام.',
        'form-name': 'اسمك',
        'form-email': 'بريدك الإلكتروني',
        'form-subject': 'الموضوع',
        'form-message': 'رسالتك',
        'btn-send': 'إرسال الرسالة',
        // Skills
        'skills-frontend': 'الواجهة الأمامية',
        'skills-backend': 'الواجهة الخلفية',
        'skills-database': 'قواعد البيانات',
        'skills-tools': 'الأدوات والتطوير',
        'skills-languages': 'اللغات',
        'skills-apis': 'واجهات برمجة التطبيقات',
        'skills-team': 'الفريق والقيادة',
        'skills-systems': 'الأنظمة والمحاكاة',
        // Timeline
        'timeline-architect': 'مهندس معماري برمجيات',
        'timeline-fullstack': 'مطور متكامل',
        'timeline-junior': 'مطور مبتدئ',
        // Stats
        'stats-experience': 'سنوات الخبرة',
        'stats-projects': 'المشاريع المنجزة',
        'stats-technologies': 'التقنيات',
        // Contact
        'contact-email': 'soualhi.ahmedamine@esprit.tn',
        'contact-phone': '+216 53969043',
        'contact-location': 'تونس، تونس',
        // Footer
        'footer-text': '© 2025 أحمد أمين. جميع الحقوق محفوظة.',
        // Projects
        'project-hotel-title': 'موقع التجارة الإلكترونية',
        'project-hotel-desc': 'منصة تجارة إلكترونية شاملة مع كتالوج المنتجات وسلة التسوق وتكامل الدفع',
        'project-mobile-title': 'تطوير تطبيقات الجوال',
        'project-mobile-desc': 'تطبيقات جوال متعددة المنصات مع تصميم واجهة مستخدم حديث وتكامل خلفي',
        'project-web-title': 'تطبيقات ويب متكاملة',
        'project-web-desc': 'تطبيقات ويب على مستوى المؤسسات مع هندسة قابلة للتوسع ومجموعة تقنيات حديثة',
        'project-iot-title': 'إنترنت الأشياء والأنظمة المدمجة',
        'project-iot-desc': 'حلول إنترنت الأشياء مع تكامل أجهزة الاستشعار وجمع البيانات والمراقبة في الوقت الفعلي',
        'project-code': 'الكود',
        'project-demo': 'العرض التوضيحي'
    },
    de: {
        'nav-home': 'Startseite',
        'nav-about': 'Über Mich',
        'nav-skills': 'Fähigkeiten',
        'nav-projects': 'Projekte',
        'nav-contact': 'Kontakt',
        'hero-subtitle': 'Software-Architektur-Ingenieur & Full-Stack-Entwickler',
        'hero-description': 'Leidenschaftlich für das Design robuster Software-Architekturen und die Entwicklung skalierbarer Anwendungen auf Unternehmensebene mit modernsten Technologien und bewährten Praktiken.',
        'btn-contact': 'Kontakt Aufnehmen',
        'btn-projects': 'Meine Arbeit Ansehen',
        'about-title': 'Über Mich',
        'about-description': 'Ich bin ein leidenschaftlicher Software-Architektur-Ingenieur mit umfangreicher Erfahrung im Design und Aufbau skalierbarer Softwaresysteme. Ich spezialisiere mich auf Full-Stack-Entwicklung, Systemarchitektur und die Schaffung innovativer Lösungen, die den Geschäftserfolg vorantreiben.',
        'skills-title': 'Technische Fähigkeiten',
        'projects-title': 'Ausgewählte Projekte',
        'contact-title': 'Kontakt Aufnehmen',
        'contact-subtitle': 'Lass Uns Verbinden',
        'contact-description': 'Ich bin immer interessiert daran, von neuen Möglichkeiten und interessanten Projekten zu hören.',
        'form-name': 'Ihr Name',
        'form-email': 'Ihre E-Mail',
        'form-subject': 'Betreff',
        'form-message': 'Ihre Nachricht',
        'btn-send': 'Nachricht Senden',
        // Skills
        'skills-frontend': 'Frontend',
        'skills-backend': 'Backend',
        'skills-database': 'Datenbank',
        'skills-tools': 'Tools & DevOps',
        'skills-languages': 'Sprachen',
        'skills-apis': 'APIs & Webservices',
        'skills-team': 'Team & Führung',
        'skills-systems': 'Systeme & Virtualisierung',
        // Timeline
        'timeline-architect': 'Software-Architektur-Ingenieur',
        'timeline-fullstack': 'Full-Stack-Entwickler',
        'timeline-junior': 'Junior-Entwickler',
        // Stats
        'stats-experience': 'Jahre Erfahrung',
        'stats-projects': 'Abgeschlossene Projekte',
        'stats-technologies': 'Technologien',
        // Contact
        'contact-email': 'soualhi.ahmedamine@esprit.tn',
        'contact-phone': '+216 53969043',
        'contact-location': 'Tunis, Tunesien',
        // Footer
        'footer-text': '© 2025 Ahmed Amine. Alle Rechte vorbehalten.',
        // Projects
        'project-hotel-title': 'E-Commerce-Website',
        'project-hotel-desc': 'Umfassende E-Commerce-Plattform mit Produktkatalog, Warenkorb und Zahlungsintegration',
        'project-mobile-title': 'Mobile App-Entwicklung',
        'project-mobile-desc': 'Plattformübergreifende mobile Anwendungen mit modernem UI/UX-Design und Backend-Integration',
        'project-web-title': 'Full-Stack-Webanwendungen',
        'project-web-desc': 'Webanwendungen auf Unternehmensebene mit skalierbarer Architektur und modernem Technologie-Stack',
        'project-iot-title': 'IoT & Eingebettete Systeme',
        'project-iot-desc': 'Internet der Dinge-Lösungen mit Sensorintegration, Datenerfassung und Echtzeitüberwachung',
        'project-code': 'Code',
        'project-demo': 'Demo'
    }
};

let currentLanguage = 'en';

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    
    function highlightActiveSection() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Skill bars animation
    const animateSkillBars = () => {
        skillProgressBars.forEach((bar, index) => {
            const skillLevel = bar.getAttribute('data-skill');
            if (skillLevel && !isNaN(skillLevel)) {
                // Reset width first, then animate with staggered delay
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = skillLevel + '%';
                }, 100 + (index * 50)); // Staggered animation
            }
        });
    };

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate skill bars when skills section is visible
                if (entry.target.id === 'skills') {
                    setTimeout(animateSkillBars, 300);
                }
                
                // Animate stats counters
                if (entry.target.classList.contains('about-stats')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observe sections for animations
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe stats section
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Counter animation for stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.innerText);
            const increment = target / 50;
            let count = 0;
            
            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count) + '+';
                    setTimeout(updateCounter, 30);
                } else {
                    counter.innerText = target + '+';
                }
            };
            
            updateCounter();
        });
    }

    // Contact form handling
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple form validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Create mailto link with form data
            const mailtoLink = createMailtoLink(name, email, subject, message);
            
            // Open user's email client with pre-filled data
            window.location.href = mailtoLink;
            
            // Show success notification
            showNotification('Opening your email client...', 'success');
            
            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
        });
    }

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = "Hi, I'm Ahmed Amine";
        const highlightText = "Ahmed Amine";
        let index = 0;
        
        // Clear existing content
        heroTitle.innerHTML = '';
        
        function typeWriter() {
            if (index < text.length) {
                const char = text.charAt(index);
                if (index === text.indexOf(highlightText)) {
                    heroTitle.innerHTML += '<span class="highlight">' + highlightText + '</span>';
                    index += highlightText.length;
                } else if (index < text.indexOf(highlightText)) {
                    heroTitle.innerHTML += char;
                    index++;
                } else {
                    index++;
                }
                
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after page load
        setTimeout(typeWriter, 1000);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const speed = scrolled * 0.5;
            hero.style.transform = `translateY(${speed}px)`;
        }
    });

    // Dynamic background particles
    createParticles();

    // Language switching functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
            
            // Update active button
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Load saved language or default to English
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchLanguage(savedLang);
    
    // Update active button
    langButtons.forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-lang="${savedLang}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
});

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function createMailtoLink(name, email, subject, message) {
    const recipient = 'soualhi.ahmedamine@esprit.tn';
    const mailtoSubject = `Portfolio Contact: ${subject}`;
    const mailtoBody = `Hello Ahmed Amine,

I am contacting you through your portfolio website.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Best regards,
${name}`;

    // Encode the components for URL
    const encodedSubject = encodeURIComponent(mailtoSubject);
    const encodedBody = encodeURIComponent(mailtoBody);
    
    return `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
}

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Handle RTL for Arabic
    if (lang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update form placeholders specifically
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    if (nameInput && translations[lang]['form-name']) {
        nameInput.placeholder = translations[lang]['form-name'];
    }
    if (emailInput && translations[lang]['form-email']) {
        emailInput.placeholder = translations[lang]['form-email'];
    }
    if (subjectInput && translations[lang]['form-subject']) {
        subjectInput.placeholder = translations[lang]['form-subject'];
    }
    if (messageInput && translations[lang]['form-message']) {
        messageInput.placeholder = translations[lang]['form-message'];
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    const styles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease',
        maxWidth: '400px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
    };
    
    const typeStyles = {
        success: { background: '#27ae60' },
        error: { background: '#e74c3c' },
        info: { background: '#3498db' }
    };
    
    Object.assign(notification.style, styles, typeStyles[type]);
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 1rem;
        padding: 0;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 0;
    `;
    
    hero.appendChild(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 10;
        const opacity = Math.random() * 0.5 + 0.2;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, ${opacity});
            border-radius: 50%;
            left: ${left}%;
            bottom: -10px;
            animation: floatUp ${animationDuration}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add CSS animation for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Theme switcher (bonus feature)
function initThemeSwitcher() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #3498db;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    themeToggle.addEventListener('mouseenter', () => {
        themeToggle.style.transform = 'scale(1.1)';
    });
    
    themeToggle.addEventListener('mouseleave', () => {
        themeToggle.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        // Save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Initialize theme switcher
document.addEventListener('DOMContentLoaded', initThemeSwitcher);

// Add dark theme styles
const darkThemeStyles = `
    .dark-theme {
        --bg-color: #1a1a1a;
        --text-color: #e0e0e0;
        --card-bg: #2a2a2a;
        --border-color: #3a3a3a;
    }
    
    .dark-theme body {
        background-color: var(--bg-color);
        color: var(--text-color);
    }
    
    .dark-theme .navbar {
        background: rgba(26, 26, 26, 0.95);
    }
    
    .dark-theme .skill-category,
    .dark-theme .project-card,
    .dark-theme .contact-form,
    .dark-theme .stat-item {
        background: var(--card-bg);
        border: 1px solid var(--border-color);
    }
    
    .dark-theme .about {
        background: #1e1e1e;
    }
    
    .dark-theme .projects {
        background: #1e1e1e;
    }
`;

const darkStyle = document.createElement('style');
darkStyle.textContent = darkThemeStyles;
document.head.appendChild(darkStyle);

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Add hover effect to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        category.addEventListener('mouseleave', () => {
            category.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Fallback skill bar animation on scroll
    let skillBarsAnimated = false;
    window.addEventListener('scroll', () => {
        if (!skillBarsAnimated) {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                const rect = skillsSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                if (rect.top < windowHeight && rect.bottom > 0) {
                    animateSkillBars();
                    skillBarsAnimated = true;
                }
            }
        }
    });
});