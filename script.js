// ============================================================
//  Ahmed Amine Soualhi — Portfolio
//  Behavior layer: i18n, theme, nav, animations, accordion, form
// ============================================================

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const contactForm = document.getElementById('contactForm');
const themeToggle = document.getElementById('theme-toggle');
const scrollProgress = document.getElementById('scroll-progress');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================================
//  Translations
// ============================================================
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-badge': 'Available for new projects',
        'hero-greeting': "Hi, I'm",
        'hero-subtitle': 'Software Architect Engineer & Full Stack Developer',
        'hero-description': 'Passionate about designing robust software architectures and building scalable, enterprise-level applications with cutting-edge technologies and best practices.',
        'btn-contact': 'Get In Touch',
        'btn-projects': 'View My Work',
        'btn-cv-en': 'CV (EN)',
        'btn-cv-fr': 'CV (FR)',
        'btn-report': 'Report',
        'about-eyebrow': 'Get to know me',
        'about-title': 'About Me',
        'about-description': "I'm a passionate Software Architect Engineer with extensive experience in designing and building scalable software systems. I specialize in full-stack development, system architecture, and creating innovative solutions that drive business success.",
        'skills-eyebrow': 'What I work with',
        'skills-title': 'Technical Skills',
        'projects-eyebrow': 'Some of my work',
        'projects-title': 'Featured Projects',
        'contact-eyebrow': "Let's talk",
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
        'project-hotel-title': 'E-commerce Platform',
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
        'hero-badge': 'Disponible pour de nouveaux projets',
        'hero-greeting': 'Bonjour, je suis',
        'hero-subtitle': 'Ingénieur Architecte Logiciel & Développeur Full Stack',
        'hero-description': 'Passionné par la conception d\'architectures logicielles robustes et la création d\'applications évolutives de niveau entreprise avec des technologies de pointe et les meilleures pratiques.',
        'btn-contact': 'Contactez-moi',
        'btn-projects': 'Voir Mon Travail',
        'btn-cv-en': 'CV (EN)',
        'btn-cv-fr': 'CV (FR)',
        'btn-report': 'Rapport',
        'about-eyebrow': 'Faites connaissance',
        'about-title': 'À Propos de Moi',
        'about-description': "Je suis un Ingénieur Architecte Logiciel passionné avec une vaste expérience dans la conception et la construction de systèmes logiciels évolutifs. Je me spécialise dans le développement full-stack, l'architecture système et la création de solutions innovantes qui favorisent le succès commercial.",
        'skills-eyebrow': 'Mes outils',
        'skills-title': 'Compétences Techniques',
        'projects-eyebrow': 'Quelques réalisations',
        'projects-title': 'Projets en Vedette',
        'contact-eyebrow': 'Discutons',
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
        'project-hotel-title': 'Plateforme E-commerce',
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
        'hero-badge': 'متاح لمشاريع جديدة',
        'hero-greeting': 'مرحباً، أنا',
        'hero-subtitle': 'مهندس معماري برمجيات ومطور متكامل',
        'hero-description': 'شغوف بتصميم هياكل برمجية قوية وبناء تطبيقات قابلة للتوسع على مستوى المؤسسات باستخدام أحدث التقنيات وأفضل الممارسات.',
        'btn-contact': 'تواصل معي',
        'btn-projects': 'اطلع على أعمالي',
        'btn-cv-en': 'السيرة الذاتية (EN)',
        'btn-cv-fr': 'السيرة الذاتية (FR)',
        'btn-report': 'التقرير',
        'about-eyebrow': 'تعرّف عليّ',
        'about-title': 'نبذة عني',
        'about-description': 'أنا مهندس معماري برمجيات شغوف بخبرة واسعة في تصميم وبناء أنظمة برمجية قابلة للتوسع. أتخصص في التطوير المتكامل وهندسة الأنظمة وإنشاء حلول مبتكرة تدفع النجاح التجاري.',
        'skills-eyebrow': 'الأدوات التي أستخدمها',
        'skills-title': 'المهارات التقنية',
        'projects-eyebrow': 'بعض أعمالي',
        'projects-title': 'المشاريع المميزة',
        'contact-eyebrow': 'لنتحدث',
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
        'project-hotel-title': 'منصة التجارة الإلكترونية',
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
        'hero-badge': 'Verfügbar für neue Projekte',
        'hero-greeting': 'Hallo, ich bin',
        'hero-subtitle': 'Software-Architektur-Ingenieur & Full-Stack-Entwickler',
        'hero-description': 'Leidenschaftlich für das Design robuster Software-Architekturen und die Entwicklung skalierbarer Anwendungen auf Unternehmensebene mit modernsten Technologien und bewährten Praktiken.',
        'btn-contact': 'Kontakt Aufnehmen',
        'btn-projects': 'Meine Arbeit Ansehen',
        'btn-cv-en': 'Lebenslauf (EN)',
        'btn-cv-fr': 'Lebenslauf (FR)',
        'btn-report': 'Bericht',
        'about-eyebrow': 'Lernen Sie mich kennen',
        'about-title': 'Über Mich',
        'about-description': 'Ich bin ein leidenschaftlicher Software-Architektur-Ingenieur mit umfangreicher Erfahrung im Design und Aufbau skalierbarer Softwaresysteme. Ich spezialisiere mich auf Full-Stack-Entwicklung, Systemarchitektur und die Schaffung innovativer Lösungen, die den Geschäftserfolg vorantreiben.',
        'skills-eyebrow': 'Womit ich arbeite',
        'skills-title': 'Technische Fähigkeiten',
        'projects-eyebrow': 'Einige meiner Arbeiten',
        'projects-title': 'Ausgewählte Projekte',
        'contact-eyebrow': 'Sprechen wir',
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
        'project-hotel-title': 'E-Commerce-Plattform',
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

// ============================================================
//  Init
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initThemeToggle();
    initScrollReveal();
    initAccordion();
    initContactForm();
    initLanguage();
});

// ============================================================
//  Navigation
// ============================================================
function initNavbar() {
    // Navbar scroll state + scroll progress + active section
    const onScroll = () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateScrollProgress();
        highlightActiveSection();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu open/close (with body scroll lock)
    const openMenu = () => {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        document.body.classList.add('menu-open');
        hamburger.setAttribute('aria-expanded', 'true');
    };
    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
    };
    const toggleMenu = () => {
        navMenu.classList.contains('active') ? closeMenu() : openMenu();
    };

    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(); }
    });

    // Close on Escape, on tap outside, and when resizing up to desktop
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });

    // Smooth scroll + close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
            scrollToSection(link.getAttribute('data-section'));
        });
    });

    // Logo + scroll cue use data-section too
    document.querySelectorAll('[data-section]').forEach(el => {
        if (el.classList.contains('nav-link')) return;
        el.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(el.getAttribute('data-section'));
        });
    });
}

function updateScrollProgress() {
    if (!scrollProgress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    scrollProgress.style.width = pct + '%';
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === current);
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const offsetTop = section.offsetTop - 70;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
}

// ============================================================
//  Theme toggle (data-theme on <html>, persisted)
// ============================================================
function initThemeToggle() {
    if (!themeToggle) return;
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', next === 'dark' ? '#0b1120' : '#0ea5e9');
    });
}

// ============================================================
//  Scroll reveal + skill bars + counters (IntersectionObserver)
// ============================================================
function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('visible'));
        animateSkillBars();
        animateCounters();
        return;
    }

    // Stagger siblings within the same parent
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .reveal'));
            const idx = Math.max(0, siblings.indexOf(el));
            el.style.transitionDelay = (idx * 90) + 'ms';
            el.classList.add('visible');
            observer.unobserve(el);
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => observer.observe(el));

    // Skill bars when skills section enters
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillObs = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { animateSkillBars(); obs.disconnect(); }
            });
        }, { threshold: 0.2 });
        skillObs.observe(skillsSection);
    }

    // Counters when stats enter
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const statObs = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { animateCounters(); obs.disconnect(); }
            });
        }, { threshold: 0.4 });
        statObs.observe(statsSection);
    }
}

function animateSkillBars() {
    skillProgressBars.forEach((bar, index) => {
        const skillLevel = bar.getAttribute('data-skill');
        if (skillLevel && !isNaN(skillLevel)) {
            bar.style.width = '0%';
            setTimeout(() => { bar.style.width = skillLevel + '%'; }, 80 + index * 40);
        }
    });
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.innerText, 10);
        if (isNaN(target)) return;
        if (prefersReducedMotion) { counter.innerText = target + '+'; return; }
        let count = 0;
        const increment = target / 50;
        const update = () => {
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count) + '+';
                setTimeout(update, 30);
            } else {
                counter.innerText = target + '+';
            }
        };
        update();
    });
}

// ============================================================
//  Projects accordion (single open, first open by default)
// ============================================================
function initAccordion() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const header = card.querySelector('.project-header');
        header.addEventListener('click', () => {
            const isActive = card.classList.contains('active');
            projectCards.forEach(c => c.classList.remove('active'));
            if (!isActive) card.classList.add('active');
        });
    });
    if (projectCards.length > 0) projectCards[0].classList.add('active');
}

// ============================================================
//  Contact form (validation + mailto + notification)
// ============================================================
function initContactForm() {
    if (!contactForm) return;
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        window.location.href = createMailtoLink(name, email, subject, message);
        showNotification('Opening your email client...', 'success');
        setTimeout(() => contactForm.reset(), 1000);
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    return `mailto:${recipient}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
}

// ============================================================
//  Language switching
// ============================================================
function initLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchLanguage(savedLang);
    langButtons.forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-lang="${savedLang}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = lang;

    if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.documentElement.dir = 'rtl';
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.dir = 'ltr';
    }

    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (!dict[key]) return;
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = dict[key];
        } else {
            element.textContent = dict[key];
        }
    });

    // Form placeholders
    const map = { name: 'form-name', email: 'form-email', subject: 'form-subject', message: 'form-message' };
    Object.entries(map).forEach(([id, key]) => {
        const input = document.getElementById(id);
        if (input && dict[key]) input.placeholder = dict[key];
    });
}

// ============================================================
//  Notifications
// ============================================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close">&times;</button>
        </div>`;
    document.body.appendChild(notification);

    requestAnimationFrame(() => notification.classList.add('show'));

    const timer = setTimeout(() => removeNotification(notification), 5000);
    notification.querySelector('.notification-close').addEventListener('click', () => {
        clearTimeout(timer);
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 400);
}
