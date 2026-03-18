const AVAILABLE = true; // set to false when not available for new projects

const credDot = document.querySelector('.cred-dot');
const credFooterText = document.querySelector('.cred-footer-text');
if (credDot && credFooterText) {
   credDot.classList.add(AVAILABLE ? 'cred-dot--available' : 'cred-dot--unavailable');
   credFooterText.textContent = AVAILABLE ? 'Available for New Projects' : 'Fully Booked Right Now';
}

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
const submitBtn = document.getElementById('formSubmit');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const businessInput = document.getElementById('business');
const interestInput = document.getElementById('interest');
const messageInput = document.getElementById('message');

function isValidEmail(val) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
}

function setWarning(fieldId, show) {
   const input = document.getElementById(fieldId);
   const group = input.closest('.form-group');
   group.classList.toggle('has-warning', show);
}

function validateForm() {
   const messageRequired = interestInput.value === 'explain-below';

   const checks = {
      name: nameInput.value.trim() !== '',
      email: isValidEmail(emailInput.value),
      business: businessInput.value.trim() !== '',
      interest: interestInput.value !== '',
      message: !messageRequired || messageInput.value.trim() !== ''
   };

   Object.entries(checks).forEach(([id, valid]) => setWarning(id, !valid));

   return Object.values(checks).every(Boolean);
}

// Clear warning on a field as soon as the user corrects it
function attachClearListeners() {
   [nameInput, businessInput].forEach(input => {
      input.addEventListener('input', () => {
         if (input.value.trim() !== '') setWarning(input.id, false);
      });
   });

   emailInput.addEventListener('input', () => {
      if (isValidEmail(emailInput.value)) setWarning('email', false);
   });

   interestInput.addEventListener('change', () => {
      if (interestInput.value !== '') setWarning('interest', false);
      if (interestInput.value !== 'explain-below') setWarning('message', false);
   });

   messageInput.addEventListener('input', () => {
      if (interestInput.value === 'explain-below' && messageInput.value.trim() !== '') {
         setWarning('message', false);
      }
   });
}

attachClearListeners();

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

document.querySelectorAll('[onclick="openContactModal()"]').forEach(btn => {
   btn.removeAttribute('onclick');
   btn.addEventListener('click', openContactModal);
});

modal.addEventListener('click', (e) => {
   if (e.target === modal) closeContactModal();
});

document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && modal.classList.contains('open')) closeContactModal();
});

form.addEventListener('submit', async (e) => {
   e.preventDefault();

   if (!validateForm()) return;

   const data = new FormData(form);
   try {
      const res = await fetch(form.action, {
         method: 'POST',
         body: data,
         headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
         form.reset();
         document.querySelectorAll('.form-group.has-warning').forEach(g => g.classList.remove('has-warning'));
         document.getElementById('formContent').style.display = 'none';
         formSuccess.style.display = 'block';
      } else {
         alert('Something went wrong. Please try again or email contact@newrealityinteractive.com directly.');
      }
   } catch {
      alert('Something went wrong. Please try again or email contact@newrealityinteractive.com directly.');
   }
});