const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
   document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
} else {
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
         if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
         }
      });
   }, { threshold: 0.1 });
   document.querySelectorAll('.reveal').forEach(r => observer.observe(r));
}

// Modal
const modal = document.getElementById('contactModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('modalClose');
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function openContactModal() {
   modal.classList.add('open');
   closeBtn.focus();
}

function closeContactModal() {
   modal.classList.remove('open');
   document.getElementById('formContent').style.display = '';
   formSuccess.style.display = 'none';
}

openBtn.addEventListener('click', openContactModal);
closeBtn.addEventListener('click', closeContactModal);

modal.addEventListener('click', (e) => {
   if (e.target === modal) closeContactModal();
});

document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && modal.classList.contains('open')) closeContactModal();
});

form.addEventListener('submit', async (e) => {
   e.preventDefault();
   const data = new FormData(form);
   try {
      const res = await fetch(form.action, {
         method: 'POST',
         body: data,
         headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
         form.reset();
         document.getElementById('formContent').style.display = 'none';
         formSuccess.style.display = 'block';
      } else {
         alert('Something went wrong. Please try again or email contact@newrealityinteractive.com directly.');
      }
   } catch {
      alert('Something went wrong. Please try again or email contact@newrealityinteractive.com directly.');
   }
});