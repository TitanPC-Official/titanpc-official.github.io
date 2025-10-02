// Create and animate particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.floor(Math.random() * window.innerWidth);
        const posY = Math.floor(Math.random() * window.innerHeight);
        
        // Random size
        const size = Math.random() * 3;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.2;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Set styles
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    // Initialize app
    document.addEventListener('DOMContentLoaded', function() {
  createParticles();
  // Rating stars logic
  const stars = document.querySelectorAll('.star');
  let selectedRating = 0;
  stars.forEach(star => {
    star.addEventListener('mouseover', function() {
      const val = parseInt(this.getAttribute('data-value'));
      stars.forEach((s, i) => {
        s.classList.toggle('selected', i < val);
      });
    });
    star.addEventListener('mouseout', function() {
      stars.forEach((s, i) => {
        s.classList.toggle('selected', i < selectedRating);
      });
    });
    star.addEventListener('click', function() {
      const val = parseInt(this.getAttribute('data-value'));
      if (selectedRating === val) {
        selectedRating = 0;
        stars.forEach(s => s.classList.remove('selected'));
      } else {
        selectedRating = val;
        stars.forEach((s, i) => {
          s.classList.toggle('selected', i < selectedRating);
        });
      }
      document.getElementById('rating-value').value = selectedRating;
    });
  });
  // Rating form submit
  const ratingForm = document.getElementById('rating-form');
  const ratingConfirm = document.getElementById('rating-confirm');
  ratingForm?.addEventListener('submit', function(e) {
    if (selectedRating === 0) {
      e.preventDefault();
      ratingConfirm.textContent = 'Por favor selecciona una calificación.';
      ratingConfirm.style.display = 'block';
      return;
    }
    document.getElementById('rating-value').value = selectedRating;
    ratingConfirm.textContent = '¡Gracias por tu opinión!';
    ratingConfirm.style.display = 'block';
    setTimeout(() => {
      ratingConfirm.style.display = 'none';
      selectedRating = 0;
      stars.forEach(s => s.classList.remove('selected'));
    }, 2200);
  });

      // Service buttons click handler
      const serviceButtons = document.querySelectorAll('.service-btn, .gamer-btn');
      serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
          const service = this.getAttribute('data-service');
          const numero = "59893549715";
          const mensaje = `
╔══════════════════════╗
*¡Hola!*
Servicio solicitado: *${service}*
╚══════════════════════╝

Información requerida:
> Precio
> Disponibilidad
> Requisitos

--------------------------------
¡Muchas gracias!
--------------------------------`;
          const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
          window.open(url, "_blank");
        });
      });

      // Gamer carousel logic
      const gamerImages = [
        "Assets/PastaTermica.jpg",
        "Assets/Teclado.jpg",
        "Assets/ComboMouseTeclado.jpg",
        "Assets/Joystick.jpg",
      ];
      let gamerIndex = 0;
      const carouselImg = document.getElementById('carousel-img');
      const leftArrow = document.getElementById('carousel-left');
      const rightArrow = document.getElementById('carousel-right');

      function updateGamerCarousel() {
        carouselImg.src = gamerImages[gamerIndex];
      }

      if (carouselImg && leftArrow && rightArrow) {
        leftArrow.addEventListener('click', function(e) {
          e.stopPropagation();
          gamerIndex = (gamerIndex - 1 + gamerImages.length) % gamerImages.length;
          updateGamerCarousel();
        });
        rightArrow.addEventListener('click', function(e) {
          e.stopPropagation();
          gamerIndex = (gamerIndex + 1) % gamerImages.length;
          updateGamerCarousel();
        });
      }

      // Settings modal
  // Eliminado: función de abrir modal y configuración
    });
    
