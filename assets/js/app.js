(function(){
  const STORAGE_KEY = 'edm-theme';
  const root = document.documentElement;

  function getInitialTheme(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  }

  function applyTheme(theme){
    const next = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      const label = btn.querySelector('.theme-label');
      const dot = btn.querySelector('.theme-dot');
      if(label) label.textContent = next === 'light' ? 'Light' : 'Ocean';
      if(dot) dot.setAttribute('aria-hidden','true');
      btn.setAttribute('aria-pressed', next === 'light' ? 'true' : 'false');
      btn.title = next === 'light' ? 'Переключить на Ocean' : 'Переключить на Light';
    });
  }

  function ensureThemeToggle(){
    const navs = document.querySelectorAll('.navin, nav.nav');
    navs.forEach(nav => {
      if(nav.querySelector('.theme-toggle')) return;
      const btn = document.createElement('button');
      btn.className = 'theme-toggle';
      btn.type = 'button';
      btn.setAttribute('aria-label','Переключить тему сайта');
      btn.innerHTML = '<span class="theme-dot"></span><span class="theme-label">Ocean</span>';
      const burger = nav.querySelector('.burger');
      const links = nav.querySelector('.links');
      const back = nav.querySelector('.back-link');
      if(links){
        links.insertAdjacentElement('afterend', btn);
      }else{
        nav.insertBefore(btn, back || burger || null);
      }
    });
  }

  root.setAttribute('data-theme', getInitialTheme());

  document.addEventListener('DOMContentLoaded',()=>{
    ensureThemeToggle();

    document.querySelectorAll('.theme-toggle').forEach(btn => {
      if(btn.dataset.themeReady === '1') return;
      btn.dataset.themeReady = '1';
      btn.addEventListener('click',()=>{
        const current = root.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'light' ? 'dark' : 'light');
      });
    });
    applyTheme(root.getAttribute('data-theme') || 'dark');

    const burger = document.querySelector('.burger');
    const links = document.querySelector('.links');
    if(burger && links){
      burger.addEventListener('click',()=>{
        const open = links.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    const io=[...document.querySelectorAll('.io')];
    if('IntersectionObserver' in window){
      const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.12});
      io.forEach(el=>obs.observe(el));
    }else{io.forEach(el=>el.classList.add('show'))}

    document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{
      const id=btn.dataset.copy;
      const el=document.getElementById(id);
      if(!el) return;
      try{
        await navigator.clipboard.writeText(el.innerText);
        const t=btn.innerText;
        btn.innerText='Скопировано';
        btn.classList.add('done');
        setTimeout(()=>{btn.innerText=t;btn.classList.remove('done')},1400);
      }catch(e){
        btn.innerText='Не скопировано';
        setTimeout(()=>btn.innerText='Скопировать',1400);
      }
    }));
  });
})();
