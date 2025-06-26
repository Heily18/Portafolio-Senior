// Función para scroll suave a secciones
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Animación de menú activo al hacer scroll
const secciones = document.querySelectorAll('main .section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  secciones.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Animación de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Animación de letras al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  // Reiniciar animaciones de letras
  const letters = document.querySelectorAll('.letter');
  letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Animación de Hello Kitty avatar
  const avatars = document.querySelectorAll('.hello-kitty-avatar');
  avatars.forEach((avatar, index) => {
    avatar.style.animationDelay = `${index * 0.5}s`;
  });
});

// Efectos interactivos para el avatar de Hello Kitty
document.querySelectorAll('.avatar-image').forEach(avatar => {
  avatar.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.2) rotate(10deg)';
  });
  
  avatar.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
  });
  
  avatar.addEventListener('click', function() {
    // Efecto de confeti al hacer clic
    createConfetti();
  });
});

// Función para crear efecto de confeti
function createConfetti() {
  const colors = ['#ffb6d5', '#cce7ff', '#ffe4ec', '#ff9ecd'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    
    document.body.appendChild(confetti);
    
    const animation = confetti.animate([
      { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
      { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: Math.random() * 3000 + 2000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    animation.onfinish = () => {
      document.body.removeChild(confetti);
    };
  }
}

// Animación de botón enviar
const form = document.getElementById('contacto-form');
if(form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const button = form.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = '¡Enviado! 🎉';
    button.style.background = '#4CAF50';
    
    // Crear confeti al enviar
    createConfetti();
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
      form.reset();
    }, 3000);
  });
}

// Efectos hover para las tarjetas de "Sobre mí"
document.querySelectorAll('.about-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-12px) scale(1.03)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Animación de iconos en las tarjetas
document.querySelectorAll('.card-icon').forEach(icon => {
  icon.addEventListener('mouseenter', function() {
    this.style.animation = 'iconBounce 0.5s ease-in-out';
  });
  
  icon.addEventListener('animationend', function() {
    this.style.animation = 'iconBounce 2s ease-in-out infinite';
  });
});

// Efecto de escritura para el título principal
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Aplicar efecto de escritura al título si se desea
// typeWriter(document.querySelector('.animated-title'), '¡Hola! Soy Heily 🎀');

// Animación de entrada para las secciones
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  sectionObserver.observe(section);
});

// Efecto de partículas flotantes
function createFloatingParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.style.position = 'fixed';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.pointerEvents = 'none';
  particlesContainer.style.zIndex = '1';
  
  document.body.appendChild(particlesContainer);
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.backgroundColor = '#ffb6d5';
    particle.style.borderRadius = '50%';
    particle.style.opacity = '0.6';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
    
    particlesContainer.appendChild(particle);
  }
}

// Agregar CSS para la animación de partículas flotantes
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Inicializar partículas flotantes
// createFloatingParticles(); // Descomenta si quieres el efecto de partículas

// Efecto de brillo en hover para elementos interactivos
document.querySelectorAll('button, .cta-button, .proyecto, .about-card').forEach(element => {
  element.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 0 20px rgba(255, 182, 213, 0.6)';
  });
  
  element.addEventListener('mouseleave', function() {
    this.style.boxShadow = '';
  });
});

// Chat Widget de IA
class ChatWidget {
  constructor() {
    this.chatButton = document.getElementById('chatButton');
    this.chatWindow = document.getElementById('chatWindow');
    this.closeChat = document.getElementById('closeChat');
    this.chatInput = document.getElementById('chatInput');
    this.sendButton = document.getElementById('sendButton');
    this.chatMessages = document.getElementById('chatMessages');
    this.isOpen = false;
    this.isTyping = false;
    
    this.init();
  }
  
  init() {
    // Event listeners
    this.chatButton.addEventListener('click', () => this.toggleChat());
    this.closeChat.addEventListener('click', () => this.closeChatWindow());
    this.sendButton.addEventListener('click', () => this.sendMessage());
    this.chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
    
    // Auto-open chat after 3 seconds
    setTimeout(() => {
      if (!this.isOpen) {
        this.showWelcomeMessage();
      }
    }, 3000);
  }
  
  toggleChat() {
    if (this.isOpen) {
      this.closeChatWindow();
    } else {
      this.openChatWindow();
    }
  }
  
  openChatWindow() {
    this.chatWindow.classList.add('active');
    this.isOpen = true;
    this.chatInput.focus();
    
    // Animación de entrada
    this.chatWindow.style.animation = 'chatWindowSlide 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Crear confeti al abrir
    createConfetti();
  }
  
  closeChatWindow() {
    this.chatWindow.classList.remove('active');
    this.isOpen = false;
  }
  
  showWelcomeMessage() {
    const welcomeMessages = [
      "¡Hola! Soy tu asistente IA personal. ¿En qué puedo ayudarte hoy? 💕",
      "¡Bienvenida! Estoy aquí para ayudarte con cualquier pregunta sobre Heily y su portafolio! 🌸",
      "¡Hola! ¿Te gustaría saber más sobre los proyectos de Heily o sus habilidades? ✨"
    ];
    
    const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
    this.addBotMessage(randomMessage);
  }
  
  sendMessage() {
    const message = this.chatInput.value.trim();
    if (!message || this.isTyping) return;
    
    // Agregar mensaje del usuario
    this.addUserMessage(message);
    this.chatInput.value = '';
    
    // Mostrar indicador de escritura
    this.showTypingIndicator();
    
    // Simular respuesta de IA
    setTimeout(() => {
      this.hideTypingIndicator();
      this.generateAIResponse(message);
    }, 1500 + Math.random() * 1000);
  }
  
  addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
      <div class="message-avatar">👤</div>
      <div class="message-content">
        <p>${this.escapeHtml(text)}</p>
        <span class="message-time">${this.getCurrentTime()}</span>
      </div>
    `;
    
    this.chatMessages.appendChild(messageDiv);
    this.scrollToBottom();
  }
  
  addBotMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.innerHTML = `
      <div class="message-avatar">🌸</div>
      <div class="message-content">
        <p>${this.escapeHtml(text)}</p>
        <span class="message-time">${this.getCurrentTime()}</span>
      </div>
    `;
    
    this.chatMessages.appendChild(messageDiv);
    this.scrollToBottom();
  }
  
  showTypingIndicator() {
    this.isTyping = true;
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator-message';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
      <div class="message-avatar">🌸</div>
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    
    this.chatMessages.appendChild(typingDiv);
    this.scrollToBottom();
  }
  
  hideTypingIndicator() {
    this.isTyping = false;
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }
  
  generateAIResponse(userMessage) {
    const responses = this.getAIResponses(userMessage.toLowerCase());
    const response = responses[Math.floor(Math.random() * responses.length)];
    this.addBotMessage(response);
  }
  
  getAIResponses(userMessage) {
    const responses = {
      default: [
        "¡Qué interesante! Me encanta tu curiosidad! 🌸",
        "¡Excelente pregunta! Déjame pensar en eso... ✨",
        "¡Gracias por preguntar! Te ayudo con eso 💕",
        "¡Oh, qué pregunta tan genial! 🌟"
      ],
      hola: [
        "¡Hola! ¡Qué gusto verte por aquí! 🌸",
        "¡Hola! ¿Cómo estás hoy? ¡Espero que muy bien! 💕",
        "¡Hola! ¡Bienvenida al portafolio de Heily! ✨"
      ],
      heily: [
        "¡Heily es una desarrolladora increíble! Le encanta crear diseños únicos inspirados en Hello Kitty 🌸",
        "Heily es muy creativa y apasionada por el desarrollo web y el diseño UI/UX! ✨",
        "¡Heily tiene un talento especial para combinar tecnología con belleza! 💕"
      ],
      proyecto: [
        "¡Los proyectos de Heily son súper creativos! Cada uno tiene su toque especial 🌸",
        "Heily trabaja en proyectos que combinan funcionalidad con diseño hermoso ✨",
        "¡Los proyectos de Heily siempre tienen ese toque Hello Kitty que los hace únicos! 💕"
      ],
      hello: [
        "¡Hello Kitty es la inspiración de Heily! 🎀",
        "¡Hello Kitty y Heily son las mejores amigas! 🌸",
        "¡Hello Kitty inspira todos los diseños de Heily! ✨"
      ],
      ayuda: [
        "¡Por supuesto! Estoy aquí para ayudarte con cualquier pregunta sobre Heily y su trabajo 🌸",
        "¡Me encanta ayudar! ¿Qué te gustaría saber? ✨",
        "¡Estoy aquí para ti! ¿En qué puedo ayudarte? 💕"
      ],
      contacto: [
        "¡Puedes contactar a Heily a través del formulario de contacto en su portafolio! 📧",
        "¡Heily estará feliz de escuchar de ti! Usa la sección de contacto 🌸",
        "¡No dudes en contactar a Heily! Le encanta conocer gente nueva ✨"
      ],
      habilidades: [
        "¡Heily tiene muchas habilidades increíbles! Desarrollo web, diseño UI/UX, animaciones y mucha creatividad 🌟",
        "Heily es experta en crear experiencias digitales hermosas y funcionales ✨",
        "¡Las habilidades de Heily incluyen todo lo necesario para crear proyectos increíbles! 💕"
      ]
    };
    
    // Buscar respuesta específica
    for (const [key, responseArray] of Object.entries(responses)) {
      if (userMessage.includes(key)) {
        return responseArray;
      }
    }
    
    return responses.default;
  }
  
  scrollToBottom() {
    setTimeout(() => {
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }, 100);
  }
  
  getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('es-ES', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
  
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Inicializar el chat widget cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // ... existing code ...
  
  // Inicializar chat widget
  new ChatWidget();
}); 