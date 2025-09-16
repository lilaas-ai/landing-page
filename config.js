// lilaas.ai Configuration
// This file loads configuration variables for the website

const CONFIG = {
    site: {
        name: "lilaas.ai",
        description: "Serviços de automação com IA e agentes conversacionais para WhatsApp e Telegram",
        url: "https://lilaas.ai",
        logo: "logo.svg",
        favicon: "favicon.png"
    },
    
    contact: {
        email: "matheus@lilaas.ai",
        phone: "+55 (12) 98260-0314",
        whatsapp: "+5512982600314",
        address: "São José dos Campos, SP - Brasil"
    },
    
    social: {
        linkedin: "https://linkedin.com/company/lilaas-ai",
        instagram: "https://instagram.com/lilaas.ai",
        twitter: "https://twitter.com/lilaas_ai"
    },
    
    forms: {
        contact_form_url: "https://formspree.io/f/YOUR_FORM_ID",
        newsletter_url: "https://formspree.io/f/YOUR_NEWSLETTER_ID",
        waiting_list_url: "https://n8n.lilaas.ai/webhook/63a7af35-6b3d-4275-8dbc-d8b76fbda470"
    },
    
    links: {
        book_meeting: "https://calendar.google.com/calendar/appointments/schedules/YOUR_CALENDAR_ID",
        service_catalog: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
        demo_video: "https://www.youtube.com/watch?v=A-tf5YEXNBQ&pp=ygUMcmFpYW0gc2FudG9z"
    },
    
    seo: {
        keywords: "automação IA, agentes conversacionais, WhatsApp bot, Telegram bot, inteligência artificial, automação empresarial",
        author: "lilaas.ai",
        og_image: "logo_completo.png"
    },
    
    brand: {
        primary_color: "#5e1b68",
        secondary_color: "#8b5a96",
        background_color: "#fafafa",
        text_color: "#333333"
    },
    
    copyright: {
        year: new Date().getFullYear(),
        company: "lilaas.ai"
    },
    
    stats: {
        clients: 500,
        uptime: 99.9,
        support: "24/7"
    },
    
    serviceResults: {
        responseTime: 85,
        costSavings: 60,
        satisfaction: 95
    },
    
    agentResources: {
        availability: "24/7",
        conversations: 1000,
        languages: 15,
        uptime: 99.9
    },
    
    legal: {
        privacyPolicy: "politica-privacidade.html",
        termsOfService: "termos-servico.html",
        lastUpdated: "2024",
        compliance: "LGPD"
    }
};

// Utility functions to access config
window.getConfig = function(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], CONFIG);
};

// Auto-populate config values when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Update contact information
    updateContactInfo();
    
    // Update social links
    updateSocialLinks();
    
    // Update form actions
    updateFormActions();
    
    // Update links
    updateLinks();
    
    // Update meta tags
    updateMetaTags();
    
    // Update copyright
    updateCopyright();
    
    // Update main stats with scroll trigger
    updateMainStats();
    
    // Update regular stats for other pages
    updateStats();
    
    // Update feature section stats
    updateFeatureStats();
    
    // Initialize organic glow effect
    initOrganicGlow();
    
    // Update social media links
    updateSocialLinks();
    
    // Update service results stats
    updateServiceResults();
    
    // Update agent resources stats
    updateAgentResources();
});

function updateContactInfo() {
    console.log('Updating contact info...', CONFIG.contact);
    
    // Update email links
    document.querySelectorAll('a[href*="contato@lilaas.ai"]').forEach(link => {
        link.href = `mailto:${CONFIG.contact.email}`;
    });
    
    // Update contact email link buttons
    const emailLinks = document.querySelectorAll('.contact-email-link');
    console.log('Found email links:', emailLinks.length);
    emailLinks.forEach(link => {
        link.href = `mailto:${CONFIG.contact.email}`;
        console.log('Updated email link to:', link.href);
    });
    
    // Update phone links
    document.querySelectorAll('a[href*="+55"]').forEach(link => {
        link.href = `tel:${CONFIG.contact.phone}`;
    });
    
    // Update WhatsApp links
    document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
        link.href = `https://wa.me/${CONFIG.contact.whatsapp}`;
    });
    
    // Update contact WhatsApp link buttons
    const whatsappLinks = document.querySelectorAll('.contact-whatsapp-link');
    console.log('Found WhatsApp links:', whatsappLinks.length);
    whatsappLinks.forEach(link => {
        link.href = `https://wa.me/${CONFIG.contact.whatsapp}`;
        console.log('Updated WhatsApp link to:', link.href);
    });
    
    // Update contact text
    document.querySelectorAll('.contact-email').forEach(el => {
        el.textContent = CONFIG.contact.email;
    });
    
    document.querySelectorAll('.contact-phone').forEach(el => {
        el.textContent = CONFIG.contact.phone;
    });
    
    document.querySelectorAll('.contact-address').forEach(el => {
        el.textContent = CONFIG.contact.address;
    });
}


function updateFormActions() {
    // Update contact form action
    document.querySelectorAll('form[action*="formspree"]').forEach(form => {
        form.action = CONFIG.forms.contact_form_url;
    });
    
    // Update newsletter form action
    document.querySelectorAll('form[data-newsletter]').forEach(form => {
        form.action = CONFIG.forms.newsletter_url;
    });
    
    // Update waiting list form action
    document.querySelectorAll('form[data-waiting-list]').forEach(form => {
        form.action = CONFIG.forms.waiting_list_url;
        console.log('Updated waiting list form action to:', form.action);
    });
}

function updateLinks() {
    // Update book meeting links
    document.querySelectorAll('a[href*="calendar.google.com"]').forEach(link => {
        link.href = CONFIG.links.book_meeting;
    });
    
    // Update service catalog links
    document.querySelectorAll('a[href*="drive.google.com"]').forEach(link => {
        link.href = CONFIG.links.service_catalog;
    });
    
    // Update demo video links
    document.querySelectorAll('a[href*="youtube.com"]').forEach(link => {
        link.href = CONFIG.links.demo_video;
    });
    
    // Update links with data attributes
    document.querySelectorAll('a[data-book-meeting]').forEach(link => {
        link.href = CONFIG.links.book_meeting;
    });
    
    document.querySelectorAll('a[data-service-catalog]').forEach(link => {
        link.href = CONFIG.links.service_catalog;
    });
    
    document.querySelectorAll('a[data-demo-video]').forEach(link => {
        link.href = CONFIG.links.demo_video;
    });
}

function updateMetaTags() {
    // Update page title if it contains placeholder
    if (document.title.includes('lilaas.ai')) {
        document.title = document.title.replace('lilaas.ai', CONFIG.site.name);
    }
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && metaDesc.content.includes('automação')) {
        metaDesc.content = CONFIG.site.description;
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.content = CONFIG.seo.keywords;
    }
}

function updateCopyright() {
    // Update copyright year in footer
    document.querySelectorAll('.copyright-year').forEach(element => {
        element.textContent = CONFIG.copyright.year;
    });
    
    // Update copyright company name
    document.querySelectorAll('.copyright-company').forEach(element => {
        element.textContent = CONFIG.copyright.company;
    });
}

function updateStats() {
    // Animate client count
    const clientElements = document.querySelectorAll('.stat-clients');
    clientElements.forEach(element => {
        animateNumber(element, CONFIG.stats.clients, '+');
    });
    
    // Animate uptime percentage
    const uptimeElements = document.querySelectorAll('.stat-uptime');
    uptimeElements.forEach(element => {
        animateNumber(element, CONFIG.stats.uptime, '%');
    });
    
    // Update support text
    const supportElements = document.querySelectorAll('.stat-support');
    supportElements.forEach(element => {
        element.textContent = CONFIG.stats.support;
    });
}

function updateMainStats() {
    // Find main stats section
    const mainStatsSection = document.querySelector('.main-stats-section');
    if (!mainStatsSection) return;
    
    // Set initial values
    const clientsElement = mainStatsSection.querySelector('.stat-clients');
    const uptimeElement = mainStatsSection.querySelector('.stat-uptime');
    const supportElement = mainStatsSection.querySelector('.stat-support');
    
    if (clientsElement) clientsElement.textContent = '0+';
    if (uptimeElement) uptimeElement.textContent = '0%';
    if (supportElement) supportElement.textContent = '24/7';
    
    // Create intersection observer for scroll-triggered animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate clients
                if (clientsElement) {
                    animateNumber(clientsElement, CONFIG.stats.clients, '+');
                }
                
                // Animate uptime
                if (uptimeElement) {
                    animateNumber(uptimeElement, CONFIG.stats.uptime, '%');
                }
                
                // Support is text, not a number
                if (supportElement) {
                    supportElement.textContent = CONFIG.stats.support;
                }
                
                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });
    
    // Start observing the main stats section
    observer.observe(mainStatsSection);
}

function animateNumber(element, targetValue, suffix = '') {
    if (!element) {
        return;
    }
    
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startValue = 0;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (targetValue - startValue) * easeOutQuart;
        
        // Format the number based on whether it's a decimal or integer
        let formattedValue;
        if (targetValue % 1 !== 0) {
            // For decimal values (like 99.9), show one decimal place
            formattedValue = currentValue.toFixed(1);
        } else {
            // For integer values (like 500), show as integer
            formattedValue = Math.floor(currentValue).toString();
        }
        
        element.textContent = formattedValue + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            // Ensure final value is exactly the target
            if (targetValue % 1 !== 0) {
                element.textContent = targetValue.toFixed(1) + suffix;
            } else {
                element.textContent = targetValue + suffix;
            }
        }
    }
    
    requestAnimationFrame(updateNumber);
}

function updateSocialLinks() {
    // Find all social media links in footer
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    const socialLinks = footer.querySelectorAll('a[href="#"]');
    
    socialLinks.forEach((link, index) => {
        const svg = link.querySelector('svg');
        if (svg) {
            const path = svg.querySelector('path');
            if (path) {
                const pathData = path.getAttribute('d');
                
                // LinkedIn path (first icon)
                if (pathData && pathData.includes('M20.447 20.452h-3.554v-5.569c0-1.328')) {
                    link.href = CONFIG.social.linkedin;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                }
                
                // Instagram path (second icon)
                if (pathData && pathData.includes('M12 2.163c3.204 0 3.584.012 4.85.07')) {
                    link.href = CONFIG.social.instagram;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                }
                
                // Twitter path (third icon)
                if (pathData && pathData.includes('M23.953 4.57a10 10 0 01-2.825.775')) {
                    link.href = CONFIG.social.twitter;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                }
            }
        }
    });
}

function updateServiceResults() {
    // Find service results section
    const serviceResultsSection = document.querySelector('.service-results-section');
    if (!serviceResultsSection) return;
    
    // Set initial values to 0
    const responseTimeElement = serviceResultsSection.querySelector('.service-response-time');
    const costSavingsElement = serviceResultsSection.querySelector('.service-cost-savings');
    const satisfactionElement = serviceResultsSection.querySelector('.service-satisfaction');
    
    if (responseTimeElement) responseTimeElement.textContent = '0%';
    if (costSavingsElement) costSavingsElement.textContent = '0%';
    if (satisfactionElement) satisfactionElement.textContent = '0%';
    
    // Create intersection observer for scroll-triggered animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate response time
                if (responseTimeElement) {
                    animateNumber(responseTimeElement, CONFIG.serviceResults.responseTime, '%');
                }
                
                // Animate cost savings
                if (costSavingsElement) {
                    animateNumber(costSavingsElement, CONFIG.serviceResults.costSavings, '%');
                }
                
                // Animate satisfaction
                if (satisfactionElement) {
                    animateNumber(satisfactionElement, CONFIG.serviceResults.satisfaction, '%');
                }
                
                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });
    
    // Start observing the service results section
    observer.observe(serviceResultsSection);
}

function updateAgentResources() {
    // Find agent resources section
    const agentResourcesSection = document.querySelector('.agent-resources-section');
    if (!agentResourcesSection) return;
    
    // Set initial values
    const availabilityElement = agentResourcesSection.querySelector('.agent-availability');
    const conversationsElement = agentResourcesSection.querySelector('.agent-conversations');
    const languagesElement = agentResourcesSection.querySelector('.agent-languages');
    const uptimeElement = agentResourcesSection.querySelector('.agent-uptime');
    
    if (availabilityElement) availabilityElement.textContent = '24/7';
    if (conversationsElement) conversationsElement.textContent = '0+';
    if (languagesElement) languagesElement.textContent = '0';
    if (uptimeElement) uptimeElement.textContent = '0%';
    
    // Create intersection observer for scroll-triggered animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate conversations
                if (conversationsElement) {
                    animateNumber(conversationsElement, CONFIG.agentResources.conversations, '+');
                }
                
                // Animate languages
                if (languagesElement) {
                    animateNumber(languagesElement, CONFIG.agentResources.languages, '');
                }
                
                // Animate uptime
                if (uptimeElement) {
                    animateNumber(uptimeElement, CONFIG.agentResources.uptime, '%');
                }
                
                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });
    
    // Start observing the agent resources section
    observer.observe(agentResourcesSection);
}

function updateFeatureStats() {
    // Find all stat-clients elements (including those in features section)
    const clientElements = document.querySelectorAll('.stat-clients');
    clientElements.forEach(element => {
        // Only animate if it's not already been animated (check if it's still "0+")
        if (element.textContent === '0+') {
            animateNumber(element, CONFIG.stats.clients, '+');
        }
    });
    
    // Find all service-cost-savings elements
    const costSavingsElements = document.querySelectorAll('.service-cost-savings');
    costSavingsElements.forEach(element => {
        // Only animate if it's not already been animated (check if it's still "0%")
        if (element.textContent === '0%') {
            animateNumber(element, CONFIG.serviceResults.costSavings, '%');
        }
    });
}

function initOrganicGlow() {
    const heroButton = document.querySelector('.hero-cta-glow');
    if (!heroButton) return;
    
    // Create primary glow element
    const glowElement = document.createElement('div');
    glowElement.className = 'organic-glow-element';
    glowElement.style.cssText = `
        position: absolute;
        top: -15px;
        left: -15px;
        right: -15px;
        bottom: -15px;
        background: radial-gradient(circle at 50% 50%, 
                                   rgba(94, 27, 104, 0.5) 0%, 
                                   rgba(94, 27, 104, 0.3) 30%, 
                                   rgba(124, 58, 237, 0.2) 60%, 
                                   transparent 85%);
        opacity: 1;
        pointer-events: none;
        border-radius: inherit;
        z-index: -1;
        filter: blur(20px);
    `;
    
    // Create secondary glow element for layered effect
    const glowElement2 = document.createElement('div');
    glowElement2.className = 'organic-glow-element-2';
    glowElement2.style.cssText = `
        position: absolute;
        top: -12px;
        left: -12px;
        right: -12px;
        bottom: -12px;
        background: radial-gradient(circle at 50% 50%, 
                                   rgba(124, 58, 237, 0.4) 0%, 
                                   rgba(94, 27, 104, 0.2) 40%, 
                                   rgba(124, 58, 237, 0.1) 70%, 
                                   transparent 90%);
        opacity: 1;
        pointer-events: none;
        border-radius: inherit;
        z-index: -2;
        filter: blur(25px);
    `;
    
    heroButton.appendChild(glowElement);
    heroButton.appendChild(glowElement2);
    
    // Animation variables
    let time = 0;
    let animationId;
    
    // Organic movement function
    function animateGlow() {
        time += 0.015;
        
        // Primary glow movement (slower, more dramatic)
        const x1 = 50 + 25 * Math.sin(time) + 12 * Math.sin(time * 1.2);
        const y1 = 50 + 20 * Math.cos(time * 0.7) + 10 * Math.sin(time * 1.5);
        const x2 = 50 + 18 * Math.cos(time * 1.0) + 15 * Math.sin(time * 0.8);
        const y2 = 50 + 22 * Math.sin(time * 1.1) + 8 * Math.cos(time * 1.3);
        
        // Secondary glow movement (faster, counter-rotating)
        const x3 = 50 + 20 * Math.sin(time * 1.3) + 8 * Math.cos(time * 0.9);
        const y3 = 50 + 18 * Math.cos(time * 1.4) + 12 * Math.sin(time * 1.1);
        const x4 = 50 + 15 * Math.cos(time * 0.8) + 10 * Math.sin(time * 1.6);
        const y4 = 50 + 20 * Math.sin(time * 0.9) + 6 * Math.cos(time * 1.2);
        
        // Blend positions for smoother movement
        const blend1 = (Math.sin(time * 0.4) + 1) / 2;
        const blend2 = (Math.sin(time * 0.6) + 1) / 2;
        
        const x = x1 + (x2 - x1) * blend1;
        const y = y1 + (y2 - y1) * blend1;
        const x2_glow = x3 + (x4 - x3) * blend2;
        const y2_glow = y3 + (y4 - y3) * blend2;
        
        // Vary opacity and size organically
        const opacity1 = 0.4 + 0.4 * Math.sin(time * 0.6);
        const opacity2 = 0.3 + 0.3 * Math.sin(time * 0.8);
        const scale1 = 0.9 + 0.15 * Math.sin(time * 1.0);
        const scale2 = 0.95 + 0.12 * Math.sin(time * 1.2);
        
        // Apply organic movement to primary glow
        glowElement.style.background = `radial-gradient(circle at ${x}% ${y}%, 
                                   rgba(94, 27, 104, ${opacity1}) 0%, 
                                   rgba(94, 27, 104, ${opacity1 * 0.6}) 30%, 
                                   rgba(124, 58, 237, ${opacity1 * 0.4}) 60%, 
                                   transparent 85%)`;
        glowElement.style.transform = `scale(${scale1})`;
        
        // Apply organic movement to secondary glow
        glowElement2.style.background = `radial-gradient(circle at ${x2_glow}% ${y2_glow}%, 
                                   rgba(124, 58, 237, ${opacity2}) 0%, 
                                   rgba(94, 27, 104, ${opacity2 * 0.5}) 40%, 
                                   rgba(124, 58, 237, ${opacity2 * 0.25}) 70%, 
                                   transparent 90%)`;
        glowElement2.style.transform = `scale(${scale2})`;
        
        animationId = requestAnimationFrame(animateGlow);
    }
    
    // Start animation
    animateGlow();
    
    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
}

// Export for use in other scripts
window.CONFIG = CONFIG;
