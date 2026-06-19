(function(){
  const STORAGE_KEY = 'edm-theme';
  const root = document.documentElement;

  function getInitialTheme(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  }

  function applyTheme(theme){
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      const label = btn.querySelector('.theme-label');
      const dot = btn.querySelector('.theme-dot');
      if(label) label.textContent = theme === 'light' ? 'Light' : 'Ocean';
      if(dot) dot.setAttribute('aria-hidden','true');
      btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      btn.title = theme === 'light' ? 'Переключить на Ocean' : 'Переключить на Light';
    });
  }

  root.setAttribute('data-theme', getInitialTheme());

  document.addEventListener('DOMContentLoaded',()=>{
    const burger = document.querySelector('.burger');
    const links = document.querySelector('.links');
    if(burger && links){
      burger.addEventListener('click',()=>{
        const open = links.classList.toggle('open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    document.querySelectorAll('.navin').forEach(navin => {
      if(navin.querySelector('.theme-toggle')) return;
      const btn = document.createElement('button');
      btn.className = 'theme-toggle';
      btn.type = 'button';
      btn.setAttribute('aria-label','Переключить тему сайта');
      btn.innerHTML = '<span class="theme-dot"></span><span class="theme-label">Ocean</span>';
      const burgerEl = navin.querySelector('.burger');
      navin.insertBefore(btn, burgerEl || navin.querySelector('.links') || null);
    });

    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click',()=>{
        const current = root.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'light' ? 'dark' : 'light');
      });
    });
    applyTheme(root.getAttribute('data-theme') || 'dark');

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
