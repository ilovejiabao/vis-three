import{v as r}from"../index.5dcba3b7.js";import{M as l,B as d,a as c,P as p,L as m,al as g,b as w,ap as u,u as P}from"../three.057c7ef5.js";import{W as b,C as h}from"../index.83854a9b.js";import{O as y}from"../index.96224b3a.js";import"../TextureDisplayer.0e66dd70.js";const e=r({plugins:[b({antialias:!0,alpha:!0}),h(),y()]}).setDom(document.getElementById("app")).setSize(),n=e.scene,t=new l(new d(10,10,10),new c({color:"rgb(255, 105, 100)"}));t.position.x=10;n.add(t);const i=new p("rgb(255, 255, 255)",1,30,0);i.position.y=20;n.add(i);const M=new m(t.geometry,new g({color:"yellow"}));n.add(M);const s=new w(t.geometry,new u({color:"blue"}));s.position.x=-10;n.add(s);const a=new P(180/Math.PI*45,16/9,5,70);a.position.set(0,20,50);a.lookAt(0,0,0);n.add(a);e.render();let o=!0;document.getElementById("operate").onclick=L=>{o=!o,e.setObjectHelper(o),e.render()};window.engine=e;