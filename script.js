/* CONTENT: edit all text here */
const C={email:"warda.khalid.12345@gmail.com",li:"linkedin.com/in/warda-khalid-b1899a37b",
tag:"Aspiring Data Scientist and Front-End Developer, exploring data and creating responsive websites and data-driven solutions.",
bio:"Motivated Data Science student at PAF-IAST, Haripur, with a strong foundation in computer science. Eager to apply critical thinking and programming skills in a data-driven environment.",
stats:[["3.6/4.0","CGPA"],["93%","FSc (1116/1200)"],["4","Projects"],["6 weeks","Cybersecurity internship"]],
langs:"English (Professional Working), Urdu (Full Professional)",
edu:[["B.Sc. Data Science","Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology (PAF-IAST), Haripur","September 2025 to 2029. Probability and Statistics, Calculus, ICT, Discrete Structures, Programming Fundamentals, OOP, Entrepreneurship."],["F.Sc. Pre-Computer Science (ICS)","Peace College, Mansehra","2022 to 2024. 1116 / 1200 (93%). Top-performing student."]],
skills:[["Languages",["C","C++","HTML5","CSS3","Python3"]],["Tools",["Dev C++","VS Code","Kiro","MS Excel","MS Word","MS PowerPoint","MS Access"]],["Soft skills",["Analytical thinking","Problem solving","Team collaboration and communication","Time management"]],["Interests",["Cybersecurity","Data science","Volunteering","Entrepreneurship"]]],
projects:[["ATM System Demonstration","A fully functional ATM simulation with deposit, withdrawal, balance inquiry, and PIN authentication across 10+ dummy user accounts.","Dev C++, VS Code · 2026"],["Library Management System","A console-based system that manages 100+ book records with add, delete, search, and issue functions.","Dev C++ · 2026"],["Home Network Scanner","A real-time scanner that checks your home Wi-Fi network for common risky open ports and vulnerabilities.","HTML, CSS, Python3 · 2026"],["Patient Triage and Scheduler","An object-oriented system that triages patients by urgency and schedules their appointments.","C++, OOP project"]],
exp:[["Cybersecurity Intern","Secured X Wave LLP · on site, Haripur","6 weeks, July 6 to August 17, 2026"],["Volunteer","Apna Ghar Old Age Home · The Volunteers Society, Islamabad","November 2025 to present. Community service project."]]};
const T=a=>a.map(e=>`<div class="tl"><b>${e[0]}</b><br>${e[1]}<br><small>${e[2]||""}</small></div>`).join("");
const S={
about:()=>`<h2 class="s">About me</h2><p class="lead">${C.tag}</p><p>${C.bio}</p><div class="stats">${C.stats.map(s=>`<div><b>${s[0]}</b>${s[1]}</div>`).join("")}</div><p><b>Languages:</b> ${C.langs}</p><h3>Education</h3>${T(C.edu)}`,
skills:()=>`<h2 class="s">My skills</h2>${C.skills.map(g=>`<div class="card"><h3>${g[0]}</h3>${g[1].map(x=>`<span class="chip">${x}</span>`).join("")}</div>`).join("")}`,
projects:()=>`<h2 class="s">Projects</h2><p>Tap a door to open it.</p><div class="doors">${C.projects.map((p,i)=>`<div class="door"><div class="room2"><h4>${p[0]}</h4>${p[1]}<em>${p[2]}</em><em>Project link coming soon</em></div><button class="leaf2" aria-expanded="false"><span>${p[0]}</span><small>Door ${i+1}</small></button></div>`).join("")}</div>`,
experience:()=>`<h2 class="s">Experience</h2>${T(C.exp)}`,
contact:()=>`<h2 class="s">Let’s talk</h2><div class="card"><p>Email: <a href="mailto:${C.email}">${C.email}</a><br>LinkedIn: <a href="https://www.${C.li}">${C.li}</a><br>Location: Mansehra, Pakistan</p></div><div class="card"><h3>Send a message</h3><input class="nm" placeholder="Your name" aria-label="Your name"><textarea class="ms" rows="4" placeholder="Write your message" aria-label="Message"></textarea><button class="btn mail" style="border:0">Send email</button> <a class="btn" href="#" onclick="return false">Download CV (soon)</a></div>`};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],root=document.documentElement;
const J=$("#journey"),F=$("#F"),R=$("#R"),L=$("#L"),P=$("#P"),stage=$("#stage"),NAMES=["The arrival","The door","The room","The desk"];
const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
function theme(t){root.dataset.theme=t;try{localStorage.setItem("theme",t)}catch(e){}$("#tg").textContent=t==="dark"?"Light":"Dark"}
let sv=null;try{sv=localStorage.getItem("theme")}catch(e){}
theme(sv||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
$("#tg").onclick=()=>theme(root.dataset.theme==="dark"?"light":"dark");
const M=()=>J.offsetHeight-innerHeight,pos=i=>J.offsetTop+M()*[0,.2,.55,1][i];
$("#pg").innerHTML=NAMES.map((n,i)=>`<button aria-label="${n}" data-i="${i}"></button>`).join("");
$$("#pg button").forEach(b=>b.onclick=()=>scrollTo({top:pos(+b.dataset.i),behavior:"smooth"}));
$("#s1").style.top="20%";$("#s2").style.top="55%";$("#s3").style.top="calc(100% - 1px)";
let tick=0;
function prog(){return clamp((scrollY-J.offsetTop)/M())}
function render(){const p=prog(),vw=innerWidth,vh=innerHeight,H0=Math.min(340,vh*.4),W0=H0*.65,o=clamp((p-.06)/.2),e=ease(clamp((p-.26)/.44));
F.style.width=W0+(vw-W0+20)*e+"px";F.style.height=H0+(vh-H0+20)*e+"px";F.style.borderWidth=8*(1-e)+"px";
L.style.transform=`rotateY(${o*105}deg)`;L.style.visibility=(o>.97&&e>.15)?"hidden":"visible";
R.style.transform=`translate(-50%,-50%) scale(${.8+.2*e})`;
const a=1-clamp(p/.1);$("#h1").style.opacity=a;$("#h2").style.opacity=a;$("#h2").style.pointerEvents=a<.2?"none":"auto";$$(".sym").forEach(s=>s.style.opacity=.6*a);
$("#c3").style.opacity=clamp((p-.5)/.08)*(1-clamp((p-.74)/.06));$("#c4").style.opacity=clamp((p-.8)/.08);
stage.classList.toggle("live",p>.8);$("#c4").classList.toggle("show",p>.85);
const st=p<.1?0:p<.45?1:p<.78?2:3;$("#lb").textContent=`0${st+1} / 04 · ${NAMES[st]}`;
$$("#pg button").forEach((b,i)=>b.classList.toggle("on",i===st));
$("#cu").textContent=p<.1?"Scroll to enter ↓":p<.8?"Keep scrolling ↓":"";}
addEventListener("scroll",()=>{if(!tick){tick=1;requestAnimationFrame(()=>{tick=0;render()})}},{passive:true});
addEventListener("resize",render);
function go(i){scrollTo({top:pos(clamp(i,0,3)),behavior:"smooth"})}
function step(){const p=prog();return p<.1?0:p<.45?1:p<.78?2:3}
$("#sk").onclick=()=>go(3);$("#en").onclick=()=>go(1);$("#rp").onclick=()=>{if(document.body.classList.contains("simple"))scrollTo({top:0,behavior:"smooth"});else go(0)};$("#lg").onclick=$("#rp").onclick;
let last=null;
function openP(id){if(document.body.classList.contains("simple")){const t=$("#s-"+id);if(t)t.scrollIntoView({behavior:"smooth"});return}
last=document.activeElement;P.innerHTML=`<div class="ph"><button class="bk">← Back to room</button><button class="x" aria-label="Close">×</button></div>${S[id]()}`;P.classList.add("on");P.setAttribute("aria-hidden","false");P.scrollTop=0;$(".bk").focus()}
function closeP(){P.classList.remove("on");P.setAttribute("aria-hidden","true");if(last)last.focus()}
document.addEventListener("click",e=>{const b=e.target.closest("[data-p]");if(b)return openP(b.dataset.p);
if(e.target.closest(".bk,.x"))return closeP();
const l=e.target.closest(".leaf2");if(l){const d=l.parentElement;d.classList.toggle("open");l.setAttribute("aria-expanded",d.classList.contains("open"))}
const m=e.target.closest(".mail");if(m){const c=m.closest(".card");location.href=`mailto:${C.email}?subject=${encodeURIComponent("Portfolio message from "+(c.querySelector(".nm").value||"a visitor"))}&body=${encodeURIComponent(c.querySelector(".ms").value)}`}});
document.addEventListener("keydown",e=>{const t=e.target.tagName;if(t==="INPUT"||t==="TEXTAREA")return;
if(e.key==="Escape")return closeP();if(P.classList.contains("on")||document.body.classList.contains("simple"))return;
if(e.key==="ArrowDown"||e.key==="PageDown"){e.preventDefault();go(step()+1)}
else if(e.key==="ArrowUp"||e.key==="PageUp"){e.preventDefault();go(step()-1)}
else if(e.key==="ArrowRight"&&prog()>.8)turn(45);else if(e.key==="ArrowLeft"&&prog()>.8)turn(-45)});
function simple(on){document.body.classList.toggle("simple",on);$("#sv").textContent=on?"Studio view":"Simple view";
if(on&&!$("#simple").innerHTML)$("#simple").innerHTML=`<div class="eyebrow">Warda Khalid / Data science student</div><h1 style="font-size:clamp(34px,6vw,60px);margin:8px 0 28px">Step inside my <em>world.</em></h1>`+Object.keys(S).map(k=>`<section id="s-${k}">${S[k]()}</section>`).join("");
scrollTo(0,0);if(!on)render()}
$("#sv").onclick=()=>simple(!document.body.classList.contains("simple"));
if(matchMedia("(prefers-reduced-motion: reduce)").matches)simple(true);
/* ===== 3D 360 STUDIO: SCENE BUILDER ===== */
const cu=$("#cube"),RW=1400,RH=800,hd=RW/2,hh=RH/2;
const mk=(c,w,ht,tf)=>{const e=document.createElement("div");e.className="f "+c;e.style.cssText=`width:${w}px;height:${ht}px;margin:${-ht/2}px 0 0 ${-w/2}px;transform:${tf}`;cu.appendChild(e);return e};
const box=(w,ht,dp,x,y,z,col)=>{const b=document.createElement("div");b.className="bx";b.style.transform=`translate3d(${x}px,${y}px,${z}px)`;
[["front",w,ht,`translateZ(${dp/2}px)`],["back",w,ht,`rotateY(180deg) translateZ(${dp/2}px)`],["left",dp,ht,`rotateY(-90deg) translateZ(${w/2}px)`],["right",dp,ht,`rotateY(90deg) translateZ(${w/2}px)`],["top",w,dp,`rotateX(90deg) translateZ(${ht/2}px)`],["bot",w,dp,`rotateX(-90deg) translateZ(${ht/2}px)`]].forEach(([n,fw,fh,tf])=>{const f=document.createElement("div");f.className="bf "+n;f.style.cssText=`width:${fw}px;height:${fh}px;margin:${-fh/2}px 0 0 ${-fw/2}px;transform:${tf};background:${col}`;b.appendChild(f)});cu.appendChild(b);return b};
/* a picture = frame + glowing dot + label; all three open the same panel */
const pic=(par,id,x,y,w,ht,title,html,tag,up)=>{const a=document.createElement("button");a.className="pic";a.dataset.p=id;a.setAttribute("aria-label",title);a.style.cssText=`left:${x}px;top:${y}px;width:${w}px;height:${ht}px`;a.innerHTML=`<b>${title}</b>${html}`;
const d=document.createElement("button");d.className="dot";d.dataset.p=id;d.setAttribute("aria-label","Open "+tag);d.style.cssText=`left:${x+w-14}px;top:${y-14}px`;
const t=document.createElement("button");t.className="tag"+(up?" up":"");t.dataset.p=id;t.innerHTML=`${tag}<small>Click to open</small>`;t.style.cssText=`left:${x+w/2}px;top:${up?y-72:y+ht+34}px`;par.append(a,d,t)};
const wf=mk("wall",RW,RH,`translateZ(${-hd}px)`),wr=mk("wall",RW,RH,`rotateY(-90deg) translateZ(${-hd}px)`),wb=mk("wall",RW,RH,`rotateY(180deg) translateZ(${-hd}px)`),wl=mk("wall",RW,RH,`rotateY(90deg) translateZ(${-hd}px)`);
mk("floor",RW,RW,`rotateX(90deg) translateZ(${-hh}px)`);const ce=mk("ceil",RW,RW,`rotateX(-90deg) translateZ(${-hh}px)`);
mk("rug",620,420,"translate3d(0,398px,-330px) rotateX(90deg)");
ce.insertAdjacentHTML("beforeend",'<i class="neon" style="left:200px;top:340px;width:1000px"></i><i class="neon" style="left:200px;top:1060px;width:1000px"></i>');
wr.insertAdjacentHTML("beforeend",'<i class="neon" style="left:0;top:40px;width:1400px"></i><i class="neon" style="left:330px;top:90px;width:200px;transform:rotate(58deg)"></i><i class="neon" style="left:470px;top:90px;width:200px;transform:rotate(-58deg)"></i><i class="neon" style="left:600px;top:90px;width:200px;transform:rotate(58deg)"></i>');
wl.insertAdjacentHTML("beforeend",'<i class="neon" style="left:0;top:40px;width:1400px"></i>');
wf.insertAdjacentHTML("beforeend",'<div class="deco" style="left:90px;top:120px;width:360px;height:300px;background:linear-gradient(var(--w1),var(--b4))"></div><div class="deco" style="left:1000px;top:140px;width:220px;height:300px"></div>');
wb.insertAdjacentHTML("beforeend",'<button class="rdoor" style="left:110px;top:400px;width:170px;height:400px" aria-label="Replay the journey">Replay</button>');
/* desk set */
box(560,20,230,0,200,-540,"var(--b1)");box(24,190,200,-255,305,-540,"var(--b3)");box(24,190,200,255,305,-540,"var(--b3)");
const mon=box(360,210,14,-40,80,-560,"var(--b3)");box(30,40,24,-40,175,-560,"var(--b3)");box(120,8,80,-40,196,-545,"var(--b3)");
pic(mon.children[0],"projects",0,0,360,210,"Warda Khalid portfolio","<small>Projects · click to open</small><i>ATM</i><i>Library</i><i>Scanner</i><i>Triage</i>","Projects",1);
const tw=box(110,230,120,250,85,-520,"var(--b3)");[0,1,2].forEach(i=>tw.children[0].insertAdjacentHTML("beforeend",`<s class="ring" style="top:${12+i*72}px"></s>`));
box(220,8,70,-40,186,-480,"var(--b4)");box(30,10,46,110,185,-480,"var(--b4)");box(34,40,34,-215,170,-490,"var(--b2)");box(60,120,64,168,130,-520,"var(--b1)");box(60,120,64,-300,130,-520,"var(--b1)");
box(8,320,8,-420,240,-430,"var(--b4)");box(90,60,90,-420,70,-430,"#E6F1FB");
box(70,80,70,520,360,-360,"var(--b2)");[-30,0,30,60].forEach(a=>mk("leaf3",50,170,`translate3d(520px,250px,-360px) rotateY(${a*3}deg) rotateZ(${a/3}deg)`));
[-40,80,200].forEach((y,i)=>{box(70,10,300,-665,y,-230,"var(--b3)");for(let k=0;k<8;k++){const e=(k*37+i*13)%22;box(46,60+e,20,-665,y-5-(60+e)/2,-350+k*34,["var(--b2)","var(--b4)","var(--b1)","#E6F1FB"][(k+i)%4])}});
/* chair + girl robot sitting at the desk (facing the PC) */
const CX=-40,CZ=-440;
box(120,16,110,CX,293,CZ,"var(--b3)");box(116,125,14,CX,222,CZ+62,"var(--scr2)");
[-64,64].forEach(s=>{box(12,10,90,CX+s,258,CZ,"var(--scr2)");box(10,28,10,CX+s,272,CZ+10,"var(--scr2)")});
box(14,79,14,CX,340,CZ,"var(--b4)");box(120,8,14,CX,384,CZ,"var(--scr2)");box(14,8,120,CX,384,CZ,"var(--scr2)");
[[-60,0],[60,0],[0,-60],[0,60]].forEach(([a,b])=>box(14,12,14,CX+a,392,CZ+b,"var(--b3)"));
box(86,16,86,CX,277,CZ-6,"var(--b4)");box(58,70,40,CX,236,CZ+6,"var(--b2)");box(12,10,12,CX,196,CZ+6,"#B5D4F4");
box(54,50,48,CX,170,CZ+6,"#B5D4F4");box(58,52,10,CX,168,CZ+32,"var(--b4)");box(58,12,52,CX,143,CZ+6,"var(--b4)");box(12,12,12,CX,152,CZ+40,"#E6F1FB");box(16,72,16,CX,196,CZ+44,"var(--b4)");
[-30,30].forEach(s=>box(8,22,22,CX+s,172,CZ+6,"var(--b2)"));
[-40,40].forEach(s=>{box(14,52,14,CX+s,238,CZ+6,"#85B7EB");box(14,14,66,CX+s,262,CZ-30,"#85B7EB");box(12,10,16,CX+s,262,CZ-70,"#E6F1FB")});
[-15,15].forEach(s=>{box(20,18,70,CX+s,277,CZ-35,"var(--b2)");box(16,105,16,CX+s,337,CZ-62,"#85B7EB");box(22,12,34,CX+s,394,CZ-70,"var(--b3)")});
/* wall pictures */
pic(wl,"about",420,170,340,330,"Warda Khalid",'<small>Data science · PAF-IAST</small><div class="av"></div>',"About me");
pic(wr,"skills",700,170,420,300,"My skills","<small>Languages · tools</small><i>C</i><i>C++</i><i>Python3</i><i>HTML5</i><i>CSS3</i><i>VS Code</i>","Skills");
pic(wr,"experience",140,200,300,230,"Experience","<small>Internship · volunteering</small><i>Cybersecurity</i><i>Volunteer</i>","Experience");
pic(wb,"contact",520,190,360,240,"LET’S TALK","<small>Click to connect</small><i>Email</i><i>LinkedIn</i>","Let’s talk");
/* rotation: drag, arrows, keys */
let yaw=0,tyaw=0,pit=-8,drag=null,moved=0,raf=0;
function paint(){cu.style.setProperty("--yw",yaw+"deg");cu.style.setProperty("--pt",pit+"deg")}
function spin(){if(drag){raf=0;return}const d=tyaw-yaw;if(Math.abs(d)<.1){yaw=tyaw;paint();raf=0;return}yaw+=d*.14;paint();raf=requestAnimationFrame(spin)}
function turn(a){tyaw+=a;if(!raf)raf=requestAnimationFrame(spin)}
stage.addEventListener("pointerdown",e=>{if(prog()>.8){drag={x:e.clientX,y:e.clientY};moved=0}});
addEventListener("pointermove",e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.x=e.clientX;drag.y=e.clientY;moved+=Math.abs(dx)+Math.abs(dy);if(moved>6){yaw-=dx*.22;tyaw=yaw;if(e.pointerType==="mouse")pit=clamp(pit+dy*.12,-22,22);paint()}});
addEventListener("pointerup",()=>{drag=null});
document.addEventListener("click",e=>{if(moved>6){e.stopPropagation();e.preventDefault()}moved=0},true);
$("#rl").onclick=()=>turn(-90);$("#rr").onclick=()=>turn(90);
document.addEventListener("click",e=>{if(e.target.closest(".rdoor"))$("#rp").onclick()});
paint();

render();
