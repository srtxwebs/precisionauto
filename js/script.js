(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

// Nav, progress, back-to-top, parallax
const nav=$('#nav'),prog=$('#progress'),top=$('#totop'),par=$('#parallax'),heroImg=$('#heroImg');
let ticking=false;
function onScroll(){
  const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  nav.classList.toggle('scrolled',y>10);
  prog.style.transform=`scaleX(${h>0?y/h:0})`;
  top.classList.toggle('show',y>700);
  if(!reduce){
    heroImg.style.transform=`translateY(${Math.min(y,700)*.25}px)`;
    const r=par.parentElement.getBoundingClientRect();
    if(r.bottom>0&&r.top<innerHeight){const p=(r.top+r.height)/(innerHeight+r.height);par.style.transform=`translateY(${(p-1)*12}%)`;}
  }
  ticking=false;
}
addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(onScroll);ticking=true}},{passive:true});
onScroll();
top.onclick=()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'});

// Mobile menu
const bg=$('#burger'),mm=$('#mmenu');
bg.onclick=()=>{const o=mm.classList.toggle('open');bg.classList.toggle('open',o);bg.setAttribute('aria-expanded',o)};
mm.querySelectorAll('a').forEach(a=>a.onclick=()=>{mm.classList.remove('open');bg.classList.remove('open')});

// Marquee duplicate
const mq=$('#mq');mq.innerHTML+=mq.innerHTML;

// 3D tilt on service cards
if(!reduce&&matchMedia('(hover:hover)').matches){
  $$('.tilt').forEach(c=>{
    c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      c.style.transform=`perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-6px)`;});
    c.addEventListener('mouseleave',()=>c.style.transform='');
  });
}

// Count-up stats + process line
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;io.unobserve(e.target);
  if(e.target.id==='steps'){animLine(e.target);return}
  const el=e.target,end=+el.dataset.count,suf=el.dataset.suffix||'';if(reduce)return;
  const t0=performance.now(),d=1800;
  (function f(t){const p=Math.min((t-t0)/d,1),v=Math.round(end*(1-Math.pow(1-p,3)));el.textContent=v.toLocaleString('en-US')+suf;if(p<1)requestAnimationFrame(f)})(t0);
}),{threshold:.4});
$$('[data-count]').forEach(el=>io.observe(el));
const steps=$('#steps');io.observe(steps);
function animLine(el){if(reduce){el.style.setProperty('--p','100%');return}const t0=performance.now();(function f(t){const p=Math.min((t-t0)/1600,1);el.style.setProperty('--p',(p*100)+'%');if(p<1)requestAnimationFrame(f)})(t0)}

// Reviews carousel
const track=$('#rvTrack'),cards=[...track.children],dotsEl=$('#rvDots');let idx=0,timer;
const perView=()=>innerWidth<=600?1:innerWidth<=900?2:3;
const pages=()=>Math.max(1,cards.length-perView()+1);
function draw(){dotsEl.innerHTML='';for(let i=0;i<pages();i++){const d=document.createElement('i');if(i===idx)d.className='on';d.onclick=()=>go(i);dotsEl.appendChild(d)}}
function go(i){idx=(i+pages())%pages();const w=cards[0].getBoundingClientRect().width+22;track.style.transform=`translateX(${-idx*w}px)`;draw();restart()}
function restart(){clearInterval(timer);if(!reduce)timer=setInterval(()=>go(idx+1),5000)}
$('#rvPrev').onclick=()=>go(idx-1);$('#rvNext').onclick=()=>go(idx+1);
addEventListener('resize',()=>go(Math.min(idx,pages()-1)));
let sx=null;track.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
track.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)go(idx+(dx<0?1:-1));sx=null});
go(0);

// Hours: highlight today
const today=new Date().getDay();const tr=$(`#hours tr[data-d="${today}"]`);if(tr)tr.classList.add('today');
$('#yr').textContent=new Date().getFullYear();

// Booking form
const chips=$$('#chips .chip'),est=$('#est');
function updateEst(){const sel=chips.filter(c=>c.getAttribute('aria-pressed')==='true');const sum=sel.reduce((a,c)=>a+ +c.dataset.p,0);est.textContent=sel.length?'$'+sum:'—'}
chips.forEach(c=>c.onclick=()=>{c.setAttribute('aria-pressed',c.getAttribute('aria-pressed')==='true'?'false':'true');updateEst()});
$$('.more[data-svc]').forEach(a=>a.addEventListener('click',()=>{const n=a.textContent&&a.dataset.svc;chips.forEach(c=>c.setAttribute('aria-pressed',c.textContent.trim()===n?'true':'false'));updateEst()}));
const date=$('#f-date');const d=new Date();d.setDate(d.getDate()+1);date.min=new Date().toISOString().slice(0,10);date.value=d.toISOString().slice(0,10);
const form=$('#book');
form.addEventListener('submit',e=>{
  e.preventDefault();let ok=true;
  ['#f-name','#f-phone','#f-car','#f-date'].forEach(s=>{const i=$(s),bad=!i.value.trim();i.parentElement.classList.toggle('err',bad);if(bad)ok=false});
  const sel=chips.filter(c=>c.getAttribute('aria-pressed')==='true').map(c=>c.textContent.trim());
  if(!sel.length){ok=false;$('#chips').animate([{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}],{duration:300})}
  if(!ok)return;
  const when=new Date($('#f-date').value+'T12:00').toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
  $('#doneTitle').textContent=`Thanks, ${$('#f-name').value.trim().split(' ')[0]}!`;
  $('#doneText').textContent=`We have your request for ${sel.join(', ')} on your ${$('#f-car').value.trim()}, ${when}. We'll text ${$('#f-phone').value.trim()} to confirm a time.`;
  $('#formBody').hidden=true;$('#done').hidden=false;
});
$$('#book input').forEach(i=>i.addEventListener('input',()=>i.parentElement.classList.remove('err')));
$('#again').onclick=()=>{form.reset();date.value=d.toISOString().slice(0,10);chips.forEach((c,i)=>c.setAttribute('aria-pressed',i===0?'true':'false'));updateEst();$('#done').hidden=true;$('#formBody').hidden=false};
})();
