(function(r,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("three"),require("three/examples/jsm/lights/RectAreaLightUniformsLib.js"),require("three/src/lights/LightShadow"),require("three/examples/jsm/renderers/CSS2DRenderer"),require("three/examples/jsm/renderers/CSS3DRenderer")):typeof define=="function"&&define.amd?define(["exports","three","three/examples/jsm/lights/RectAreaLightUniformsLib.js","three/src/lights/LightShadow","three/examples/jsm/renderers/CSS2DRenderer","three/examples/jsm/renderers/CSS3DRenderer"],n):(r=typeof globalThis!="undefined"?globalThis:r||self,n((r["vis-three"]=r["vis-three"]||{},r["vis-three"].core={}),r.three,r.RectAreaLightUniformsLib_js,r.LightShadow,r.CSS2DRenderer,r.CSS3DRenderer))})(this,function(r,n,u,v,_,f){"use strict";var R=Object.defineProperty;var A=(r,n,u)=>n in r?R(r,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[n]=u;var h=(r,n,u)=>(A(r,typeof n!="symbol"?n+"":n,u),u);const T="0.6.0";window.__THREE__||console.error("vis-three dependent on three.js module, pleace run 'npm i three' first."),window.__VIS__?console.warn("Duplicate vis-three frames are introduced"):window.__VIS__=T;const m=new v.LightShadow(new n.OrthographicCamera(-256,256,256,-256));m.autoUpdate=!1,m.needsUpdate=!1,n.AmbientLight.prototype.shadow=m,n.RectAreaLight.prototype.shadow=m,n.HemisphereLight.prototype.shadow=m,u.RectAreaLightUniformsLib.init();class S{constructor(){h(this,"listeners",new Map)}addEventListener(i,e){const t=this.listeners;t.has(i)||t.set(i,[]);const s=t.get(i);s.includes(e)||s.push(e)}hasEventListener(i,e){const t=this.listeners;return t.has(i)?t.get(i).includes(e):!1}removeEventListener(i,e){const t=this.listeners;if(!t.has(i)||!t.get(i).includes(e))return;const s=t.get(i);s.splice(s.indexOf(e),1)}dispatchEvent(i){var s;const e=i.type,t=this.listeners;if(t.has(e))try{(s=t.get(e))==null||s.forEach(o=>{o.call(this,i)})}catch(o){console.error(o)}}once(i,e){const t=function(s){e.call(this,s),this.removeEventListener(i,t)};this.addEventListener(i,t)}emit(i,e={}){var s;const t=this.listeners;if(t.has(i))try{(s=t.get(i))==null||s.forEach(o=>{o.call(this,e)})}catch(o){console.error(o)}}on(i,e){this.addEventListener(i,e)}has(i,e){return this.hasEventListener(i,e)}off(i,e){if(e)this.removeEventListener(i,e);else{const t=this.listeners;if(!t.has(i))return;t.delete(i)}}eventCount(i){return this.listeners.has(i)?this.listeners.get(i).length:0}popLatestEvent(i){!this.listeners.has(i)||this.listeners.get(i).pop()}clear(){this.listeners.clear()}useful(){return Boolean([...this.listeners.keys()].length)}}r.ENGINE_EVENT=void 0,function(a){a.SETDOM="setDom",a.SETSIZE="setSize",a.SETCAMERA="setCamera",a.SETSCENE="setScene",a.RENDER="render",a.DISPOSE="dispose"}(r.ENGINE_EVENT||(r.ENGINE_EVENT={}));class w extends S{constructor(){super();h(this,"pluginTables",new Map);h(this,"strategyTables",new Map);h(this,"dom",document.createElement("div"));h(this,"camera",new n.PerspectiveCamera);h(this,"scene",new n.Scene);this.camera.position.set(50,50,50),this.camera.lookAt(0,0,0)}install(e){if(this.pluginTables.has(e.name))return console.warn("This plugin already exists",e.name),this;const t=s=>this.pluginTables.has(s)?!0:(console.error(`${e.name} must install this plugin before: ${s}`),!1);if(e.deps)if(Array.isArray(e.deps))for(const s of e.deps)t(s);else t(e.deps);return e.install(this),this.pluginTables.set(e.name,e),this}unistall(e){return this.pluginTables.has(e)?(this.pluginTables.get(e).dispose(this),this.pluginTables.delete(e),this):this}exec(e){const t=this.strategyTables;if(t.has(e.name))return console.warn("This strategy already exists",e.name),this;const s=this.pluginTables;for(const o of e.condition)if(!s.has(o))return console.warn(`${e.name} does not meet the conditions for execution: ${o}`),this;return e.exec(this),t.set(e.name,e),this}rollback(e){const t=this.strategyTables;return t.has(e)?(t.get(e).rollback(this),t.delete(e),this):this}setDom(e){return this.dom=e,this.dispatchEvent({type:r.ENGINE_EVENT.SETDOM,dom:e}),this}setSize(e,t){var s,o;return e&&e<=0||t&&t<=0?(console.warn(`you must be input width and height bigger then zero, width: ${e}, height: ${t}`),this):(!e&&(e=((s=this.dom)==null?void 0:s.offsetWidth)||window.innerWidth),!t&&(t=((o=this.dom)==null?void 0:o.offsetHeight)||window.innerHeight),this.dispatchEvent({type:r.ENGINE_EVENT.SETSIZE,width:e,height:t}),this)}setCamera(e,t){return this.dispatchEvent({type:r.ENGINE_EVENT.SETCAMERA,camera:e,oldCamera:this.camera,options:Object.assign({orbitControls:!0,transformControls:!0},t||{})}),this.camera=e,this}setScene(e){return this.dispatchEvent({type:r.ENGINE_EVENT.SETSCENE,scene:e,oldScene:this.scene}),this.scene=e,this}render(e){return this.dispatchEvent({type:r.ENGINE_EVENT.RENDER,delta:e}),this}dispose(){return this.dispatchEvent({type:r.ENGINE_EVENT.DISPOSE}),this}}const B=function(a){const i=new w;return a.plugins&&a.plugins.forEach(e=>{i.install(e)}),a.strategy&&a.strategy.forEach(e=>{i.exec(e)}),i},C=function(a){return()=>a};class b extends n.Texture{constructor(e,t,s,o,c,d,l,g,p){super(e,t,s,o,c,d,l,g,p);h(this,"isVideoTexture",!0);this.format=l!==void 0?l:n.RGBFormat,this.minFilter=d!==void 0?d:n.LinearFilter,this.magFilter=c!==void 0?c:n.LinearFilter,this.generateMipmaps=!1}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image,t="requestVideoFrameCallback"in e;t?this.needsUpdate=!0:t===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class y extends _.CSS2DObject{constructor(e=document.createElement("div")){const t=document.createElement("div"),s=50,o=50;t.style.width=`${s}px`,t.style.height=`${o}px`,t.appendChild(e);super(t);h(this,"geometry");h(this,"_width");h(this,"_height");this.geometry=new n.PlaneBufferGeometry(s,o),this.geometry.computeBoundingBox(),this._width=s,this._height=o}get width(){return this._width}set width(e){this.geometry.dispose(),this.geometry=new n.PlaneBufferGeometry(e,this._height),this.geometry.computeBoundingBox(),this.element.style.width=`${e}px`,this._width=e}get height(){return this._height}set height(e){this.geometry.dispose(),this.geometry=new n.PlaneBufferGeometry(this._width,e),this.geometry.computeBoundingBox(),this.element.style.height=`${e}px`,this._height=e}}class E extends f.CSS3DObject{constructor(e=document.createElement("div")){const t=document.createElement("div"),s=50,o=50;t.style.width=`${s}px`,t.style.height=`${o}px`,t.appendChild(e);super(t);h(this,"geometry");h(this,"_width");h(this,"_height");this.geometry=new n.PlaneBufferGeometry(s,o),this.geometry.computeBoundingBox(),this._width=s,this._height=o}get width(){return this._width}set width(e){this.geometry.dispose(),this.geometry=new n.PlaneBufferGeometry(e,this._height),this.geometry.computeBoundingBox(),this.element.style.width=`${e}px`,this._width=e}get height(){return this._height}set height(e){this.geometry.dispose(),this.geometry=new n.PlaneBufferGeometry(this._width,e),this.geometry.computeBoundingBox(),this.element.style.height=`${e}px`,this._height=e}}class x extends f.CSS3DSprite{constructor(e=document.createElement("div")){const t=document.createElement("div"),s=50,o=50;t.style.width=`${s}px`,t.style.height=`${o}px`,t.appendChild(e),e.classList.add("vis-css3d","vis-css3d-sprite");super(t);h(this,"geometry");h(this,"_width");h(this,"_height");h(this,"cacheBox",new n.Box3);h(this,"cachePosition",new n.Vector3);h(this,"cacheQuaternion",new n.Quaternion);h(this,"cacheScale",new n.Vector3);h(this,"cacheMatrix4",new n.Matrix4);h(this,"rotateMatrix4",new n.Matrix4);this.geometry=new n.PlaneBufferGeometry(s,o),this.geometry.computeBoundingBox(),this._width=s,this._height=o,this.type="CSS3DSprite"}get width(){return this._width}set width(e){this.geometry.dispose(),this.geometry=new n.PlaneBufferGeometry(e,this._height),this.geometry.computeBoundingBox(),this.element.style.width=`${e}px`,this._width=e}get height(){return this._height}set height(e){this.geometry.dispose(),this.geometry=new n.PlaneBufferGeometry(this._width,e),this.geometry.computeBoundingBox(),this.element.style.height=`${e}px`,this._height=e}raycast(e,t){const s=this.cacheBox.copy(this.geometry.boundingBox);this.matrixWorld.decompose(this.cachePosition,this.cacheQuaternion,this.cacheScale);const o=this.rotateMatrix4.lookAt(this.position,e.camera.position,this.up);this.cacheQuaternion.setFromRotationMatrix(o),this.cacheMatrix4.compose(this.cachePosition,this.cacheQuaternion,this.cacheScale),s.applyMatrix4(this.cacheMatrix4),e.ray.intersectsBox(s)&&t.push({distance:e.ray.origin.distanceTo(this.position),object:this,point:this.position})}}class P extends n.Texture{constructor(i,e,t,s,o,c,d,l,g,p){super(i,e,t,s,o,c,d,l,g,p)}}class D extends n.Texture{constructor(i){super(),Object.keys(i).forEach(e=>{this[e]=i[e]}),this.copy(i)}}class V extends y{constructor(e=document.createElement("div")){super(e);h(this,"cacheBox",new n.Box3);h(this,"viewWorldMatrix",new n.Matrix4);h(this,"mvPosition",new n.Vector3);h(this,"matrixScale",new n.Vector3);h(this,"worldScale",new n.Vector3);h(this,"vA",new n.Vector3);h(this,"vB",new n.Vector3);h(this,"vC",new n.Vector3);h(this,"alignedPosition",new n.Vector2);h(this,"rotatedPosition",new n.Vector2);h(this,"intersectPoint",new n.Vector3);this.type="CSS2DPlane",this.element.classList.add("vis-css2d","vis-css2d-plane"),new MutationObserver(()=>{this.matrixScale.set(Math.abs(this.width/100)*.1,Math.abs(this.height/100)*.1,1)}).observe(this.element,{attributeFilter:["style"]})}transformVertex(e,t,s){const o=this.alignedPosition,c=this.rotatedPosition,d=0,l=1;o.copy(e).multiply(s),c.x=l*o.x-d*o.y,c.y=d*o.x+l*o.y,e.copy(t),e.x+=c.x,e.y+=c.y,e.applyMatrix4(this.viewWorldMatrix)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),this.viewWorldMatrix.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),this.mvPosition.setFromMatrixPosition(this.modelViewMatrix),this.worldScale.copy(this.matrixScale).multiplyScalar(-this.mvPosition.z),this.transformVertex(this.vA.set(-.5,-.5,0),this.mvPosition,this.worldScale),this.transformVertex(this.vB.set(.5,-.5,0),this.mvPosition,this.worldScale),this.transformVertex(this.vC.set(.5,.5,0),this.mvPosition,this.worldScale);let s=e.ray.intersectTriangle(this.vA,this.vB,this.vC,!1,this.intersectPoint);if(s===null&&(this.transformVertex(this.vB.set(-.5,.5,0),this.mvPosition,this.worldScale),s=e.ray.intersectTriangle(this.vA,this.vC,this.vB,!1,this.intersectPoint),s===null))return;const o=e.ray.origin.distanceTo(this.intersectPoint);o<e.near||o>e.far||t.push({distance:o,point:this.intersectPoint.clone(),face:null,object:this})}}class L extends E{constructor(e=document.createElement("div")){super(e);h(this,"cacheBox",new n.Box3);this.type="CSS3DPlane",this.element.classList.add("vis-css3d","vis-css3d-plane")}raycast(e,t){const s=this.cacheBox.copy(this.geometry.boundingBox);s.applyMatrix4(this.matrixWorld),e.ray.intersectsBox(s)&&t.push({distance:e.ray.origin.distanceTo(this.position),object:this,point:this.position})}}class M extends x{constructor(i=document.createElement("div")){super(i),this.type="CSS3DSprite",this.element.classList.add("vis-css3d","vis-css3d-plane")}}const j=function(a){return()=>a};r.CSS2DPlane=V,r.CSS3DPlane=L,r.CSS3DSprite=M,r.Engine=w,r.EventDispatcher=S,r.ImageTexture=P,r.LoadTexture=D,r.VideoTexture=b,r.VisCSS2DObject=y,r.VisCSS3DObject=E,r.VisCSS3DSprite=x,r.defineEngine=B,r.definePlugin=C,r.defineStrategy=j,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});