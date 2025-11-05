// ===== TEMPLATES DE HEADER Y FOOTER =====
(function() {
    'use strict';
    
    // Determinar si estamos en una subcarpeta
    const isInSubfolder = window.location.pathname.includes('/pages/');
    const basePath = isInSubfolder ? '../' : './';
    
    // Template del Header
    const headerTemplate = `
        <nav class="navbar" id="navbar">
            <div class="container">
                <div class="logo">
                    <a href="${basePath}index.html">
                        <img src="${basePath}images/logo.png" alt="vhecode Logo">
                    </a>
                </div>
                <ul class="nav-menu" id="navMenu">
                    <li><a href="${basePath}index.html#inicio">Inicio</a></li>
                    <li><a href="${basePath}pages/servicios.html">Servicios</a></li>
                    <li><a href="${basePath}pages/tecnologias.html">Tecnologías</a></li>
                    <li><a href="${basePath}pages/nosotros.html">Nosotros</a></li>
                    <li><a href="${basePath}pages/contacto.html" class="btn-nav-contact">Contacto</a></li>
                </ul>
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;
    
    // Template del Footer
    const footerTemplate = `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-left">
                        <img src="${basePath}images/logo.png" alt="vhecode" class="footer-logo">
                        <p>Transformando ideas en soluciones tecnológicas</p>
                    </div>
                    <div class="footer-right">
                        <p>&copy; 2025 vhecode. Todos los derechos reservados.</p>
                        <p>Santiago, Chile</p>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    // Función para insertar el header y footer
    function insertTemplates() {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');
        
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerTemplate;
            initializeNavigation();
        }
        
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerTemplate;
        }
    }

    // ===== AÑADIR FAVICONS DINÁMICAMENTE =====
function addFavicons() {
    const isInSubfolder = window.location.pathname.includes('/pages/');
    const basePath = isInSubfolder ? '../' : './';
    const isLocalFile = window.location.protocol === 'file:';
    
    const favicons = [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' }
    ];
    
    // Solo añadir manifest si NO estamos en file://
    if (!isLocalFile) {
        favicons.push({ rel: 'manifest', href: 'site.webmanifest' });
    }
    
    favicons.forEach(favicon => {
        const link = document.createElement('link');
        link.rel = favicon.rel;
        if (favicon.type) link.type = favicon.type;
        if (favicon.sizes) link.sizes = favicon.sizes;
        link.href = basePath + favicon.href;
        document.head.appendChild(link);
    });
    
    // Meta tags para theme color
    const themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#1fc5d4';
    document.head.appendChild(themeColor);
    
    const tileColor = document.createElement('meta');
    tileColor.name = 'msapplication-TileColor';
    tileColor.content = '#1a2332';
    document.head.appendChild(tileColor);
    
   //console.log('✓ Favicons cargados' + (isLocalFile ? ' (manifest omitido en file://)' : ''));
}
    
    // Función para inicializar la navegación
    function initializeNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        if (hamburger && navMenu) {
            // Evento del menú hamburguesa
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
                
                const spans = hamburger.querySelectorAll('span');
                if (hamburger.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
            
            // Cerrar menú al hacer clic en enlaces
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    
                    const spans = hamburger.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                });
            });
        }
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        });
        
        // Marcar link activo según la página actual
        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (currentPath.includes(href.split('#')[0].split('/').pop())) {
                link.classList.add('active');
            }
        });
    }
    
    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertTemplates);
    } else {
        insertTemplates();
    }
    
    //console.log('✓ Header y Footer cargados correctamente');
})();