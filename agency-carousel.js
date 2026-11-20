for (const gallery of document.querySelectorAll('.agency-slides')) {
  const slides = Array.from(gallery.children);
  if (slides.length < 2) continue;
  const controls = document.createElement('div');
  controls.className = 'slide-controls';
  const status = document.createElement('span');
  status.setAttribute('aria-live', 'polite');
  let current = 0;
  function show(index) {
    current = index;
    slides.forEach((slide, i) => { slide.hidden = i !== index; });
    status.textContent = 'Slide ' + (index + 1) + ' di ' + slides.length;
  }
  function button(label, step) {
    const element = document.createElement('button');
    element.type = 'button';
    element.textContent = label;
    element.addEventListener('click', () => show((current + step + slides.length) % slides.length));
    return element;
  }
  controls.append(button('Precedente', -1), status, button('Successiva', 1));
  gallery.after(controls);
  show(0);
}
