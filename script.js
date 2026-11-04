(() => {
  const header = document.querySelector('.brand-header');
  const brand = document.querySelector('.brand');
  let frame = 0;
  function refreshLogo() {
    frame = 0;
    const progress = Math.min(window.scrollY / 370, 1);
    const isMobile = window.matchMedia('(max-width:750px)').matches;
    header.style.height = `${(isMobile ? 210 : 150) - progress * (isMobile ? 124 : 62)}px`;
    brand.style.setProperty('--logo-scale', String(1 - progress * (isMobile ? .58 : .43)));
  }
  window.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(refreshLogo); }, {passive:true});
  window.addEventListener('resize', refreshLogo);
  refreshLogo();
  document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.firstChild.textContent = expanded ? 'Ver mais ' : 'Ver menos ';
      document.getElementById(button.getAttribute('aria-controls')).hidden = expanded;
    });
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
