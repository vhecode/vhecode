// ===== FORMULARIO DE CONTACTO PROFESIONAL CON VALIDACIONES =====
//console.log('✓ Sistema de contacto inicializado');

const WHATSAPP_NUMBER = '56995984952';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    
    // Campos del formulario
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const companyField = document.getElementById('company');
    const serviceField = document.getElementById('service');
    const messageField = document.getElementById('message');
    const budgetField = document.getElementById('budget');
    
    // Mensajes de error
    const errors = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        company: document.getElementById('companyError'),
        service: document.getElementById('serviceError'),
        message: document.getElementById('messageError'),
        budget: document.getElementById('budgetError')
    };
    
    // ===== MÁSCARA PARA TELÉFONO CHILENO =====
    phoneField.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        // Asegurar que comience con 56 si no tiene código
        if (value.length > 0 && !value.startsWith('56')) {
            if (value.startsWith('9')) {
                value = '56' + value;
            }
        }
        
        // Formatear: +56 9 XXXX XXXX
        let formatted = '';
        if (value.length > 0) {
            formatted = '+56';
            if (value.length > 2) {
                formatted += ' ' + value.substring(2, 3);
            }
            if (value.length > 3) {
                formatted += ' ' + value.substring(3, 7);
            }
            if (value.length > 7) {
                formatted += ' ' + value.substring(7, 11);
            }
        }
        
        e.target.value = formatted;
        
        // Validar y verificar formulario
        validatePhone();
        checkFormValidity();
    });
    
    // ===== VALIDACIONES =====
    function validateName() {
        const value = nameField.value.trim();
        if (value.length < 3) {
            showError('name', 'El nombre debe tener al menos 3 caracteres');
            return false;
        }
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
            showError('name', 'El nombre solo puede contener letras');
            return false;
        }
        hideError('name');
        return true;
    }
    
    function validateEmail() {
        const value = emailField.value.trim();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!emailRegex.test(value)) {
            showError('email', 'Ingresa un email válido (ejemplo@empresa.cl)');
            return false;
        }
        hideError('email');
        return true;
    }
    
    function validatePhone() {
        const value = phoneField.value.replace(/\D/g, '');
        
        // Debe tener 11 dígitos: 56 + 9 + 8 dígitos
        if (value.length !== 11) {
            showError('phone', 'Formato: +56 9 XXXX XXXX (11 dígitos)');
            return false;
        }
        
        if (!value.startsWith('569')) {
            showError('phone', 'Debe comenzar con +56 9');
            return false;
        }
        
        hideError('phone');
        return true;
    }
    
    function validateCompany() {
        const value = companyField.value.trim();
        if (value.length < 2) {
            showError('company', 'Ingresa el nombre de tu empresa');
            return false;
        }
        hideError('company');
        return true;
    }
    
    function validateService() {
        if (!serviceField.value) {
            showError('service', 'Selecciona un servicio');
            return false;
        }
        hideError('service');
        return true;
    }
    
    function validateMessage() {
        const value = messageField.value.trim();
        if (value.length < 20) {
            showError('message', `Describe tu proyecto (mínimo 20 caracteres, tienes ${value.length})`);
            return false;
        }
        hideError('message');
        return true;
    }
    
    function validateBudget() {
        if (!budgetField.value) {
            showError('budget', 'Selecciona un rango de presupuesto');
            return false;
        }
        hideError('budget');
        return true;
    }
    
    function showError(field, message) {
        const errorElement = errors[field];
        const inputElement = document.getElementById(field);
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        inputElement.classList.add('input-error');
    }
    
    function hideError(field) {
        const errorElement = errors[field];
        const inputElement = document.getElementById(field);
        
        errorElement.style.display = 'none';
        inputElement.classList.remove('input-error');
    }
    
    // ===== VERIFICAR SI EL FORMULARIO ES VÁLIDO =====
    function checkFormValidity() {
        const isNameValid = nameField.value.trim().length >= 3 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nameField.value.trim());
        const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailField.value.trim());
        const phoneValue = phoneField.value.replace(/\D/g, '');
        const isPhoneValid = phoneValue.length === 11 && phoneValue.startsWith('569');
        const isCompanyValid = companyField.value.trim().length >= 2;
        const isServiceValid = serviceField.value !== '';
        const isMessageValid = messageField.value.trim().length >= 20;
        const isBudgetValid = budgetField.value !== '';
        
        // Si todos los campos son válidos, ocultar mensaje de error general
        if (isNameValid && isEmailValid && isPhoneValid && isCompanyValid && 
            isServiceValid && isMessageValid && isBudgetValid) {
            hideFormMessage();
        }
    }
    
    function hideFormMessage() {
        if (formMessage.classList.contains('error')) {
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';
        }
    }
    
    // ===== VALIDACIÓN EN TIEMPO REAL CON VERIFICACIÓN =====
    nameField.addEventListener('blur', function() {
        validateName();
        checkFormValidity();
    });
    
    nameField.addEventListener('input', function() {
        if (nameField.value.trim().length >= 3) {
            hideError('name');
            checkFormValidity();
        }
    });
    
    emailField.addEventListener('blur', function() {
        validateEmail();
        checkFormValidity();
    });
    
    emailField.addEventListener('input', function() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailRegex.test(emailField.value.trim())) {
            hideError('email');
            checkFormValidity();
        }
    });
    
    phoneField.addEventListener('blur', function() {
        validatePhone();
        checkFormValidity();
    });
    
    companyField.addEventListener('blur', function() {
        validateCompany();
        checkFormValidity();
    });
    
    companyField.addEventListener('input', function() {
        if (companyField.value.trim().length >= 2) {
            hideError('company');
            checkFormValidity();
        }
    });
    
    serviceField.addEventListener('change', function() {
        validateService();
        checkFormValidity();
    });
    
    messageField.addEventListener('blur', function() {
        validateMessage();
        checkFormValidity();
    });
    
    messageField.addEventListener('input', function() {
        if (messageField.value.trim().length >= 20) {
            hideError('message');
            checkFormValidity();
        }
    });
    
    budgetField.addEventListener('change', function() {
        validateBudget();
        checkFormValidity();
    });
    
    // ===== ENVÍO DEL FORMULARIO =====
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar todos los campos
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isCompanyValid = validateCompany();
        const isServiceValid = validateService();
        const isMessageValid = validateMessage();
        const isBudgetValid = validateBudget();
        
        if (!isNameValid || !isEmailValid || !isPhoneValid || !isCompanyValid || 
            !isServiceValid || !isMessageValid || !isBudgetValid) {
            
            formMessage.className = 'form-message error';
            formMessage.innerHTML = '⚠️ Por favor corrige los errores antes de enviar';
            formMessage.style.display = 'block';
            
            // Scroll al primer error
            const firstError = form.querySelector('.input-error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            return;
        }
        
        // Deshabilitar botón
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-text">Enviando...</span>';
        
        // Obtener datos
        const formData = {
            name: nameField.value.trim(),
            email: emailField.value.trim(),
            phone: phoneField.value.trim(),
            company: companyField.value.trim(),
            service: serviceField.options[serviceField.selectedIndex].text,
            message: messageField.value.trim(),
            budget: budgetField.options[budgetField.selectedIndex].text
        };
        
        // Construir mensaje para WhatsApp
        const whatsappMessage = `
🚀 *NUEVA CONSULTA - VHECODE.CL*

👤 *DATOS DEL CLIENTE*
━━━━━━━━━━━━━━━━━━━━
▫️ *Nombre:* ${formData.name}
▫️ *Email:* ${formData.email}
▫️ *Teléfono:* ${formData.phone}
▫️ *Empresa:* ${formData.company}

💼 *INFORMACIÓN DEL PROYECTO*
━━━━━━━━━━━━━━━━━━━━
▫️ *Servicio:* ${formData.service}
▫️ *Presupuesto:* ${formData.budget}

📝 *DESCRIPCIÓN*
━━━━━━━━━━━━━━━━━━━━
${formData.message}

━━━━━━━━━━━━━━━━━━━━
📅 ${new Date().toLocaleDateString('es-CL', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})}
🕐 ${new Date().toLocaleTimeString('es-CL')}
        `.trim();
        
        // Enviar a WhatsApp
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        // Abrir WhatsApp
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
            
            // Mostrar mensaje de éxito
            formMessage.className = 'form-message success';
            formMessage.innerHTML = `
                ✅ ¡Perfecto! Abriendo WhatsApp...
                <br><br>
                <small>Si no se abrió automáticamente:</small>
                <br>
                <a href="${whatsappURL}" target="_blank" class="btn btn-primary" style="margin-top: 12px; padding: 10px 24px; font-size: 0.9rem;">
                    Abrir WhatsApp manualmente
                </a>
            `;
            formMessage.style.display = 'block';
            
            // Limpiar formulario
            form.reset();
            
            // Reactivar botón
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <span class="btn-text">Enviar a WhatsApp</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
            `;
            
            // Scroll al mensaje de éxito
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
        }, 500);
    });
    
   // console.log('✓ Sistema de validación y envío configurado');
});







// ===== BOTÓN FLOTANTE DE WHATSAPP =====
//window.addEventListener('load', function() {
  //  const whatsappFloat = document.createElement('a');
  //  whatsappFloat.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola vhecode, me gustaría consultar sobre sus servicios de desarrollo de software.')}`;
   // whatsappFloat.target = '_blank';
  //  whatsappFloat.className = 'whatsapp-float';
  //  whatsappFloat.setAttribute('aria-label', 'Contactar por WhatsApp');
   // whatsappFloat.title = 'Contactar por WhatsApp';
  //  whatsappFloat.innerHTML = `
   //     <svg viewBox="0 0 24 24" fill="currentColor">
   //         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  //      </svg>
 //   `;
 //   document.body.appendChild(whatsappFloat);
//});