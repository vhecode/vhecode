// ===== CONFIGURACIÓN SEO COMPLETA =====
(function() {
    'use strict';
    
    const SEO_CONFIG = {
        siteName: 'vhecode',
        domain: 'vhecode.com',
        twitterHandle: '@vhecode',
        defaultImage: '/images/og-image.jpg', // Crea esta imagen 1200x630px
        primaryColor: '#1fc5d4',
        organizationSchema: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "vhecode",
            "url": "https://vhecode.com",
            "logo": "https://vhecode.com/images/logo.png",
            "description": "Desarrollo de software profesional en Chile. Consultoría tecnológica, aplicaciones web y móviles, soporte integral.",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "CL",
                "addressLocality": "Santiago",
                "addressRegion": "Región Metropolitana"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+56-9-9598-4952",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
            },
            "sameAs": [
                "https://linkedin.com/company/vhecode",
                "https://github.com/vhecode"
            ]
        }
    };
    
    // Detectar página actual
    function getPageInfo() {
        const path = window.location.pathname;
        const isSubfolder = path.includes('/pages/');
        const basePath = isSubfolder ? '../' : './';
        
        let pageData = {
            title: 'vhecode | Desarrollo de Software Profesional en Chile',
            description: 'Asesoría tecnológica, desarrollo de software a medida y soporte integral para empresas en Chile. Expertos en todas las tecnologías.',
            keywords: 'desarrollo software Chile, consultoría tecnológica, aplicaciones web, aplicaciones móviles, inteligencia artificial Chile',
            type: 'website',
            image: SEO_CONFIG.defaultImage
        };
        
        // Configuración por página
        if (path.includes('servicios')) {
            pageData = {
                title: 'Servicios de Desarrollo de Software | vhecode Chile',
                description: 'Desarrollo de software a medida, consultoría tecnológica, aplicaciones web y móviles, bases de datos y soporte 24/7 en Chile.',
                keywords: 'desarrollo software a medida, consultoría IT Chile, aplicaciones web, aplicaciones móviles, staff augmentation',
                type: 'website'
            };
        } else if (path.includes('tecnologias')) {
            pageData = {
                title: 'Tecnologías y Stack Tecnológico | vhecode',
                description: 'Expertos en React, Angular, Vue, Node.js, Python, Java, .NET y todas las tecnologías modernas de desarrollo de software.',
                keywords: 'React Chile, Angular, Vue.js, Node.js, Python, Java, MongoDB, PostgreSQL, AWS, Docker',
                type: 'website'
            };
        } else if (path.includes('nosotros')) {
            pageData = {
                title: 'Quiénes Somos | vhecode - Empresa de Software en Chile',
                description: 'Conoce a vhecode, tu socio tecnológico en Chile. Equipo experto con años de experiencia en desarrollo de software y transformación digital.',
                keywords: 'empresa desarrollo software Chile, equipo tecnológico, valores empresa, misión visión',
                type: 'website'
            };
        } else if (path.includes('contacto')) {
            pageData = {
                title: 'Contacto | vhecode - Hablemos de tu Proyecto',
                description: 'Contáctanos para tu proyecto de desarrollo de software en Chile. Respuesta en 24 horas. WhatsApp: +56 9 9598 4952',
                keywords: 'contacto vhecode, cotización software Chile, consultoría tecnológica, desarrollo software Santiago',
                type: 'website'
            };
        }
        
        return { ...pageData, basePath };
    }
    
    // Añadir meta tags
    function addMetaTags() {
        const page = getPageInfo();
        const currentUrl = window.location.href;
        
        // Canonical
        addOrUpdateMeta('link', 'canonical', currentUrl, 'rel');
        
        // Open Graph
        addOrUpdateMeta('meta', 'og:title', page.title, 'property');
        addOrUpdateMeta('meta', 'og:description', page.description, 'property');
        addOrUpdateMeta('meta', 'og:url', currentUrl, 'property');
        addOrUpdateMeta('meta', 'og:type', page.type, 'property');
        addOrUpdateMeta('meta', 'og:image', `https://${SEO_CONFIG.domain}${page.image}`, 'property');
        addOrUpdateMeta('meta', 'og:site_name', SEO_CONFIG.siteName, 'property');
        addOrUpdateMeta('meta', 'og:locale', 'es_CL', 'property');
        
        // Twitter Card
        addOrUpdateMeta('meta', 'twitter:card', 'summary_large_image', 'name');
        addOrUpdateMeta('meta', 'twitter:title', page.title, 'name');
        addOrUpdateMeta('meta', 'twitter:description', page.description, 'name');
        addOrUpdateMeta('meta', 'twitter:image', `https://${SEO_CONFIG.domain}${page.image}`, 'name');
        if (SEO_CONFIG.twitterHandle) {
            addOrUpdateMeta('meta', 'twitter:site', SEO_CONFIG.twitterHandle, 'name');
        }
        
        // Actualizar title si es necesario
        if (!document.title || document.title === '') {
            document.title = page.title;
        }
        
        // Actualizar meta description si no existe
        const existingDesc = document.querySelector('meta[name="description"]');
        if (!existingDesc) {
            addOrUpdateMeta('meta', 'description', page.description, 'name');
        }
    }
    
    // Función auxiliar para añadir/actualizar meta tags
    function addOrUpdateMeta(tagName, identifier, content, attributeType = 'name') {
        let element;
        
        if (tagName === 'link') {
            element = document.querySelector(`link[${attributeType}="${identifier}"]`);
            if (!element) {
                element = document.createElement('link');
                element.setAttribute(attributeType, identifier);
                document.head.appendChild(element);
            }
            element.href = content;
        } else {
            element = document.querySelector(`meta[${attributeType}="${identifier}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attributeType, identifier);
                document.head.appendChild(element);
            }
            element.content = content;
        }
    }
    
    // Añadir Schema.org JSON-LD
    function addStructuredData() {
        const path = window.location.pathname;
        
        // Organization Schema (todas las páginas)
        addJsonLd(SEO_CONFIG.organizationSchema);
        
        // WebSite Schema
        const websiteSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "vhecode",
            "url": `https://${SEO_CONFIG.domain}`,
            "potentialAction": {
                "@type": "SearchAction",
                "target": `https://${SEO_CONFIG.domain}/buscar?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        };
        addJsonLd(websiteSchema);
        
        // Breadcrumb Schema (páginas internas)
        if (path.includes('/pages/')) {
            const pageName = path.split('/').pop().replace('.html', '');
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Inicio",
                        "item": `https://${SEO_CONFIG.domain}/`
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": pageName.charAt(0).toUpperCase() + pageName.slice(1),
                        "item": window.location.href
                    }
                ]
            };
            addJsonLd(breadcrumbSchema);
        }
        
        // Service Schema (página de servicios)
        if (path.includes('servicios')) {
            const serviceSchema = {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Desarrollo de Software",
                "provider": {
                    "@type": "Organization",
                    "name": "vhecode"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "Chile"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios de Desarrollo",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Desarrollo de Software a Medida"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Consultoría Tecnológica"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Aplicaciones Web y Móviles"
                            }
                        }
                    ]
                }
            };
            addJsonLd(serviceSchema);
        }
        
        // ContactPage Schema
        if (path.includes('contacto')) {
            const contactSchema = {
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "name": "Contacto",
                "description": "Contáctanos para tu proyecto de desarrollo de software",
                "url": window.location.href
            };
            addJsonLd(contactSchema);
        }
    }
    
    // Función auxiliar para añadir JSON-LD
    function addJsonLd(data) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data);
        document.head.appendChild(script);
    }
    
    // Inicializar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            addMetaTags();
            addStructuredData();
            console.log('✓ SEO optimizado correctamente');
        });
    } else {
        addMetaTags();
        addStructuredData();
        console.log('✓ SEO optimizado correctamente');
    }
})();