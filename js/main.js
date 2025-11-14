// ================================================
// MAIN.JS - Funcionalidades Principales
// ================================================

(function() {
    'use strict';

    // ================================================
    // MOBILE MENU
    // ================================================
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                this.classList.toggle('active');

                // Cambiar icono
                this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
            });

            // Cerrar menú al hacer click en un enlace
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                    mobileMenuBtn.textContent = '☰';
                });
            });
        }
    }

    // ================================================
    // SMOOTH SCROLL
    // ================================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                // Solo si es un ancla válida
                if (href !== '#' && href.length > 1) {
                    const target = document.querySelector(href);

                    if (target) {
                        e.preventDefault();
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // ================================================
    // HEADER SCROLL EFFECT
    // ================================================
    function initHeaderScroll() {
        const header = document.querySelector('header');
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // ================================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ================================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observar elementos con la clase 'animate-on-scroll'
        document.querySelectorAll('.service-card, .why-card').forEach(el => {
            observer.observe(el);
        });
    }

    // ================================================
    // LAZY LOADING IMAGES
    // ================================================
    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src || img.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }
    }

    // ================================================
    // WHATSAPP FLOATING BUTTON (Optional)
    // ================================================
    function initWhatsAppButton() {
        // Crear botón flotante de WhatsApp si no existe
        if (!document.querySelector('.whatsapp-float')) {
            const whatsappBtn = document.createElement('a');
            whatsappBtn.href = 'https://wa.me/56995984952';
            whatsappBtn.className = 'whatsapp-float';
            whatsappBtn.target = '_blank';
            whatsappBtn.rel = 'noopener';
            whatsappBtn.setAttribute('aria-label', 'Contactar por WhatsApp');
            whatsappBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
            `;

            // Añadir estilos inline si no están en el CSS
            const style = document.createElement('style');
            style.textContent = `
                .whatsapp-float {
                    position: fixed;
                    width: 60px;
                    height: 60px;
                    bottom: 30px;
                    right: 30px;
                    background-color: #25d366;
                    color: #FFF;
                    border-radius: 50px;
                    text-align: center;
                    font-size: 30px;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
                    z-index: 999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .whatsapp-float:hover {
                    background-color: #128c7e;
                    transform: scale(1.1);
                }
                .whatsapp-float svg {
                    width: 32px;
                    height: 32px;
                }
                @media (max-width: 768px) {
                    .whatsapp-float {
                        width: 50px;
                        height: 50px;
                        bottom: 20px;
                        right: 20px;
                    }
                    .whatsapp-float svg {
                        width: 26px;
                        height: 26px;
                    }
                }
            `;

            document.head.appendChild(style);
            document.body.appendChild(whatsappBtn);

            // Mostrar después de 3 segundos con animación
            setTimeout(() => {
                whatsappBtn.style.opacity = '0';
                whatsappBtn.style.display = 'flex';
                setTimeout(() => {
                    whatsappBtn.style.transition = 'opacity 0.5s ease';
                    whatsappBtn.style.opacity = '1';
                }, 100);
            }, 3000);
        }
    }

    // ================================================
    // PERFORMANCE MONITORING
    // ================================================
    function logPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = window.performance.timing;
                    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                    console.log(`⚡ Página cargada en ${pageLoadTime}ms`);
                }, 0);
            });
        }
    }

    // ================================================
    // INITIALIZE ALL
    // ================================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                initMobileMenu();
                initSmoothScroll();
                initHeaderScroll();
                initScrollAnimations();
                initLazyLoading();
                initWhatsAppButton();
                logPerformance();
            });
        } else {
            // DOM is already ready
            initMobileMenu();
            initSmoothScroll();
            initHeaderScroll();
            initScrollAnimations();
            initLazyLoading();
            initWhatsAppButton();
            logPerformance();
        }
    }

    // Start the application
    init();

})();
