document.addEventListener('DOMContentLoaded', () => {
  const animationLabels = {en: ['Pause animation', 'Play animation'], ja: ['アニメーションを停止', 'アニメーションを再生'], zh: ['暂停动画', '播放动画']};
  Object.entries(animationLabels).forEach(([lang, labels]) => {
    Object.assign(translations[lang], {animation_pause: labels[0], animation_play: labels[1]});
  });
  document.querySelectorAll('.demo-figure > img[src$=".gif"]').forEach(img => {
    const animated = img.getAttribute('src');
    const still = animated.replace(/\.gif$/, '.jpg');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'animation-control';
    let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function update() {
      img.src = paused ? still : animated;
      button.dataset.i18n = paused ? 'animation_play' : 'animation_pause';
      button.textContent = translations[document.documentElement.lang || 'en'][button.dataset.i18n];
    }
    button.addEventListener('click', () => { paused = !paused; update(); });
    img.parentElement.append(button);
    update();
  });
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
