import{D as i,g as e}from"../Vis.es.321d2553.js";import"../three.5dc0577a.js";import"../vis-three.a3d50446.js";const t=new i().install("CSS3DRenderer").complete().setDom(document.getElementById("app")).registerResources({"examples.css3DObject":document.getElementById("element1"),"examples.css3DObject2":document.getElementById("element2"),"examples.css3DObject3":document.getElementById("element3")}),s=e("CSS3DObject",{element:"examples.css3DObject",position:{x:-50,y:10},rotation:{y:Math.PI/180*20},scale:{x:.1,y:.1,z:.1}}),c=e("CSS3DObject",{element:"examples.css3DObject2",position:{x:50,y:10},rotation:{y:-(Math.PI/180)*20},scale:{x:.1,y:.1,z:.1}}),n=e("CSS3DObject",{element:"examples.css3DObject3",position:{z:-30,y:10},scale:{x:.5,y:.5,z:.5}}),o=e("Scene",{children:[s.vid,c.vid,n.vid]});t.applyConfig(s,c,n,o);t.setScene(o.vid).play();setTimeout(()=>{t.setSize()},0);