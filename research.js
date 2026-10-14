document.addEventListener('DOMContentLoaded', () => {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.resource-card')];
  function filter(category, updateHash) {
    if (!buttons.some(button => button.dataset.filter === category)) category = 'all';
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    cards.forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
      if (card.hidden) card.querySelector('video')?.pause();
    });
    if (updateHash) history.replaceState(null, '', category === 'all' ? location.pathname : '#' + category);
  }
  function applyHash() {
    const hash = decodeURIComponent(location.hash.slice(1));
    const target = cards.find(card => card.id === hash);
    if (target) {
      filter(target.dataset.category, false);
      requestAnimationFrame(() => target.scrollIntoView({behavior:'instant', block:'start'}));
    } else filter(hash || 'all', false);
  }
  if (cards.length) {
    buttons.forEach(button => button.addEventListener('click', () => filter(button.dataset.filter, true)));
    applyHash();
    window.addEventListener('hashchange', applyHash);
  }
  // Keep simultaneous media playback from overwhelming the page or connection.
  const videos = [...document.querySelectorAll('video')];
  videos.forEach(video => video.addEventListener('play', () => {
    videos.forEach(other => { if (other !== video) other.pause(); });
  }));
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-lang]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    });
  });
});
