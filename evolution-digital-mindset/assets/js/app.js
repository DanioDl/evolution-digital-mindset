document.addEventListener('DOMContentLoaded',()=>{
 const burger=document.querySelector('.burger'),links=document.querySelector('.links');
 if(burger&&links) burger.addEventListener('click',()=>links.classList.toggle('open'));
 const io=[...document.querySelectorAll('.io')];
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.12});
 io.forEach(el=>obs.observe(el));
 document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{const id=btn.dataset.copy;const el=document.getElementById(id);if(!el)return;await navigator.clipboard.writeText(el.innerText);const t=btn.innerText;btn.innerText='Скопировано';setTimeout(()=>btn.innerText=t,1400)}));
});
