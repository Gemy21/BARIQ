// Website translations
const translations = {
    en: {
        home: 'Home',
        features: 'Features',
        pricing: 'Pricing',
        contact: 'Contact',
        langButton: 'AR',
        heroTitle: 'Welcome to BARIQ',
        heroSubtitle: 'We create ideas, we make an impact, and we make your brand stand out.',
        getStarted: 'Get Started',
        ourFeatures: 'Our Features',
        fastPerformance: 'Fast Performance',
        fastPerformanceDesc: 'Lightning-quick solutions for your business needs',
        securePlatform: 'Secure Platform',
        securePlatformDesc: 'Your data safety is our top priority',
        mobileReady: 'Mobile Ready',
        mobileReadyDesc: 'Seamless experience across all devices',
        aboutUs: 'About Us',
        aboutUsDesc: 'We are a dynamic digital marketing agency passionate about helping businesses grow their online presence. With innovative strategies and data-driven approaches, we transform brands and drive measurable results in the digital landscape.',
        successfulCampaigns: 'Successful Campaigns',
        marketingExperts: 'Marketing Experts',
        yearsExperience: 'Years Experience',
        aboutOurServices: 'About Our Services',
        servicesDesc: 'We offer comprehensive digital marketing solutions designed to boost your brand\'s online visibility and drive real business growth. Our data-driven strategies deliver measurable results.',
        seoOptimization: 'SEO Optimization',
        seoDesc: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.',
        socialMediaMarketing: 'Social Media Marketing',
        socialMediaDesc: 'Build meaningful connections with your audience through strategic social media campaigns.',
        contentMarketing: 'Content Marketing',
        contentDesc: 'Create engaging, valuable content that attracts and converts your target audience.',
        ppcAdvertising: 'PPC Advertising',
        ppcDesc: 'Maximize your ROI with targeted paid advertising campaigns across multiple platforms.',
        pricingPlans: 'Pricing Plans',
        basic: 'Basic',
        pro: 'Pro',
        enterprise: 'Enterprise',
        month: '/month',
        basicFeatures: 'Basic Features',
        support247: '24/7 Support',
        oneUser: '1 User',
        advancedFeatures: 'Advanced Features',
        prioritySupport: 'Priority Support',
        fiveUsers: '5 Users',
        allFeatures: 'All Features',
        dedicatedSupport: 'Dedicated Support',
        unlimitedUsers: 'Unlimited Users',
        choosePlan: 'Choose Plan',
        contactUs: 'Contact Us',
        readyToStart: 'Ready to Get Started?',
        contactDescription: 'Let\'s discuss your project and create something amazing together. Contact us now and let\'s make your brand stand out!',
        contactWhatsApp: 'Contact Us on WhatsApp',
        contactFacebook: 'BARIQ Agency',
        contactPhone: '+20 1080835778',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        sendMessage: 'Send Message',
        sending: 'Sending...',
        messageSent: 'Message Sent!',
        allRightsReserved: 'All rights reserved.',
        aboutTitle: 'About Us',
        aboutText: 'We are a dynamic digital marketing agency passionate about helping businesses grow their online presence. With innovative strategies and data-driven approaches, we transform brands and drive measurable results in the digital landscape.',
        viewPortfolio: 'View Our Portfolio',
        startNow: 'Start Now',
        viewOurWork: 'View Our Work'
    },
    ar: {
        home: 'الرئيسية',
        features: 'المميزات',
        pricing: 'الأسعار',
        contact: 'اتصل بنا',
        langButton: 'EN',
        heroTitle: 'اهلًا بك في بريق',
        heroSubtitle: 'نحن نبتكر الأفكار، ونحدث التأثير، ونجعل علامتك التجارية تبرز.',
        getStarted: 'ابدأ الآن',
        ourFeatures: 'مميزاتنا',
        fastPerformance: 'أداء سريع',
        fastPerformanceDesc: 'حلول سريعة لاحتياجات عملك',
        securePlatform: 'منصة آمنة',
        securePlatformDesc: 'أمان بياناتك هو أولويتنا القصوى',
        mobileReady: 'جاهز للجوال',
        mobileReadyDesc: 'تجربة سلسة عبر جميع الأجهزة',
        aboutUs: 'من نحن',
        aboutUsDesc: 'نحن وكالة تسويق رقمي ديناميكية شغوفة بمساعدة الشركات على تطوير وجودها عبر الإنترنت. باستراتيجيات مبتكرة ونهج قائم على البيانات، نحول العلامات التجارية ونحقق نتائج قابلة للقياس في المشهد الرقمي.',
        successfulCampaigns: 'حملات ناجحة',
        marketingExperts: 'خبراء التسويق',
        yearsExperience: 'سنوات الخبرة',
        aboutOurServices: 'خدماتنا',
        servicesDesc: 'نقدم حلول تسويق رقمي شاملة مصممة لتعزيز ظهور علامتك التجارية عبر الإنترنت وتحقيق نمو حقيقي للأعمال. استراتيجياتنا القائمة على البيانات تحقق نتائج قابلة للقياس.',
        seoOptimization: 'تحسين محركات البحث',
        seoDesc: 'حسّن ترتيبك في محركات البحث واجلب زيارات عضوية باستراتيجيات تحسين محركات البحث الشاملة.',
        socialMediaMarketing: 'التسويق عبر وسائل التواصل الاجتماعي',
        socialMediaDesc: 'ابنِ روابط هادفة مع جمهورك من خلال حملات وسائل التواصل الاجتماعي الاستراتيجية.',
        contentMarketing: 'تسويق المحتوى',
        contentDesc: 'أنشئ محتوى جذاب وقيم يجذب جمهورك المستهدف ويحوله.',
        ppcAdvertising: 'الإعلانات المدفوعة',
        ppcDesc: 'احصل على أقصى عائد استثمار من خلال حملات الإعلانات المدفوعة المستهدفة عبر منصات متعددة.',
        pricingPlans: 'خطط الأسعار',
        basic: 'أساسي',
        pro: 'احترافي',
        enterprise: 'مؤسسات',
        month: '/شهر',
        basicFeatures: 'المميزات الأساسية',
        support247: 'دعم على مدار الساعة',
        oneUser: 'مستخدم واحد',
        advancedFeatures: 'مميزات متقدمة',
        prioritySupport: 'دعم ذو أولوية',
        fiveUsers: '5 مستخدمين',
        allFeatures: 'جميع المميزات',
        dedicatedSupport: 'دعم مخصص',
        unlimitedUsers: 'مستخدمين غير محدودين',
        choosePlan: 'اختر الخطة',
        contactUs: 'اتصل بنا',
        readyToStart: 'هل أنت مستعد للبدء؟',
        contactDescription: 'دعنا نناقش مشروعك ونبتكر شيئًا مذهلاً معًا. اتصل بنا الآن ودعنا نجعل علامتك التجارية تبرز!',
        contactWhatsApp: 'اتصل بنا على واتساب',
        contactFacebook: 'BARIQ Agency',
        contactPhone: '+20 1080835778',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        sendMessage: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        messageSent: 'تم إرسال الرسالة!',
        allRightsReserved: 'جميع الحقوق محفوظة.',
        aboutTitle: 'من نحن',
        aboutText: 'نحن وكالة تسويق رقمي ديناميكية شغوفة بمساعدة الشركات على تطوير وجودها عبر الإنترنت. باستراتيجيات مبتكرة ونهج قائم على البيانات، نحول العلامات التجارية ونحقق نتائج قابلة للقياس في المشهد الرقمي.',
        viewPortfolio: 'إطلع على مشروعنا',
        startNow: 'ابدأ الآن',
        viewOurWork: 'إطلع على عملنا'
    }
};

// Current language (default: English)
let currentLang = 'ar'; // Set Arabic as default

// Toggle language function
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateContent();
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
}

// Update content based on selected language
function updateContent() {
    // Update navigation links
    document.querySelector('a[href="#hero"]').textContent = translations[currentLang].home;
    document.querySelector('a[href="#features"]').textContent = translations[currentLang].features;
    document.querySelector('a[href="#about"]').textContent = translations[currentLang].aboutUs;
    document.querySelector('a[href="#contact"]').textContent = translations[currentLang].contact;
    
    // Update language button
    document.querySelector('.lang-switch').textContent = translations[currentLang].langButton;
    // Update mobile menu language button
    const mobileLangBtn = document.querySelector('#mobile-menu .lang-switch');
    if (mobileLangBtn) mobileLangBtn.textContent = translations[currentLang].langButton;
    
    // Update hero section
    document.querySelector('.hero h1').textContent = translations[currentLang].heroTitle;
    document.querySelector('.hero p').textContent = translations[currentLang].heroSubtitle;
    
    // Update hero buttons
    const startNowBtn = document.querySelector('.cta-button span');
    if (startNowBtn) {
        startNowBtn.textContent = translations[currentLang].startNow;
    }
    
    const viewWorkBtn = document.querySelector('.portfolio-cta span');
    if (viewWorkBtn) {
        viewWorkBtn.textContent = translations[currentLang].viewOurWork;
    }
    
    // Update features section
    document.querySelector('.features h2').textContent = translations[currentLang].ourFeatures;
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = translations[currentLang].fastPerformance;
    featureCards[0].querySelector('p').textContent = translations[currentLang].fastPerformanceDesc;
    featureCards[1].querySelector('h3').textContent = translations[currentLang].securePlatform;
    featureCards[1].querySelector('p').textContent = translations[currentLang].securePlatformDesc;
    featureCards[2].querySelector('h3').textContent = translations[currentLang].mobileReady;
    featureCards[2].querySelector('p').textContent = translations[currentLang].mobileReadyDesc;
    
    // Update about section
    document.querySelector('.about h2').textContent = translations[currentLang].aboutTitle;
    document.querySelector('.about-text p').textContent = translations[currentLang].aboutText;
    
    // Update portfolio link
    const portfolioLink = document.querySelector('.portfolio-link span');
    if (portfolioLink) {
        portfolioLink.textContent = translations[currentLang].viewPortfolio;
    }
    
    const stats = document.querySelectorAll('.stat');
    stats[0].querySelector('p').textContent = translations[currentLang].successfulCampaigns;
    stats[1].querySelector('p').textContent = translations[currentLang].marketingExperts;
    stats[2].querySelector('p').textContent = translations[currentLang].yearsExperience;
    
    // Update services section
    document.querySelector('.services h2').textContent = translations[currentLang].aboutOurServices;
    document.querySelector('.services-text p').textContent = translations[currentLang].servicesDesc;
    
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems[0].querySelector('h3').textContent = translations[currentLang].seoOptimization;
    serviceItems[0].querySelector('p').textContent = translations[currentLang].seoDesc;
    serviceItems[1].querySelector('h3').textContent = translations[currentLang].socialMediaMarketing;
    serviceItems[1].querySelector('p').textContent = translations[currentLang].socialMediaDesc;
    serviceItems[2].querySelector('h3').textContent = translations[currentLang].contentMarketing;
    serviceItems[2].querySelector('p').textContent = translations[currentLang].contentDesc;
    serviceItems[3].querySelector('h3').textContent = translations[currentLang].ppcAdvertising;
    serviceItems[3].querySelector('p').textContent = translations[currentLang].ppcDesc;
    
    // Update contact section
    document.querySelector('.contact h2').textContent = translations[currentLang].contactUs;
    document.querySelector('.contact-content h3').textContent = translations[currentLang].readyToStart;
    document.querySelector('.contact-content p').textContent = translations[currentLang].contactDescription;
    document.querySelector('.contact-whatsapp-btn span').textContent = translations[currentLang].contactWhatsApp;
    
    // Update contact information
    const contactItems = document.querySelectorAll('.contact-item span');
    const facebookLink = document.querySelector('.contact-item a');
    if (facebookLink) {
        facebookLink.textContent = translations[currentLang].contactFacebook;
    }
    if (contactItems.length >= 1) {
        contactItems[0].textContent = translations[currentLang].contactPhone;
    }
    
    // Update footer
    document.querySelector('.footer p').innerHTML = `&copy; 2025 <span class="logo-en">BARIQ</span><span class="logo-ar">بريق</span>. ${translations[currentLang].allRightsReserved}`;
}

// Enhanced navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .service-item, .stat, .about-text, .services-text');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Initialize scroll animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Enhanced mobile menu with smooth animations
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const hamburger = document.querySelector('.hamburger');
    const bars = hamburger ? hamburger.querySelectorAll('.bar') : [];
    const isOpen = menu.classList.toggle('open');
    menu.setAttribute('aria-hidden', !isOpen);
    if (hamburger) hamburger.setAttribute('aria-expanded', isOpen);
    if (overlay) overlay.classList.toggle('active', isOpen);
    // Animate hamburger bars
    if (bars.length) {
        if (isOpen) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            document.body.style.overflow = 'hidden';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
            document.body.style.overflow = '';
        }
    }
}

// Smooth scrolling with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroIcons = document.querySelectorAll('.hero-bg-icons .fi');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    heroIcons.forEach((icon, index) => {
        const speed = 0.5 + (index * 0.1);
        icon.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    updateContent();
    
    // Add fade-in class to elements
    const animateElements = document.querySelectorAll('.feature-card, .service-item, .stat, .about-text, .services-text');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Initialize the website in Arabic
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language to Arabic
    document.documentElement.setAttribute('lang', 'ar');
    document.documentElement.setAttribute('dir', 'rtl');
    updateContent();
});