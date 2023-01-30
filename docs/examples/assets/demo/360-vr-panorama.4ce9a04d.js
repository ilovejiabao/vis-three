import"../modulepreload-polyfill.b7f2da20.js";import{l as k}from"../loadingTips.44bbf382.js";import{bx as p}from"../three.a7f96461.js";import{P as M}from"../index.5447b772.js";import{D as I}from"../index.dd1c9b04.js";import{E as l,g as o,i as t}from"../index.b645aaec.js";import"../index.a2f5d06c.js";import"../index.1a1708f8.js";import"../index.d8b4942b.js";import"../index.b6c2852c.js";import"../index.90c2f86e.js";import{C as c}from"../index.b0fe2ce4.js";import"../TextureDisplayer.4cf2d30b.js";import{m as b}from"../vector3To.a09d8c52.js";import{A as z}from"../index.355261f2.js";/* empty css               */import"../Antdv.35288747.js";import"../index.b9c2d6f9.js";import"../index.905449da.js";import"../index.512960c2.js";import"../index.7b782c3d.js";import"../index.ac438749.js";import"../index.bc97152c.js";import"../index.725c43cc.js";import"../index.7e2f6976.js";import"../index.b5ce54d9.js";import"../UnrealBloomPass.62a8742d.js";import"../index.b697bcc7.js";import"../index.deae8785.js";import"../index.cbfdc464.js";import"../G6.cf5ff0af.js";l.register(b);const d=(r,a)=>{r.textBaseline="middle",r.textAlign="center",r.fillStyle="rgb(26, 203, 208)",r.fillRect(0,0,512,512),r.fillStyle="white",r.font="bold 58px \u5FAE\u8F6F\u96C5\u9ED1",r.fillText(a,255,255)},R=new c().draw(r=>d(r,"to bedroom")),h=new c().draw(r=>d(r,"to kitchenroom")),f=new c().draw(r=>d(r,"to livingroom")),e=new I().rollback("OrbitControlsSupportStrategy").unistall("OrbitControlsPlugin").install(M()).install(z()).setDom(document.getElementById("app")).setSize().play();k(e);o.injectEngine=e;const m=o(t.PERSPECTIVECAMERA,{near:.01,far:500});e.setCameraBySymbol(m.vid);e.setSize();const P=o(t.SCENE);e.setSceneBySymbol(P.vid);o.injectScene=!0;e.loaderManager.setPath("/vis-three/examples/");e.registerResources({bedroomCanvas:R.getDom(),kitchenroomCanvas:h.getDom(),livingroomCanvas:f.getDom()}).loadResourcesAsync(["/texture/360vr/room/bedroom.jpeg","/texture/360vr/room/kitchenroom.jpeg","/texture/360vr/room/livingroom.jpeg"]).then(r=>{const a=o(t.SPHEREGEOMETRY,{radius:7,widthSegments:128,heightSegments:128}),g=o(t.IMAGETEXTURE,{url:"/texture/360vr/room/livingroom.jpeg"}),E=o(t.MESHBASICMATERIAL,{map:g.vid,side:p}),i=o(t.MESH,{geometry:a.vid,material:E.vid}),v=o(t.IMAGETEXTURE,{url:"/texture/360vr/room/bedroom.jpeg"}),y=o(t.MESHBASICMATERIAL,{map:v.vid,side:p}),n=o(t.MESH,{geometry:a.vid,material:y.vid,position:{x:i.position.x+9,y:i.position.y,z:i.position.z-14}}),T=o(t.IMAGETEXTURE,{url:"/texture/360vr/room/kitchenroom.jpeg"}),u=o(t.MESHBASICMATERIAL,{map:T.vid,side:p}),s=o(t.MESH,{geometry:a.vid,material:u.vid,position:{x:i.position.x+15,y:i.position.y,z:i.position.z}}),S=o(t.CANVASTEXTURE,{url:"kitchenroomCanvas"}),x=o(t.SPRITEMATERIAL,{map:S.vid});o(t.SPRITE,{material:x.vid,scale:{x:.5,y:.5,z:.5},position:{x:i.position.x+5,y:i.position.y+.5,z:i.position.z+.2},click:[l.generateConfig("moveTo",{params:{target:m.vid,position:{x:s.position.x,y:s.position.y,z:s.position.z}}})]});const A=o(t.CANVASTEXTURE,{url:"bedroomCanvas"}),C=o(t.SPRITEMATERIAL,{map:A.vid});o(t.SPRITE,{material:C.vid,scale:{x:.5,y:.5,z:.5},position:{x:i.position.x+2,y:i.position.y+.5,z:i.position.z-5},click:[l.generateConfig("moveTo",{params:{target:m.vid,position:{x:n.position.x,y:n.position.y,z:n.position.z}}})]}),m.position.x=i.position.x,m.position.y=i.position.y,m.position.z=i.position.z,document.getElementById("global").onclick=()=>{e.camera.position.set(0,70,0),e.camera.lookAt(0,0,0)},document.getElementById("bedroom").onclick=()=>{e.camera.position.set(n.position.x,n.position.y,n.position.z),e.camera.lookAt(0,0,0)},document.getElementById("kitchenroom").onclick=()=>{e.camera.position.set(s.position.x,s.position.y,s.position.z),e.camera.lookAt(0,0,0)},document.getElementById("livingroom").onclick=()=>{e.camera.position.set(i.position.x,i.position.y,i.position.z),e.camera.lookAt(0,0,0)}});window.engine=e;