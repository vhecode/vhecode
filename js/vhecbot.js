// ===== VHECBOT - Asistente Virtual Educativo de vhecode =====
(function() {
    'use strict';

    const techData = {
        historia: [
            {
                q: "¿Cuál fue el primer lenguaje de programación?",
                a: "El primer lenguaje de programación de alto nivel fue **Fortran** (1957), creado por IBM. Sin embargo, el Assembly ya existía desde 1949. Antes de eso, Ada Lovelace escribió el primer algoritmo en 1843, 100 años antes de la primera computadora moderna. 🖥️"
            },
            {
                q: "¿Cuándo se creó la primera computadora?",
                a: "**ENIAC** (1945) es considerada la primera computadora electrónica de propósito general. Pesaba 30 toneladas, ocupaba 167 m² y consumía 150 kW. Hoy tu smartphone es millones de veces más potente. 📱⚡"
            },
            {
                q: "¿Quién inventó Internet?",
                a: "Internet nació de **ARPANET** (1969), creado por el Departamento de Defensa de EE.UU. El primer mensaje fue 'LO' (intentaban escribir 'LOGIN', pero el sistema crasheó). Tim Berners-Lee inventó la World Wide Web en 1989. 🌐"
            },
            {
                q: "¿Cuál fue el primer virus informático?",
                a: "**Creeper** (1971) fue el primer virus, creado como experimento. Mostraba el mensaje: 'I'M THE CREEPER: CATCH ME IF YOU CAN'. El primer antivirus, Reaper, fue creado específicamente para eliminarlo. 🦠💻"
            }
        ],
        blockchain: [
            {
                q: "¿Cómo nació Bitcoin?",
                a: "Bitcoin fue creado en 2009 por **Satoshi Nakamoto** (identidad aún desconocida). El primer bloque minado contenía el mensaje: 'Chancellor on brink of second bailout for banks', criticando el sistema financiero tradicional. 💰⛓️"
            },
            {
                q: "¿Cuál fue la primera compra con Bitcoin?",
                a: "En 2010, Laszlo Hanyecz pagó **10,000 BTC por 2 pizzas** (hoy valdrían ~$300 millones). Se celebra cada 22 de mayo como 'Bitcoin Pizza Day'. Las pizzas más caras de la historia. 🍕😱"
            },
            {
                q: "¿Qué es la blockchain más allá de cripto?",
                a: "Blockchain no es solo dinero. Se usa para: rastreo de alimentos (Walmart), certificados académicos (MIT), votación electrónica, contratos inteligentes, NFTs de arte, registros médicos y cadena de suministro. 📦🔗"
            },
            {
                q: "¿Cuánta energía consume Bitcoin?",
                a: "La red Bitcoin consume aproximadamente **150 TWh/año**, similar al consumo de Argentina completa. Sin embargo, 59% proviene de energías renovables, más que la mayoría de industrias tradicionales. ⚡🌱"
            }
        ],
        ia: [
            {
                q: "¿Cuál fue el primer modelo de IA?",
                a: "El **Perceptrón** (1958) de Frank Rosenblatt fue la primera red neuronal artificial. IBM afirmó que 'aprendería a caminar, hablar y ser consciente'. Tardamos 60 años más para lograrlo con GPT. 🧠🤖"
            },
            {
                q: "¿Cuándo venció la IA a un humano en ajedrez?",
                a: "**Deep Blue de IBM** derrotó al campeón mundial Garry Kasparov en 1997. Kasparov acusó trampa, diciendo que 'jugaba como humano'. Evaluaba 200 millones de posiciones por segundo. ♟️🏆"
            },
            {
                q: "¿Cómo impactará la IA en las empresas?",
                a: "Para 2030, la IA agregará **$15.7 trillones** a la economía global. 45% de tareas serán automatizadas. Las empresas que NO adopten IA quedarán obsoletas. No es el futuro, es el presente. 🚀💼"
            },
            {
                q: "¿Puede la IA ser creativa?",
                a: "¡Sí! La IA ya crea: arte (DALL-E), música (AIVA), guiones (ChatGPT), código (Copilot) y hasta descubre nuevos antibióticos. En 2024, una IA ganó un concurso de arte. La creatividad ya no es solo humana. 🎨🎵"
            },
            {
                q: "¿Qué es el Test de Turing?",
                a: "Creado por Alan Turing en 1950, evalúa si una máquina puede pensar. Si un humano no puede distinguir entre respuestas de IA y humano, la IA 'pasa'. GPT-4 ya lo superó en 2023. 🧪✅"
            }
        ],
        futuro: [
            {
                q: "¿Qué es la computación cuántica?",
                a: "Las computadoras cuánticas usan **qubits** en lugar de bits. Pueden estar en 0 y 1 simultáneamente (superposición). Romperán la criptografía actual, pero también curarán enfermedades y resolverán el cambio climático. ⚛️🔬"
            },
            {
                q: "¿Llegaremos a la Singularidad Tecnológica?",
                a: "Ray Kurzweil predice que para **2045** la IA superará la inteligencia humana combinada. Las máquinas se mejorarán a sí mismas exponencialmente. Algunos lo temen, otros lo esperan ansiosamente. 🌌🤯"
            },
            {
                q: "¿Qué es la Web3?",
                a: "Web3 es Internet descentralizado: tú controlas tus datos, no las empresas. Blockchain, cripto, DAOs, NFTs. De 'leer' (Web1) a 'leer-escribir' (Web2) a 'leer-escribir-poseer' (Web3). 🌐🔓"
            },
            {
                q: "¿Funcionará la fusión nuclear?",
                a: "En 2022, por primera vez se logró **fusión con ganancia neta de energía**. Es la misma reacción del Sol. Podría dar energía limpia ilimitada. Comercialmente viable para 2040. 🌞⚡"
            }
        ],
        empresas: [
            {
                q: "¿Por qué fracasan las startups?",
                a: "42% fracasa por **falta de necesidad del mercado**: construyen algo que nadie quiere. 29% por quedarse sin dinero. 23% por equipo equivocado. Solo 8% por competencia. Valida antes de construir. 📉💡"
            },
            {
                q: "¿Cuánto vale aprender a programar?",
                a: "Los desarrolladores ganan 61% más que el promedio nacional en Chile. Hay **1.4 millones de vacantes sin cubrir** globalmente. Es la habilidad más demandada del siglo XXI. Nunca es tarde para aprender. 💻💰"
            },
            {
                q: "¿Qué tecnología aprender en 2025?",
                a: "Top 5: 1) **IA/ML** (OpenAI, TensorFlow), 2) Cloud (AWS, Azure), 3) Blockchain/Web3, 4) Ciberseguridad, 5) DevOps/Kubernetes. El 70% de empresas buscan expertos en IA. 📚🚀"
            },
            {
                q: "¿Cómo la tecnología salvará al planeta?",
                a: "IA optimiza consumo energético (-15%), agricultura de precisión (50% menos agua), carne cultivada en lab (95% menos emisiones), energías renovables inteligentes, captura de CO2 con blockchain. Tech es la solución. 🌍💚"
            }
        ],
        curiosidades: [
            {
                q: "¿Por qué se llama 'bug' a los errores?",
                a: "En 1947, una **polilla real** causó un mal funcionamiento en la computadora Mark II de Harvard. Grace Hopper la pegó en su bitácora escribiendo 'First actual case of bug being found'. De ahí viene 'debugging'. 🐛📝"
            },
            {
                q: "¿Cuál es el código más costoso de la historia?",
                a: "Un **punto y coma faltante** en código de NASA (1962) hizo explotar el cohete Mariner I, costando $18.5 millones. El bug más caro: un ';' de $18.5M. Siempre revisa tu código. 🚀💥"
            },
            {
                q: "¿Cuánto vale tu tiempo en internet?",
                a: "Google gana **$300/segundo**. Facebook: $175/seg. Amazon: $638/seg. Tu atención es el producto. Si algo es gratis, TÚ eres el producto. Las redes sociales te venden. 📱💵"
            },
            {
                q: "¿Existe el código perfecto?",
                a: "**Linux** tiene >27 millones de líneas de código y <0.6 bugs por 1000 líneas. Windows 10: 50M líneas. El cerebro humano: equivalente a 3M líneas. El código perfecto no existe, pero podemos acercarnos. 🐧✨"
            },
            {
                q: "¿Cuántos datos se crean por minuto?",
                a: "Cada minuto: 231.4M emails, 500 horas de video en YouTube, 147K fotos en Instagram, 5.9M búsquedas en Google. En 2025: **463 exabytes/día**. Estamos en la era del Big Data. 📊🌊"
            }
        ]
    };

    let currentCategory = null;
    let chatHistory = [];

    function createChatbot() {
        const chatbotHTML = `
            <div id="vhecbot-container">
                <button id="vhecbot-toggle" aria-label="Abrir asistente vhecbot">
                    <svg class="bot-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="11" width="18" height="10" rx="2"/>
                        <circle cx="12" cy="5" r="2"/>
                        <path d="M12 7v4"/>
                        <line x1="8" y1="16" x2="8" y2="16"/>
                        <line x1="16" y1="16" x2="16" y2="16"/>
                    </svg>
                    <svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    <span class="notification-badge">🔥</span>
                </button>

                <div id="vhecbot-widget" class="vhecbot-hidden">
                    <div class="vhecbot-header">
                        <div class="header-content">
                            <div class="bot-avatar">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                </svg>
                            </div>
                            <div>
                                <h3>vhecbot</h3>
                                <p class="bot-status">
                                    <span class="status-dot"></span>
                                    Datos curiosos de tecnología
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="vhecbot-messages"></div>

                    <div id="vhecbot-interaction"></div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
        initializeChatbot();
    }

    function initializeChatbot() {
        const toggle = document.getElementById('vhecbot-toggle');
        const widget = document.getElementById('vhecbot-widget');

        toggle.addEventListener('click', () => {
            const isHidden = widget.classList.contains('vhecbot-hidden');
            
            if (isHidden) {
                widget.classList.remove('vhecbot-hidden');
                toggle.classList.add('active');
                if (chatHistory.length === 0) {
                    showWelcomeMessage();
                }
                const badge = toggle.querySelector('.notification-badge');
                if (badge) badge.style.display = 'none';
            } else {
                widget.classList.add('vhecbot-hidden');
                toggle.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !widget.classList.contains('vhecbot-hidden')) {
                widget.classList.add('vhecbot-hidden');
                toggle.classList.remove('active');
            }
        });
    }

    function showWelcomeMessage() {
        const messagesContainer = document.getElementById('vhecbot-messages');

        const welcomeMsg = `
            <div class="bot-message animate-in">
                <div class="message-content">
                    <p>¡Hola! 👋 Soy <strong>vhecbot</strong>, tu guía en el fascinante mundo de la tecnología.</p>
                    <p>¿Sabías que el primer programador fue una mujer en 1843? 🚀</p>
                    <p><strong>Elige una categoría para descubrir datos increíbles:</strong></p>
                </div>
            </div>
        `;

        messagesContainer.innerHTML = welcomeMsg;
        showCategories();
    }

    function showCategories() {
        const interactionContainer = document.getElementById('vhecbot-interaction');
        
        const categories = [
            { id: 'historia', icon: '📜', name: 'Historia Tech', desc: 'Los orígenes' },
            { id: 'blockchain', icon: '⛓️', name: 'Blockchain', desc: 'Cripto & Web3' },
            { id: 'ia', icon: '🤖', name: 'Inteligencia Artificial', desc: 'El futuro es ahora' },
            { id: 'futuro', icon: '🚀', name: 'Futuro', desc: 'Lo que viene' },
            { id: 'empresas', icon: '💼', name: 'Tech & Negocios', desc: 'Startups y más' },
            { id: 'curiosidades', icon: '💡', name: 'Curiosidades', desc: 'Data sorprendente' }
        ];

        const categoriesHTML = categories.map(cat => `
            <button class="category-btn" data-category="${cat.id}">
                <span class="category-icon">${cat.icon}</span>
                <div class="category-info">
                    <strong>${cat.name}</strong>
                    <small>${cat.desc}</small>
                </div>
            </button>
        `).join('');

        interactionContainer.innerHTML = `
            <div class="interaction-content">
                <div class="categories-grid">
                    ${categoriesHTML}
                </div>
            </div>
        `;

        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => selectCategory(btn.dataset.category));
        });
    }

    function selectCategory(category) {
        currentCategory = category;
        const interactionContainer = document.getElementById('vhecbot-interaction');
        const questions = techData[category];

        const questionsHTML = questions.map((item, index) => `
            <button class="question-btn" data-index="${index}">
                <span class="q-icon">❓</span>
                <span>${item.q}</span>
            </button>
        `).join('');

        interactionContainer.innerHTML = `
            <div class="interaction-content">
                <button class="back-btn" id="back-to-categories">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Volver a categorías
                </button>
                <div class="questions-list">
                    ${questionsHTML}
                </div>
            </div>
        `;

        document.getElementById('back-to-categories').addEventListener('click', showCategories);
        
        document.querySelectorAll('.question-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const index = btn.dataset.index;
                showAnswer(questions[index]);
            });
        });
    }

    function showAnswer(item) {
        const messagesContainer = document.getElementById('vhecbot-messages');
        const interactionContainer = document.getElementById('vhecbot-interaction');
        
        // Agregar pregunta del usuario al chat
        const userMsgHTML = `
            <div class="user-message animate-in">
                <div class="message-content">${item.q}</div>
            </div>
        `;
        messagesContainer.innerHTML += userMsgHTML;
        
        // Mostrar la respuesta en el área de interacción (donde estaban las preguntas)
        setTimeout(() => {
            const botMsgHTML = `
                <div class="bot-message animate-in">
                    <div class="message-content">
                        ${formatAnswer(item.a)}
                    </div>
                </div>
            `;
            messagesContainer.innerHTML += botMsgHTML;
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 300);

        // Reemplazar las preguntas con botones de acción
        setTimeout(() => {
            interactionContainer.innerHTML = `
                <div class="interaction-content answer-actions">
                    <button class="action-btn primary-action" id="more-questions">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                        Más preguntas de esta categoría
                    </button>
                    <button class="action-btn secondary-action" id="change-category">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        Cambiar de categoría
                    </button>
                </div>
            `;

            document.getElementById('more-questions').addEventListener('click', () => {
                selectCategory(currentCategory);
            });

            document.getElementById('change-category').addEventListener('click', () => {
                showCategories();
            });
        }, 800);

        chatHistory.push(item);
    }

    function formatAnswer(text) {
        let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return formatted;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createChatbot);
    } else {
        createChatbot();
    }
})();