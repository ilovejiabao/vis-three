import"../modulepreload-polyfill.b7f2da20.js";/* empty css               */import{bC as x}from"../three.a7f96461.js";import{D as M}from"../index.dd1c9b04.js";import{A as r,g as e,i as t}from"../index.b645aaec.js";import"../index.a2f5d06c.js";import"../index.1a1708f8.js";import"../index.d8b4942b.js";import"../index.b6c2852c.js";import"../index.90c2f86e.js";import{l as T}from"../index.fdaaf24c.js";import{m as a}from"../Antdv.35288747.js";import"../index.b9c2d6f9.js";import"../index.905449da.js";import"../index.512960c2.js";import"../index.7b782c3d.js";import"../index.ac438749.js";import"../index.bc97152c.js";import"../index.725c43cc.js";import"../index.7e2f6976.js";import"../index.b5ce54d9.js";import"../UnrealBloomPass.62a8742d.js";import"../index.b697bcc7.js";import"../index.deae8785.js";import"../index.cbfdc464.js";import"../G6.cf5ff0af.js";import"../index.b0fe2ce4.js";import"../TextureDisplayer.4cf2d30b.js";r.register(T);const o=new M().setDom(document.getElementById("app"));o.loaderManager.setPath("/vis-three/examples/");a.loading({content:"\u6B63\u5728\u52A0\u8F7D3D\u8D44\u6E90\uFF1A0%",key:"loading",duration:0});o.loaderManager.addEventListener("loading",i=>{a.loading({content:`\u6B63\u5728\u52A0\u8F7D3D\u8D44\u6E90\uFF1A${parseInt((i.loadSuccess/i.loadTotal*100).toString())}
      %`,key:"loading",duration:0})});o.loaderManager.addEventListener("loaded",i=>{a.success({content:"\u52A0\u8F7D\u5B8C\u6210\uFF01",key:"loading",duration:1})});(async()=>{e.injectEngine=o,e(t.WEBGLRENDERER,{clearColor:"rgba(10, 2, 10, 1)",physicallyCorrectLights:!0,toneMapping:x,toneMappingExposure:3}),e(t.ORBITCONTROLS,{autoRotate:!0,autoRotateSpeed:.5,enableDamping:!0,maxDistance:200,minDistance:100,enablePan:!1});const i=e(t.PERSPECTIVECAMERA,{far:1e4,near:.01,position:{x:90,y:-90,z:100}});o.setCameraBySymbol(i.vid).setSize();const n=e(t.SCENE);o.setSceneBySymbol(n.vid),e.injectScene=!0;const l=await o.loadResourcesAsync(["/model/three.obj","/model/vis.obj","/texture/vis/colorMap.png","/skyBox/lightblue/px.png","/skyBox/lightblue/py.png","/skyBox/lightblue/pz.png","/skyBox/lightblue/nx.png","/skyBox/lightblue/ny.png","/skyBox/lightblue/nz.png"]).catch(b=>{console.log(b)}),s=e(t.CUBETEXTURE,{cube:{px:"/skyBox/lightblue/px.png",py:"/skyBox/lightblue/py.png",pz:"/skyBox/lightblue/pz.png",nx:"/skyBox/lightblue/nx.png",ny:"/skyBox/lightblue/ny.png",nz:"/skyBox/lightblue/nz.png"}});n.background=s.vid,n.environment=s.vid,e(t.AMBIENTLIGHT,{intensity:1}),e(t.DIRECTIONALLIGHT,{color:"rgb(255, 255, 255)",position:{x:-10,y:40,z:20},intensity:1e3*4*Math.PI}),e(t.DIRECTIONALLIGHT,{color:"rgb(255, 255, 255)",position:{x:10,y:40,z:-20},intensity:1e3*4*Math.PI});const p=l.resourceConfig,g=e(t.LOADGEOMETRY,Object.assign(Object.values(p["/model/three.obj"].geometry)[0],{rotation:{x:Math.PI/2,y:-(Math.PI/180)*30},position:{x:.13,y:-.14},scale:{x:80,y:80,z:80}})),m=e(t.MESHSTANDARDMATERIAL,{color:"white",metalness:1,roughness:0,envMapIntensity:.8}),c=e(t.MESH,{geometry:g.vid,material:m.vid}),y=e(t.LOADGEOMETRY,Object.assign(Object.values(p["/model/vis.obj"].geometry)[0],{scale:{x:6,y:6,z:6}})),u=e(t.IMAGETEXTURE,{url:"/texture/vis/colorMap.png"}),d=e(t.MESHSTANDARDMATERIAL,{map:u.vid,metalness:1,roughness:0,transparent:!0,opacity:.8}),E=e(t.MESH,{geometry:y.vid,material:d.vid});e(t.SCRIPTANIMATION,{target:c.vid,attribute:".rotation.z",script:r.generateConfig("linearTime",{multiply:.2})}),e(t.SCRIPTANIMATION,{target:E.vid,attribute:".rotation.y",script:r.generateConfig("linearTime",{multiply:.7})})})();window.engine=o;