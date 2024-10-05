import{j as l,k as d,F as h,G as f,l as t,m as e,q as o,s as c,t as g,d as y,H as w,r as x,o as S,I as k,J as v,K as C}from"./entry.ff6ae55f.js";const $={__name:"HeadingCard",props:{textColor:String},setup(s){const a=s;return(i,u)=>(l(),d("div",{class:f(["text-4xl font-mono font-bold",a.textColor])},[h(i.$slots,"default")],2))}},I=$,M={class:"container mx-auto"},V={__name:"Section",props:{color:String,text:String,textColor:String},setup(s){const a=s;return(i,u)=>{const _=I;return l(),d("div",{class:f(["w-full",a.color])},[t("div",M,[e(_,{class:"pt-4",textColor:a.textColor},{default:o(()=>[c(g(a.text),1)]),_:1},8,["textColor"]),t("div",{class:f(a.textColor)},[h(i.$slots,"default")],2)])],2)}}},j=V,A={class:"w-full h-full overflow-hidden group"},B={class:"relative overflow-hidden"},P=["src"],T={class:"absolute h-full w-full bg-black/70 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"},L={class:"text-white"},N={__name:"SkillImage",props:{image:String,name:String},setup(s){const a=s,i=a.image;return console.log(i),(u,_)=>(l(),d("div",A,[t("div",B,[t("img",{class:"rounded-full object-contain h-20 w-20",src:a.image,alt:""},null,8,P),t("div",T,[t("span",L,g(a.name),1)])])]))}},D=N,E={class:"border-2 border-solid border-black rounded-lg h-[200px]"},q={class:"font-bold"},H={__name:"SkillCard",props:{title:String},setup(s){const a=s;return(i,u)=>(l(),d("div",E,[t("h1",q,g(a.title),1),h(i.$slots,"default")]))}},F=H,G=""+globalThis.__publicAssetsURL("background.mp4"),J=""+globalThis.__publicAssetsURL("picture.png"),U={class:"mt-2 mb-2 px-2 py-1 border rounded"},p=y({__name:"HeaderButton",setup(s){return(a,i)=>(l(),d("button",U,[h(a.$slots,"default")]))}});function W(s,a){return l(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"})])}var b=y({name:"VueWriter",props:{array:{type:Array,required:!0},eraseSpeed:{type:Number,default:100},typeSpeed:{type:Number,default:200},delay:{type:Number,default:2e3},intervals:{type:Number,default:500},start:{type:Number,default:0},caret:{type:String,default:"cursor"},iterations:{type:Number,default:0}},data:function(){return{typeValue:"",count:0,typeStatus:!1,arrayIndex:0,charIndex:0}},methods:{typewriter:function(){var a=0;if(this.charIndex<this.array[this.arrayIndex].length)this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.array[this.arrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typewriter,this.typeSpeed);else{if(this.count+=1,this.count===this.array.length&&(a+=1,a===this.iterations))return this.typeStatus=!1;this.typeStatus=!1,setTimeout(this.eraser,this.delay)}},eraser:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.array[this.arrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraser,this.eraseSpeed)):(this.typeStatus=!1,this.arrayIndex+=1,this.arrayIndex>=this.array.length&&(this.arrayIndex=0),setTimeout(this.typewriter,this.typeSpeed+this.intervals))}},created:function(){setTimeout(this.typewriter,this.start)}}),z={class:"is-typed"},R={class:"typed"};function K(s,a,i,u,_,m){return l(),w("div",z,[h(s.$slots,"default"),e("span",R,g(s.typeValue),1),e("span",{class:s.caret+" "+{typing:s.typeStatus}}," ",2)])}b.render=K;var O=function(){var s=b;return s.install=function(a){a.component("VueWriter",s)},s}();const Q=O;const Y={class:"text-white z-40 fixed w-full h-[50px] font-mono bg-black"},X={class:"absolute right-20"},Z={class:"flex space-x-4"},ee={href:"/MatthewCurschmanResume.pdf",download:"",target:"blank"},te={class:"section bg-black"},ae=t("div",null,null,-1),se={class:"text-white pl-10 pt-60"},ne=t("div",null," Matt Curschman ",-1),oe={class:"pl-20"},ie={class:"flex flex-row"},re=t("div",{class:"pr-7"},"I am a ",-1),le=t("h1",null,null,-1),ce=t("div",{class:"video-container"},[t("video",{autoplay:"",loop:"",muted:"",class:"md:filter-none"},[t("source",{src:G,type:"video/mp4"})])],-1),de=t("div",{class:"flex flex-row"},[t("img",{class:"rounded-full pt-10",src:J,alt:""}),t("pre",{class:"text-lg"},`        My name is Matthew Curschman

        I have a degree in Computer Engineering from the University of Florida. Go Gators!

        I currently work as a Full-Stack web Developer, with a heavy lean on back-end technologies.I have experience
        with Database Creation, Parsing, Integration, and Utilization on large scale projects. My current work project
        is a Parsing application designed to parse large Google Sheets documents, extrapolate their data,and store it
        in a database, where it can then be accessed as an API backend, queried for further information, or have
        subsequent operations ran on it (Conflux Parser).

        My current side projects are a  lexicographic parser designed to parse and read mathematical equations and provide
        their derivative (derivApp), and a personal tracker (Myday)

        My friends describe me as funny, and I like to describe myself as determined. I am an Eagle Scout, have a
        Black Belt in Karate, and enjoy both piano and art as my hobbies. My favorite subjects are
        Computer Science (duh), Math, and Art.
      `)],-1),ue={class:"mx-auto text-center pt-20"},pe={class:"grid grid-cols-3 px-40 gap-5 pb-10"},he={class:"grid grid-cols-3"},_e={class:"grid grid-cols-3"},me={class:"grid grid-cols-3"},ge={class:"grid grid-cols-3"},fe={class:"grid grid-cols-3"},xe={class:"grid grid-cols-3"},ve=t("div",{class:"grid grid-cols-3"},null,-1),ye=t("div",{class:"grid grid-cols-3"},null,-1),be={class:"grid grid-cols-3"},Se={__name:"index",setup(s){x(0);let a=x(!1);function i(){a.value=window.scrollY>400,console.log(a.value)}return S(()=>{window.addEventListener("scroll",i)}),k(()=>{window.removeEventListener("scroll",i)}),(u,_)=>{const m=j,n=D,r=F;return l(),d(C,null,[t("h1",Y,[t("div",X,[t("div",Z,[e(p,null,{default:o(()=>[c("About Me")]),_:1}),e(p,null,{default:o(()=>[c("Skills")]),_:1}),e(p,null,{default:o(()=>[c("Projects Me")]),_:1}),e(p,null,{default:o(()=>[c("Extras")]),_:1}),t("a",ee,[e(p,{class:"bg-white text-black flex items-center space-x-2"},{default:o(()=>[c(" Resume "),e(v(W),{class:"h-5 w-5 text-black-500"})]),_:1})])])])]),t("div",te,[ae,t("h1",se,[ne,t("div",oe,[t("div",ie,[re,t("div",null,[e(v(Q),{class:"inline text-blue-300",array:["Computer Engineer","Computer Scientist","Web Developer"],typeSpeed:40,eraseSpeed:50,delay:1e3,intervals:200})])])])]),le,ce]),e(m,{text:"About Me",textColor:"text-white",color:"bg-[#111]",class:"h-[700px]"},{default:o(()=>[de]),_:1}),e(m,{text:"Skills",textColor:"text-black",color:"bg-white",class:"h-[800px] mx-auto pb-20"},{default:o(()=>[t("div",ue,[t("div",pe,[e(r,{title:"Front End"},{default:o(()=>[t("div",he,[e(n,{image:"html.png",name:"HTML"}),e(n,{image:"css.png",name:"CSS"}),e(n,{image:"tailwind.png",name:"Tailwind"})])]),_:1}),e(r,{title:"Back End"},{default:o(()=>[t("div",_e,[e(n,{image:"php.svg",name:"PHP"})])]),_:1}),e(r,{title:"Frameworks"},{default:o(()=>[t("div",me,[e(n,{image:"nuxt.png",name:"NuxtJS"}),e(n,{image:"vue.webp",name:"VueJS"})])]),_:1}),e(r,{title:"Programming Languages"},{default:o(()=>[t("div",ge,[e(n,{image:"cppimage.png",name:"C++"}),e(n,{image:"java.svg",name:"Java"}),e(n,{image:"js.webp",name:"JavaScript"}),e(n,{image:"csharp.png",name:"C#"}),e(n,{image:"cimage.png",name:"C"}),e(n,{image:"python.png",name:"Python"})])]),_:1}),e(r,{title:"Version Control"},{default:o(()=>[t("div",fe,[e(n,{image:"gitlab.png",name:"GitLab"}),e(n,{image:"github.png",name:"GitHub"})])]),_:1}),e(r,{title:"Databases"},{default:o(()=>[t("div",xe,[e(n,{image:"sql.png",name:"SQL"}),e(n,{image:"mongo.png",name:"MongoDB"}),e(n,{image:"maria.png",name:"MariaDB"}),e(n,{image:"supabase.png",name:"Supabase"})])]),_:1}),e(r,{title:"Cloud"},{default:o(()=>[ve]),_:1}),e(r,{title:"Third Parties"},{default:o(()=>[ye]),_:1}),e(r,{title:"Operating Systems"},{default:o(()=>[t("div",be,[e(n,{image:"macos.png",name:"MacOS"}),e(n,{image:"windows.webp",name:"Windows"}),e(n,{image:"linux.png",name:"Linux"})])]),_:1})])])]),_:1}),e(m,{text:"Projects",textColor:"text-white",color:"bg-[#111]",class:"h-[700px]"},{default:o(()=>[c(" Deri An app that uses Java and lexical analysis to tokenize and parse characters, rendering the derivative of mathematical equations MyDay A self improvement app that offers several features such as daily life tracking, exercise tracking, calendar planning, and more ")]),_:1})],64)}}};export{Se as default};
