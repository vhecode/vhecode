// ===== MAIN.JS - FUNCIONALIDADES GENERALES =====
//console.log('✓ Main.js cargado');

// Esperar a que el header esté insertado
function waitForHeader(callback) {
    const checkHeader = setInterval(() => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            clearInterval(checkHeader);
            callback();
        }
    }, 50);
}

// Ejecutar después de que el header esté listo
waitForHeader(() => {
    initializeMainFeatures();
});

function initializeMainFeatures() {
    // ===== ANIMACIÓN DE NÚMEROS (STATS) =====
    const animateNumbers = () => {
        const stats = document.querySelectorAll('.stat-number');
        if (stats.length === 0) return;
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const text = target.textContent;
                    const hasPlus = text.includes('+');
                    const hasPercent = text.includes('%');
                    const hasSlash = text.includes('/');
                    
                    let finalNumber;
                    if (hasSlash) {
                        return;
                    } else {
                        finalNumber = parseInt(text.replace(/\D/g, ''));
                    }
                    
                    let current = 0;
                    const increment = finalNumber / 50;
                    const duration = 2000;
                    const stepTime = duration / 50;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= finalNumber) {
                            current = finalNumber;
                            clearInterval(timer);
                        }
                        
                        let displayText = Math.floor(current).toString();
                        if (hasPlus) displayText += '+';
                        if (hasPercent) displayText += '%';
                        
                        target.textContent = displayText;
                    }, stepTime);
                    
                    observer.unobserve(target);
                }
            });
        }, observerOptions);
        
        stats.forEach(stat => observer.observe(stat));
    };

    // ===== ANIMACIÓN DE ELEMENTOS AL HACER SCROLL =====
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .why-card, .stat-item, .tech-card');
        if (elements.length === 0) return;
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 50);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            observer.observe(element);
        });
    };

    // ===== SMOOTH SCROLL MEJORADO =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== EFECTO PARALLAX EN HERO =====
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    }

    // ===== ANIMACIÓN DE PARTÍCULAS EN HERO =====
    const createParticles = () => {
        const heroParticles = document.querySelector('.hero-particles');
        if (!heroParticles) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${Math.random() > 0.5 ? '#1fc5d4' : '#00ff88'};
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5 + 0.2};
                animation: float ${Math.random() * 10 + 10}s linear infinite;
            `;
            heroParticles.appendChild(particle);
        }
    };

    // Añadir animación de partículas al CSS
    const style = document.createElement('style');
    style.textContent = `
        .hero-particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-20px) translateX(10px);
            }
            50% {
                transform: translateY(-10px) translateX(-10px);
            }
            75% {
                transform: translateY(-30px) translateX(5px);
            }
        }
        
        .particle {
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    // ===== CURSOR PERSONALIZADO (OPCIONAL - SOLO DESKTOP) =====
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #1fc5d4;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            display: none;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.display = 'block';
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        const interactiveElements = document.querySelectorAll('a, button, .service-card, .why-card, .tech-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.borderColor = '#00ff88';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = '#1fc5d4';
            });
        });
    }

    // ===== INICIALIZAR TODO =====
    animateNumbers();
    animateOnScroll();
    createParticles();

    // ===== DETECCIÓN DE SCROLL PARA AÑADIR CLASE ACTIVE AL NAV =====
    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
        const highlightNav = () => {
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-menu a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', highlightNav);
    }

    //console.log('✓ Todas las funcionalidades inicializadas');
}

// ===== PRELOADER =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});