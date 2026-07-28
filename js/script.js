document.addEventListener('DOMContentLoaded', () => {
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.4s ease';

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 80);

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
  });

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const emailBtn = document.querySelector('a[href^="mailto:"]');
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      const email = 'marcosgbonici@gmail.com';
      navigator.clipboard.writeText(email);
      
      const originalText = emailBtn.textContent;
      emailBtn.textContent = 'E-mail copiado!';
      
      setTimeout(() => {
        emailBtn.textContent = originalText;
      }, 2000);
    });
  }
});