(function(){
  const saved = localStorage.getItem('edm-theme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = saved || (prefersLight ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', initial);
})();

document.addEventListener('DOMContentLoaded',()=>{
 const burger=document.querySelector('.burger'),links=document.querySelector('.links');
 if(burger&&links) burger.addEventListener('click',()=>links.classList.toggle('open'));

 const navin=document.querySelector('.navin');
 if(navin && !document.querySelector('.theme-toggle')){
   const btn=document.createElement('button');
   btn.className='theme-toggle';
   btn.type='button';
   btn.setAttribute('aria-label','Переключить тему сайта');
   btn.innerHTML='<span class="theme-dot"></span><span class="theme-label"></span>';
   const setLabel=()=>{
     const theme=document.documentElement.getAttribute('data-theme') || 'dark';
     btn.querySelector('.theme-label').textContent = theme === 'light' ? 'Light' : 'Ocean';
     btn.title = theme === 'light' ? 'Включить тёмную тему Ocean' : 'Включить светлую тему Light';
   };
   btn.addEventListener('click',()=>{
     const current=document.documentElement.getAttribute('data-theme') || 'dark';
     const next=current==='light'?'dark':'light';
     document.documentElement.setAttribute('data-theme',next);
     localStorage.setItem('edm-theme',next);
     setLabel();
   });
   const burgerEl=navin.querySelector('.burger');
   navin.insertBefore(btn, burgerEl || null);
   setLabel();
 }

 const io=[...document.querySelectorAll('.io')];
 if('IntersectionObserver' in window){
   const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.12});
   io.forEach(el=>obs.observe(el));
 }else{io.forEach(el=>el.classList.add('show'))}

 document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{const id=btn.dataset.copy;const el=document.getElementById(id);if(!el)return;await navigator.clipboard.writeText(el.innerText);const t=btn.innerText;btn.innerText='Скопировано';setTimeout(()=>btn.innerText=t,1400)}));
});
