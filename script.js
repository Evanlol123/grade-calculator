document.addEventListener("DOMContentLoaded",(function(){document.body.classList.add("loaded")}));const calc=()=>{let e=.2*[...document.querySelectorAll(".qtr")].reduce(((e,t)=>e+parseInt(t.value)),0)+.1*[...document.querySelectorAll(".exam")].reduce(((e,t)=>e+parseInt(t.value)),0);const t=document.getElementById("qtr1").value,n=document.getElementById("qtr2").value,r=document.getElementById("qtr3").value,a=document.getElementById("qtr4").value;parseInt(r)+parseInt(a)!==0&&(parseInt(t)+parseInt(n)!==0||0!==parseInt(r)&&0!==parseInt(a))||(e=0),document.getElementById("grade").innerText=e>=3.5?"A":e>=2.5?"B":e>=1.5?"C":e>=.75?"D":"E"},calcAssess=()=>{let e=.2*[...document.querySelectorAll(".qtra")].reduce(((e,t)=>e+parseInt(t.value)),0);const t=document.getElementById("qtr1a").value,n=document.getElementById("qtr2a").value,r=document.getElementById("qtr3a").value,a=document.getElementById("qtr4a").value;parseInt(r)+parseInt(a)!==0&&(parseInt(t)+parseInt(n)!==0||0!==parseInt(r)&&0!==parseInt(a))||(e=0),document.getElementById("gradea").innerText=e>=3.5?"A":e>=2.5?"B":e>=1.5?"C":e>=.75?"D":"E"},calcSem=()=>{const e=.4*[...document.querySelectorAll(".qtrs")].reduce(((e,t)=>e+parseInt(t.value)),0)+.2*[...document.querySelectorAll(".exams")].reduce(((e,t)=>e+parseInt(t.value)),0);document.getElementById("grades").innerText=e>=3.5?"A":e>=2.5?"B":e>=1.5?"C":e>=.75?"D":"E"},calcGPA=()=>{const e=document.getElementById("classcount").value,t=[...document.querySelectorAll(".course")],n=t.reduce(((t,n,r)=>r<parseInt(e)?t+parseInt(n.value):t),0),r=[...document.querySelectorAll(".type")].map((e=>Number(e.value))),a=t.reduce(((t,n,a)=>a>=parseInt(e)?t:parseInt(n.value)>1?t+parseInt(n.value)+r[a]:t+parseInt(n.value)),0);document.getElementById("ungpa").innerText=(n/parseInt(e)).toFixed(2).toString(),document.getElementById("wgpa").innerText=(a/parseInt(e)).toFixed(2).toString()};
