(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const nb=$('#navbtn'),nav=$('#nav');
if(nb)nb.addEventListener('click',()=>nb.setAttribute('aria-expanded',nav.classList.toggle('open')));
const h=$('.hdr'),onS=()=>h.classList.toggle('sc',scrollY>8);onS();addEventListener('scroll',onS,{passive:true});
if('IntersectionObserver' in window&&!rm){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});$$('.rv').forEach(e=>io.observe(e))}else $$('.rv').forEach(e=>e.classList.add('in'));
$$('.ba').forEach(b=>{const r=$('input',b),set=()=>b.style.setProperty('--p',r.value+'%');r.addEventListener('input',set);set();
 if(b.dataset.nudge!==undefined&&!rm){let stop=false;const end=()=>{stop=true};['pointerdown','keydown'].forEach(t=>b.addEventListener(t,end,{once:true}));
  setTimeout(()=>{const t0=performance.now();(function f(t){if(stop)return;const k=Math.min((t-t0)/1600,1);r.value=50+14*Math.sin(k*Math.PI*2);set();if(k<1)requestAnimationFrame(f);else{r.value=50;set()}})(t0)},1200)}});
const fl=$$('.filters button'),gl=$$('.gal button');
fl.forEach(b=>b.addEventListener('click',()=>{fl.forEach(x=>x.setAttribute('aria-pressed',x===b));const c=b.dataset.f;gl.forEach(g=>g.hidden=!(c==='all'||g.dataset.cat.split(' ').includes(c)))}));
const lb=$('#lb');if(lb){const li=$('img',lb);gl.forEach(g=>g.addEventListener('click',()=>{li.src=g.dataset.full;li.alt=g.dataset.alt;lb.showModal()}));
 lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('x'))lb.close()})}
const f=$('#quote');if(f){const ok=$('#ok'),ph='3364565544';
 const bad=(el,m)=>{el.setAttribute('aria-invalid','true');$('#'+el.id+'-e').textContent=m};const good=el=>{el.removeAttribute('aria-invalid');$('#'+el.id+'-e').textContent=''};
 f.addEventListener('submit',e=>{e.preventDefault();let v=true;const n=$('#q-name'),p=$('#q-phone'),s=$('#q-svc');
  [n,p,s].forEach(good);
  if(n.value.trim().length<2){bad(n,'Please enter your name.');v=false}
  if(p.value.replace(/\D/g,'').replace(/^1/,'').length!==10){bad(p,'Enter a 10-digit phone number.');v=false}
  if(!s.value){bad(s,'Choose what you need removed.');v=false}
  if(!v){const first=$('[aria-invalid=true]',f);first&&first.focus();return}
  const body=`Hi, I'd like a quote.\nName: ${n.value.trim()}\nPhone: ${p.value.trim()}\nService: ${s.value}\nArea: ${$('#q-area').value.trim()||'-'}\nDetails: ${$('#q-msg').value.trim()||'-'}`;
  $('#ok-btn').href='sms:'+ph+'?&body='+encodeURIComponent(body);$('#ok-copy').value=body;
  ok.classList.add('show');f.querySelector('button[type=submit]').hidden=true;ok.scrollIntoView({behavior:rm?'auto':'smooth',block:'center'})})}
$$('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
})();
