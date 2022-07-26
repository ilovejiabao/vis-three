import"../common.006007ed.js";import{D as d,g as e,n as u,E as c}from"../Vis.es.824ecc78.js";import{v as g}from"../v4.90f1a8cc.js";import"../three.988821a1.js";import"../vis-three.8be35a0c.js";var v={router:"engine",children:["/Engine.html","/ModelingEngine.html","/DisplayEngine.html","/ModelingEngineSupport.html","/DisplayEngineSupport.html"],position:{x:-70,y:20,z:-30},rotation:{y:Math.PI/180*35}},S={router:"plugin",children:["/WebGLRendererPlugin.html","/CSS3DRendererPlugin.html","/AxesHelperPlugin.html","/GridHelperPlugin.html","/ObjectHelperPlugin.html","/ViewpointPlugin.html","/DisplayModePlugin.html","/SelectionPlugin.html","/StatsPlugin.html","/TransformControlsPlugin.html"],position:{x:-60,y:-20,z:-20},rotation:{y:Math.PI/180*25}},x={router:"support",children:["/RendererSupport.html","/GeometrySupport.html","/MaterialSupport.html","/CameraSupport.html","/MeshSupport.html","/SpriteSupport.html","/LineSupport.html","/PointsSupport.html","/LightSupport.html","/GroupSupport.html","/TextureSupport.html","/EventSupport.html","/SceneSupport.html","/CSS3DSupport.html","/AnimationSupport.html"],position:{x:-15,y:0,z:15},rotation:{y:Math.PI/180*25}},P={router:"displayer",children:["/TextureDisplayer.html","/MaterialDisplayer.html"],position:{x:-70,y:-30,z:10},rotation:{y:Math.PI/180*35}},M={router:"convenient",children:["/History.html"],position:{x:-80,y:10},rotation:{y:Math.PI/180*25}},z={router:"manager",children:["/EventManager.html","/LoaderManager.html","/ResourceManager.html","/KeyboardManager.html"],position:{x:45,z:5,y:-30},rotation:{y:Math.PI/180*-15}},f={router:"modifier",children:["/BooleanModifier.html"],position:{x:45,z:-10,y:20},rotation:{y:Math.PI/180*-25}},R={router:"helper",children:["/PointLightHelper.html","/SpotLightHelper.html","/directionalLight.html","/CameraHelper.html","/GroupHelper.html"],position:{x:20,z:15},rotation:{y:Math.PI/180*-25}},b={router:"loader",children:["/VideoLoader.html"],position:{x:15,y:20,z:10},rotation:{y:Math.PI/180*-25}},I={router:"develop",children:["/configure.html","/Vue3.html","/Vue2.html","/CanvasExtends.html","/Vue2-ConfigExtends.html"],position:{x:60,y:-10},rotation:{y:Math.PI/180*-30}},C={router:"core",children:["/ProxyBroadcast.html"],position:{x:20,y:-30,z:20},rotation:{y:Math.PI/180*-25}},E={router:"test",children:["/Pressure-canvas.html","/Pressure-css3D.html"],position:{x:60,y:10,z:20},rotation:{y:Math.PI/180*-30}},L={router:"library",children:["/EventLibrary.html","/ShaderLibrary.html"],position:{x:60,y:30,z:20},rotation:{y:Math.PI/180*-30}},D={router:"extends",children:["/SelectiveBloomPass.html"],position:{x:20,y:35,z:10},rotation:{y:Math.PI/180*-20}},G={router:"homepage",children:["/vis.html"],position:{x:-40,y:35,z:-10},rotation:{y:Math.PI/180*30}},H={router:"dataview",children:["/Echarts.html","/AntdV-G6-Framework.html"],position:{x:-30,y:-40,z:0},rotation:{y:Math.PI/180*20}},T={router:"passSupport",children:["/UnrealBloomPass.html","/SelectiveBloomPass.html"],position:{x:-15,y:35,z:15},rotation:{y:Math.PI/180*25}},w={router:"geometrySupport",children:["/BoxGeometry.html","/SplineCurveGeometry.html"],position:{x:15,y:-25,z:-15},rotation:{y:Math.PI/180*-15}},j={router:"textureSupport",children:["/ImageTextureSupport.html"],position:{x:75,y:-45,z:-15},rotation:{y:Math.PI/180*-15}};const o=new d().install("CSS3DRenderer").complete().setDom(document.getElementById("app")).setSize();window.addEventListener("resize",()=>{o.setSize()});e.injectEngine=o;const B=e("Scene");o.setScene(B.vid);e.injectScene=!0;const A=e("PerspectiveCamera",{far:500,position:{y:10,z:120}});o.setCamera(A.vid);e("AmbientLight");e("SpotLight",{position:{y:15,x:50,z:50},intensity:2,distance:120});const V=e("MeshStandardMaterial",{color:"rgb(45, 0, 50)",roughness:.8}),$=e("BoxGeometry",{width:100,height:5,depth:40}),y=e("Mesh",{geometry:$.vid,material:V.vid});e("ScriptAnimation",{target:y.vid,attribute:".rotation.y",script:u.generateConfig("linearTime",{multiply:1})});e("ScriptAnimation",{target:y.vid,attribute:".rotation.x",script:u.generateConfig("linearTime",{multiply:.5})});o.play();const U=[v,S,x,P,M,z,f,R,b,I,C,E,L,D,G,H,T,w,j];U.forEach(t=>{var a,l,p,h,s;let n="";if(t.children&&t.children.length)for(let m of t.children)n+=`<a href="${t.router}${m}">${m.split("/").pop()}</a>`;const r=document.createElement("div");r.style.display="flex",r.style.position="absolute",r.id=t.router,r.className="module-box",r.innerHTML=`
        <h3>${t.router.toLocaleUpperCase()}</h3>
        <div class="children-box">
          ${n}
        </div>
      `,document.body.appendChild(r),o.registerResources({[`index.${t.router}`]:r});const i=g();e("CSS3DPlane",{vid:i,element:`index.${t.router}`,width:r.offsetWidth,height:r.offsetHeight,scale:{x:.1,y:.1,z:.1},position:{x:((a=t.position)==null?void 0:a.x)||0,y:((l=t.position)==null?void 0:l.y)||0,z:((p=t.position)==null?void 0:p.z)||0},rotation:{y:((h=t.rotation)==null?void 0:h.y)||0},pointerenter:[c.generateConfig("vector3To",{params:{target:i,attribute:".rotation",to:{y:0}}})],pointerleave:[c.generateConfig("vector3To",{params:{target:i,attribute:".rotation",to:{y:((s=t.rotation)==null?void 0:s.y)||0}}})]}),setTimeout(()=>{o.setSize()},0)});