import"../index.4424140c.js";import{a1 as p,aF as r,bz as d,a9 as s,bp as g,bA as m,aa as M,bB as h,bC as c,bD as E,bE as l}from"../three.c9232d79.js";import{W as S,C as y}from"../index.4f3227eb.js";import{W as T}from"../index.833d35bc.js";import{g as e}from"../index.78634d72.js";import{d as R}from"../index.4885615c.js";import"../index.7c6e7a0c.js";import"../index.60f12b64.js";import"../index.7852bf6c.js";import"../index.263b27ed.js";import{g as b}from"../lil-gui.module.min.095a7f3d.js";import{W as w}from"../index.45e13407.js";import"../G6.7751b749.js";import"../TextureDisplayer.5189c82c.js";const o=R({plugins:[S({antialias:!0,alpha:!0}),y()],strategy:[T(),w()]}).setDom(document.getElementById("app")).setSize().play();o.camera.position.set(60,60,60);o.camera.lookAt(0,20,0);e.injectEngine=o;const a=e("WebGLRenderer",{physicallyCorrectLights:!0,shadowMap:{enabled:!0}}),u=e("Scene");o.setSceneBySymbol(u.vid);e.injectScene=!0;e("AmbientLight");e("PointLight",{position:{x:30,y:50},distance:200,intensity:5});const C=e("MeshStandardMaterial"),L=e("BoxGeometry",{width:20,height:60,depth:20});e("Mesh",{material:C.vid,geometry:L.vid,position:{y:30}});const f=e("BoxGeometry",{width:500,height:10,depth:500}),B=e("MeshStandardMaterial",{color:"rgb(100, 100, 100)"});e("Mesh",{material:B.vid,geometry:f.vid,position:{y:-5}});o.play();const t=new b;t.add(a,"physicallyCorrectLights");t.add(a,"outputEncoding",{LinearEncoding:p,sRGBEncoding:r});let i=t.addFolder("shadowMap setting");i.add(a.shadowMap,"enabled");i.add(a.shadowMap,"type",{"THREE.BasicShadowMap":d,"THREE.PCFShadowMap":s,"THREE.PCFSoftShadowMap":g,"THREE.VSMShadowMap":m});let n=t.addFolder("toneMapping setting");n.add(a,"toneMapping",{"THREE.NoToneMapping":M,"THREE.LinearToneMapping":h,"THREE.ReinhardToneMapping":c,"THREE.CineonToneMapping":E,"THREE.ACESFilmicToneMapping":l});n.add(a,"toneMappingExposure",0,20,1);