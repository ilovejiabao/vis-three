(function(r,o){typeof exports=="object"&&typeof module!="undefined"?o(exports,require("@vis-three/middleware"),require("three"),require("@vis-three/utils")):typeof define=="function"&&define.amd?define(["exports","@vis-three/middleware","three","@vis-three/utils"],o):(r=typeof globalThis!="undefined"?globalThis:r||self,o((r["vis-three"]=r["vis-three"]||{},r["vis-three"]["module-material"]={}),r.middleware,r.three,r.utils))})(this,function(r,o,i,m){"use strict";class h extends o.Compiler{constructor(){super()}}const w=function(e,a){o.Rule(e,a)},l=function(){return{vid:"",type:"Material",alphaTest:0,colorWrite:!0,depthTest:!0,depthWrite:!0,fog:!0,name:"",needsUpdate:!1,opacity:1,dithering:!1,shadowSide:null,side:i.FrontSide,toneMapped:!0,transparent:!1,visible:!0,blendDst:i.OneMinusSrcAlphaFactor,blendDstAlpha:null,blendEquation:i.AddEquation,blendEquationAlpha:null,blending:i.NormalBlending,blendSrc:i.SrcAlphaFactor,blendSrcAlpha:null,polygonOffset:!1,polygonOffsetFactor:0,polygonOffsetUnits:0}},S=function(){return Object.assign(l(),{color:"rgb(255, 255, 255)",combine:i.MultiplyOperation,aoMapIntensity:1,fog:!0,lightMapIntensity:1,reflectivity:1,refractionRatio:.98,wireframe:!1,wireframeLinecap:"round",wireframeLinejoin:"round",wireframeLinewidth:1,map:"",envMap:"",alphaMap:"",aoMap:"",lightMap:"",specularMap:""})},d=function(){return Object.assign(l(),{aoMapIntensity:1,bumpScale:1,color:"rgb(255, 255, 255)",displacementScale:1,displacementBias:0,emissive:"rgb(0, 0, 0)",emissiveIntensity:1,envMapIntensity:1,flatShading:!1,lightMapIntensity:1,metalness:0,normalMapType:i.TangentSpaceNormalMap,refractionRatio:.98,roughness:1,wireframe:!1,wireframeLinecap:"round",wireframeLinejoin:"round",roughnessMap:"",normalMap:"",metalnessMap:"",map:"",lightMap:"",envMap:"",emissiveMap:"",displacementMap:"",bumpMap:"",alphaMap:"",aoMap:""})},y=function(){return Object.assign(d(),{attenuationColor:"rgb(255, 255, 255)",attenuationDistance:0,clearcoat:0,clearcoatNormalScale:{x:1,y:1},clearcoatRoughness:0,ior:1.5,reflectivity:.5,sheen:0,sheenRoughness:1,sheenColor:"rgb(255, 255, 255)",specularIntensity:0,specularColor:"rgb(255, 255, 255)",thickness:0,transmission:0,clearcoatMap:"",clearcoatNormalMap:"",clearcoatRoughnessMap:"",sheenRoughnessMap:"",sheenColorMap:"",specularIntensityMap:"",specularColorMap:"",thicknessMap:"",transmissionMap:""})},v=function(){return Object.assign(l(),{aoMapIntensity:1,bumpScale:1,color:"rgb(255, 255, 255)",displacementScale:1,displacementBias:0,emissive:"rgb(0, 0, 0)",emissiveIntensity:1,envMapIntensity:1,flatShading:!1,lightMapIntensity:1,normalMapType:i.TangentSpaceNormalMap,refractionRatio:.98,wireframe:!1,wireframeLinecap:"round",wireframeLinejoin:"round",specular:"rgb(17, 17, 17)",shininess:30,combine:i.MultiplyOperation,normalMap:"",map:"",lightMap:"",envMap:"",emissiveMap:"",displacementMap:"",bumpMap:"",alphaMap:"",aoMap:"",specularMap:""})},b=function(){return Object.assign(l(),{color:"rgb(255, 255, 255)",rotation:0,map:"",alphaMap:"",sizeAttenuation:!0})},C=function(){return Object.assign(l(),{color:"rgb(255, 255, 255)",linecap:"round",linejoin:"round",linewidth:1})},P=function(){return Object.assign(l(),{map:"",alphaMap:"",color:"rgb(255, 255, 255)",sizeAttenuation:!0,size:1})},O=function(){return Object.assign(l(),{shader:"defaultShader",uniforms:{}})},u={reg:new RegExp("transparent|sizeAttenuation"),handler({target:e,key:a,value:n}){e[a]=n,e.needsUpdate=!0}},j=function({target:e,key:a,value:n,engine:t}){o.globalAntiShake.exec(c=>{if(!n)return e[a]=null,e.needsUpdate=!0,!0;const g=t.compilerManager.getObjectBySymbol(n);return g instanceof i.Texture?(e[a]=g,e.needsUpdate=!0,!0):(c&&console.warn(`this url resource is not instance of Texture: ${a}`,n,g),e[a]=null,!1)})},f={reg:new RegExp("map$","i"),handler:j},s=function({target:e,key:a,value:n}){e[a].copy(new i.Color(n))},M=function(e,a,n){const t={};for(const c of Object.keys(a))c.toLocaleLowerCase().endsWith("map")&&a[c]?(j({target:e,key:c,value:a[c],engine:n}),t[c]=!0):e[c]instanceof i.Color&&(e[c]=new i.Color(a[c]),t[c]=!0);return m.syncObject(a,e,t),e.needsUpdate=!0,e},p=function(e){e.dispose()};var L=o.defineProcessor({type:"MeshBasicMaterial",config:S,commands:{set:{color:s,$reg:[f,u]}},create:function(e,a){return M(new i.MeshBasicMaterial,e,a)},dispose:p}),B=o.defineProcessor({type:"MeshPhongMaterial",config:v,commands:{set:{color:s,emissive:s,specular:s,$reg:[f,u]}},create:function(e,a){return M(new i.MeshPhongMaterial,e,a)},dispose:p}),R=o.defineProcessor({type:"MeshPhysicalMaterial",config:y,commands:{set:{color:s,emissive:s,specularColor:s,sheenColor:s,attenuationColor:s,$reg:[f,u]}},create:function(e,a){return M(new i.MeshPhysicalMaterial,e,a)},dispose:p}),I=o.defineProcessor({type:"MeshStandardMaterial",config:d,commands:{set:{color:s,emissive:s,$reg:[f,u]}},create:function(e,a){return M(new i.MeshStandardMaterial,e,a)},dispose:p}),T=o.defineProcessor({type:"PointsMaterial",config:P,commands:{set:{color:s,$reg:[f,u]}},create:function(e,a){return M(new i.PointsMaterial,e,a)},dispose:p}),A=o.defineProcessor({type:"ShaderMaterial",config:O,commands:{set:{shader({target:e,value:a}){const n=o.ShaderGeneratorManager.getShader(a);n!=null&&n.vertexShader&&(e.vertexShader=n.vertexShader),n!=null&&n.fragmentShader&&(e.fragmentShader=n.fragmentShader),n!=null&&n.uniforms&&(e.uniforms=n.uniforms),n!=null&&n.defines&&(e.defines=n.defines),e.needsUpdate=!0},$reg:[u]}},create:function(e,a){const n=new i.ShaderMaterial,t=o.ShaderGeneratorManager.getShader(e.shader);return t!=null&&t.vertexShader&&(n.vertexShader=t.vertexShader),t!=null&&t.fragmentShader&&(n.fragmentShader=t.fragmentShader),t!=null&&t.uniforms&&(n.uniforms=t.uniforms),t!=null&&t.defines&&(n.defines=t.defines),m.syncObject(e,n,{type:!0,shader:!0}),n.needsUpdate=!0,n},dispose:p}),U=o.defineProcessor({type:"SpriteMaterial",config:b,commands:{set:{color:s,$reg:[f,u]}},create:function(e,a){return M(new i.SpriteMaterial,e,a)},dispose:p}),$=o.defineProcessor({type:"LineBasicMaterial",config:C,commands:{set:{color:s,$reg:[f,u]}},create:function(e,a){return M(new i.LineBasicMaterial,e,a)},dispose:p}),x={type:"material",compiler:h,rule:w,processors:[$,L,B,R,I,T,A,U],lifeOrder:o.SUPPORT_LIFE_CYCLE.TWO};r.MaterialCompiler=h,r.default=x,r.getLineBasicMaterialConfig=C,r.getMaterialConfig=l,r.getMeshBasicMaterialConfig=S,r.getMeshPhongMaterialConfig=v,r.getMeshPhysicalMaterialConfig=y,r.getMeshStandardMaterialConfig=d,r.getPointsMaterialConfig=P,r.getShaderMaterialConfig=O,r.getSpriteMaterialConfig=b,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});