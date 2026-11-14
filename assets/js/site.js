// Mobile menu
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

// Footer year
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// Contact form: compose an email (no data is sent to or stored by this site)
const form = document.getElementById('cform');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const v = n => (form.elements[n].value || '').trim();
    if (!v('name')) { form.elements.name.focus(); return; }
    const subject = `${v('interest')}: ${v('company') || v('name')}`;
    const body = [
      `Name: ${v('name')}`,
      `Company: ${v('company')}`,
      `Role: ${v('role')}`,
      `Interested in: ${v('interest')}`,
      '',
      v('message')
    ].join('\n');
    window.location.href = `mailto:mark@CreativeContactSolutionsLLC.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
