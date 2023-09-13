(function(i,s){typeof exports=="object"&&typeof module!="undefined"?s(exports,require("@vis-three/middleware"),require("three")):typeof define=="function"&&define.amd?define(["exports","@vis-three/middleware","three"],s):(i=typeof globalThis!="undefined"?globalThis:i||self,s((i["vis-three"]=i["vis-three"]||{},i["vis-three"]["module-geometry"]={}),i.middleware,i.three))})(this,function(i,s,u){"use strict";var ze=Object.defineProperty;var De=(i,s,u)=>s in i?ze(i,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[s]=u;var v=(i,s,u)=>(De(i,typeof s!="symbol"?s+"":s,u),u);const F=function(e,t){t.center&&e.center(),e.computeBoundingBox();const r=e.boundingBox,o=t.position,n=t.rotation,a=t.scale,h=new u.Quaternion().setFromEuler(new u.Euler(n.x,n.y,n.z,"XYZ"));return e.applyQuaternion(h),e.scale(a.x,a.y,a.z),t.center&&e.center(),e.computeBoundingBox(),e.translate((r.max.x-r.min.x)/2*o.x,(r.max.y-r.min.y)/2*o.y,(r.max.z-r.min.z)/2*o.z),e},d={reg:new RegExp(".*"),handler({config:e,target:t,processor:r,engine:o,compiler:n}){const a=r.create(e,o,n);t.copy(a),t.uuid=a.uuid,r.dispose(a,o,n)}},m={add:{groups({target:e,value:t}){e.addGroup(t.start,t.count,t.materialIndex)},$reg:[d]},set:{groups(e){const{path:t,target:r,config:o}=e;if(t[1]!==void 0){r.groups.splice(Number(e.path[1]),1);const n=o.groups[t[1]];r.addGroup(n.start,n.count,n.materialIndex)}else console.warn("geometry processor can not set group",e)},$reg:[d]},delete:{groups({target:e,key:t}){e.groups.splice(Number(t),1)},$reg:[d]}},p=function(e,t){e.clearGroups();for(const r of t.groups)e.addGroup(r.start,r.count,r.materialIndex);return F(e,t)},y=function(e){e.dispose()},g=function(){return{vid:"",type:"Geometry",name:"",center:!0,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1},groups:[]}},R=function(){return Object.assign(g(),{width:5,height:5,depth:5,widthSegments:1,heightSegments:1,depthSegments:1})},I=function(){return Object.assign(g(),{radius:3,widthSegments:32,heightSegments:32,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI})},V=function(){return Object.assign(g(),{width:5,height:5,widthSegments:1,heightSegments:1})},U=function(){return Object.assign(g(),{radius:3,segments:8,thetaStart:0,thetaLength:Math.PI*2})},_=function(){return Object.assign(g(),{radius:3,height:5,radialSegments:8,heightSegments:1,openEnded:!1,thetaStart:0,thetaLength:Math.PI*2})},N=function(){return Object.assign(g(),{radius:3,tube:.4,radialSegments:8,tubularSegments:6,arc:Math.PI*2})},$=function(){return Object.assign(g(),{innerRadius:2,outerRadius:3,thetaSegments:8,phiSegments:8,thetaStart:0,thetaLength:Math.PI*2})},Q=function(){return Object.assign(g(),{url:""})},Y=function(){return Object.assign(g(),{attribute:{position:[],color:[],index:[],normal:[],uv:[],uv2:[]}})},k=function(){return Object.assign(g(),{radiusTop:3,radiusBottom:3,height:5,radialSegments:8,heightSegments:1,openEnded:!1,thetaStart:0,thetaLength:Math.PI*2})},H=function(){return Object.assign(g(),{target:"",thresholdAngle:1})},P=function(){return Object.assign(g(),{center:!1,path:[],divisions:36,space:!0})},W=function(){return Object.assign(P(),{center:!1})},q=function(){return Object.assign(P(),{center:!1})},X=function(){return Object.assign(P(),{center:!1})},Z=function(){return Object.assign(P(),{center:!1})},L=function(){return Object.assign(g(),{center:!1,path:[],tubularSegments:64,radius:1,radialSegments:8,closed:!1})},J=function(){return Object.assign(L(),{center:!1})},K=function(){return Object.assign(L(),{center:!1})},ee=function(){return Object.assign(g(),{center:!1,shape:"",curveSegments:12})},te=function(){return Object.assign(g(),{center:!1,path:[],curveSegments:12})},re=function(){return Object.assign(g(),{center:!1,shapes:"",options:{curveSegments:12,steps:1,depth:1,bevelEnabled:!0,bevelThickness:.2,bevelSize:.1,bevelOffset:0,bevelSegments:3,extrudePath:""}})},ne=function(){return Object.assign(g(),{center:!1,path:"",space:!1,divisions:36})},se=function(){return Object.assign(g(),{path:"",divisions:32,segments:12,phiStart:0,phiLength:Math.PI*2})};var oe=s.defineProcessor({type:"BoxGeometry",config:R,commands:m,create:e=>p(new u.BoxBufferGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments),e),dispose:y}),ue=s.defineProcessor({type:"CircleGeometry",config:U,commands:m,create:e=>p(new u.CircleBufferGeometry(e.radius,e.segments,e.thetaStart,e.thetaLength),e),dispose:y}),ae=s.defineProcessor({type:"ConeGeometry",config:_,commands:m,create:e=>p(new u.ConeBufferGeometry(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength),e),dispose:y});class b extends u.BufferGeometry{constructor(r){super();v(this,"type","LoadBufferGeometry");r&&this.copy(r)}}class G extends u.BufferGeometry{constructor(r=[],o=36,n=!0){super();v(this,"parameters");this.type="CurveGeometry",this.parameters={path:r.map(a=>a.clone()),space:n,divisions:o}}}class B extends G{constructor(t=[],r=36,o=!0){super(t,r,o),this.type="CubicBezierCurveGeometry";const n=new u.CurvePath;if(t.length<4){console.warn("CubicBezierCurveGeometry path length at least 4.");return}const a=4+(t.length-4)-(t.length-4)%3;for(let c=2;c<a;c+=3)n.add(new u.CubicBezierCurve3(t[c-2],t[c-1],t[c],t[c+1]));const h=n.curves.reduce((c,l)=>c+=l.arcLengthDivisions,0);if(r>h){const c=Math.ceil((r-h)/n.curves.length);n.curves.forEach(l=>{l.arcLengthDivisions=l.arcLengthDivisions*(c+1),l.updateArcLengths()})}this.setFromPoints(o?n.getSpacedPoints(r):n.getPoints(r))}}class T extends G{constructor(t=[],r=36,o=!0){if(super(t,r,o),this.type="LineCurveGeometry",!t.length){console.warn("LineCurveGeometry path length at least 1.");return}const n=new u.CurvePath;for(let h=1;h<t.length;h+=1)n.add(new u.LineCurve3(t[h-1],t[h]));const a=n.curves.reduce((h,c)=>h+=c.arcLengthDivisions,0);if(r>a){const h=Math.ceil((r-a)/n.curves.length);n.curves.forEach(c=>{c.arcLengthDivisions=c.arcLengthDivisions*(h+1),c.updateArcLengths()})}this.setFromPoints(o?n.getSpacedPoints(r):n.getPoints(r))}}class O extends G{constructor(t=[],r=36,o=!0){super(t,r,o),this.type="QuadraticBezierCurveGeometry";const n=new u.CurvePath;if(t.length<3){console.warn("QuadraticBezierCurveGeometry path length at least 3.");return}const a=3+(t.length-3)-(t.length-3)%2;for(let c=1;c<a;c+=2)n.add(new u.QuadraticBezierCurve3(t[c-1],t[c],t[c+1]));const h=n.curves.reduce((c,l)=>c+=l.arcLengthDivisions,0);if(r>h){const c=Math.ceil((r-h)/n.curves.length);n.curves.forEach(l=>{l.arcLengthDivisions=l.arcLengthDivisions*(c+1),l.updateArcLengths()})}this.setFromPoints(o?n.getSpacedPoints(r):n.getPoints(r))}}class M extends G{constructor(t=[],r=36,o=!0){if(super(t,r,o),this.type="SplineCurveGeometry",!t.length){console.warn("SplineCurveGeometry path length at least 1.");return}const n=new u.CatmullRomCurve3(t);this.setFromPoints(o?n.getSpacedPoints(r):n.getPoints(r))}}class x extends u.ShapeBufferGeometry{constructor(t=[new u.Vector2(0,0)],r=12){const o=new u.Shape,n=t[0];if(n){o.moveTo(n.x,n.y);for(let a=1;a<t.length;a+=1)o.lineTo(t[a].x,t[a].y)}super(o,r),this.type="LineShapeGeometry"}}class j extends u.TubeGeometry{constructor(t=[],r=64,o=1,n=8,a=!1){if(!t.length){console.warn("LineTubeGeometry path length at least 1.");return}const h=new u.CurvePath;for(let c=1;c<t.length;c+=1)h.add(new u.LineCurve3(t[c-1],t[c]));super(h,r,o,n,a),this.type="LineTubeGeometry"}}class A extends u.TubeGeometry{constructor(t=[],r=64,o=1,n=8,a=!1){if(!t.length){console.warn("SplineTubeGeometry path length at least 1.");return}const h=new u.CatmullRomCurve3(t);super(h,r,o,n,a),this.type="SplineTubeGeometry"}}class w extends u.BufferGeometry{constructor(r=new u.Path,o=36,n=!0){super();v(this,"parameters");this.type="PathGeometry",this.parameters={path:r,space:n,divisions:o},r.curves.length&&this.setFromPoints(n?r.getSpacedPoints(o):r.getPoints(o))}}var ce=s.defineProcessor({type:"CubicBezierCurveGeometry",config:X,commands:m,create:e=>p(new B(e.path.map(t=>new u.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e),dispose:y});const ie=function(e){const t=new u.BufferGeometry;return e.position.length&&t.setAttribute("position",new u.Float32BufferAttribute(e.position,3)),e.color.length&&t.setAttribute("color",new u.Float32BufferAttribute(e.color,3)),e.normal.length&&t.setAttribute("normal",new u.Float32BufferAttribute(e.normal,3)),e.uv.length&&t.setAttribute("uv",new u.Float32BufferAttribute(e.uv,2)),e.uv2.length&&t.setAttribute("uv2",new u.Float32BufferAttribute(e.uv2,2)),e.index.length&&t.setIndex(e.index),t};var me=s.defineProcessor({type:"CustomGeometry",config:Y,commands:m,create(e){return p(ie(e.attribute),e)},dispose(e){e.dispose()}}),pe=s.defineProcessor({type:"CylinderGeometry",config:k,commands:m,create:e=>p(new u.CylinderBufferGeometry(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength),e),dispose:y});const he=new u.EdgesGeometry(new u.BoxBufferGeometry(5,5,5));var ye=s.defineProcessor({type:"EdgesGeometry",config:H,commands:m,create(e,t){const r=t.compilerManager.getObjectfromModule(s.MODULETYPE.GEOMETRY,e.target);return!r||!(r instanceof u.BufferGeometry)?(console.error(`engine rescoure can not found url: ${e.target}`),he):p(new u.EdgesGeometry(r,e.thresholdAngle),e)},dispose(e){e.dispose()}});class z extends s.Compiler{constructor(){super()}}const ge=function(e,t){s.Rule(e,t)};var le=s.defineProcessor({type:"LineCurveGeometry",config:W,commands:m,create:e=>p(new T(e.path.map(t=>new u.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e),dispose:y}),Ge=s.defineProcessor({type:"LineShapeGeometry",config:te,commands:m,create:e=>p(new x(e.path.map(t=>new u.Vector2(t.x,t.y)),e.curveSegments),e),dispose:y}),fe=s.defineProcessor({type:"LineTubeGeometry",config:J,commands:m,create:e=>p(new j(e.path.map(t=>new u.Vector3(t.x,t.y,t.z)),e.tubularSegments,e.radius,e.radialSegments,e.closed),e),dispose:y}),Pe=s.defineProcessor({type:"LoadGeometry",config:Q,commands:m,create(e,t){const r=t.resourceManager.resourceMap.get(e.url);return!r&&!(r instanceof u.BufferGeometry)?(console.error(`engine rescoure can not found url: ${e.url}`),new u.BoxBufferGeometry(5,5,5)):p(new b(r),e)},dispose(e){e.dispose()}}),ve=s.defineProcessor({type:"PlaneGeometry",config:V,commands:m,create:e=>p(new u.PlaneBufferGeometry(e.width,e.height,e.widthSegments,e.heightSegments),e),dispose:y}),de=s.defineProcessor({type:"QuadraticBezierCurveGeometry",config:Z,commands:m,create:e=>p(new O(e.path.map(t=>new u.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e),dispose:y}),Ce=s.defineProcessor({type:"RingGeometry",config:$,commands:m,create:e=>p(new u.RingBufferGeometry(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength),e),dispose:y}),Se=s.defineProcessor({type:"SphereGeometry",config:I,commands:m,create:e=>p(new u.SphereBufferGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength),e),dispose:y}),Ee=s.defineProcessor({type:"SplineCurveGeometry",config:q,commands:m,create:e=>p(new M(e.path.map(t=>new u.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e),dispose:y}),Le=s.defineProcessor({type:"SplineTubeGeometry",config:K,commands:m,create:e=>p(new A(e.path.map(t=>new u.Vector3(t.x,t.y,t.z)),e.tubularSegments,e.radius,e.radialSegments,e.closed),e),dispose:y}),be=s.defineProcessor({type:"TorusGeometry",config:N,commands:m,create:e=>p(new u.TorusGeometry(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc),e),dispose:y});const f=new WeakMap,D=function(e,t,r){f.has(e)||f.set(e,new Set),f.get(e).add({target:t,eventFun:r})};var Be=s.defineProcessor({type:"ExtrudeGeometry",config:re,commands:m,create(e,t){const r=t.compilerManager.getObjectfromModule(s.MODULETYPE.SHAPE,e.shapes)||void 0,o=t.compilerManager.getObjectfromModule(s.MODULETYPE.PATH,e.options.extrudePath)||void 0,n=new u.ExtrudeBufferGeometry(r,Object.assign({},e.options,{extrudePath:o}));if(r){const a=()=>{e.shapes=e.shapes};s.Bus.compilerEvent.on(r,s.COMPILER_EVENT.UPDATE,a),D(n,r,a)}if(o){const a=()=>{e.options.extrudePath=e.options.extrudePath};s.Bus.compilerEvent.on(o,s.COMPILER_EVENT.UPDATE,a),D(n,o,a)}return p(n,e)},dispose(e,t,r){const o=f.get(e);o&&o.forEach(n=>{s.Bus.compilerEvent.off(n.target,s.COMPILER_EVENT.UPDATE,n.eventFun)}),f.delete(e),y(e)}});const C=new WeakMap,Te=function(e,t,r){C.set(e,{target:t,eventFun:r})};var Oe=s.defineProcessor({type:"PathGeometry",config:ne,commands:m,create(e,t){const r=t.compilerManager.getObjectfromModule(s.MODULETYPE.PATH,e.path)||void 0,o=new w(r,e.divisions,e.space);if(r){const n=()=>{e.path=e.path};s.Bus.compilerEvent.on(r,s.COMPILER_EVENT.UPDATE,n),Te(o,r,n)}return p(o,e)},dispose(e,t,r){const o=C.get(e);o&&s.Bus.compilerEvent.off(o.target,s.COMPILER_EVENT.UPDATE,o.eventFun),C.delete(e),y(e)}});const S=new WeakMap,Me=function(e,t,r){S.set(e,{target:t,eventFun:r})};var xe=s.defineProcessor({type:"ShapeGeometry",config:ee,commands:m,create(e,t){const r=t.compilerManager.getObjectfromModule(s.MODULETYPE.SHAPE,e.shape)||void 0,o=new u.ShapeBufferGeometry(r,e.curveSegments);if(r){const n=()=>{e.shape=e.shape};s.Bus.compilerEvent.on(r,s.COMPILER_EVENT.UPDATE,n),Me(o,r,n)}return p(o,e)},dispose(e,t,r){const o=S.get(e);o&&s.Bus.compilerEvent.off(o.target,s.COMPILER_EVENT.UPDATE,o.eventFun),S.delete(e),y(e)}});const E=new WeakMap,je=function(e,t,r){E.set(e,{target:t,eventFun:r})};var Ae=s.defineProcessor({type:"LatheGeometry",config:se,commands:m,create(e,t){const r=t.compilerManager.getObjectfromModule(s.MODULETYPE.PATH,e.path)||void 0,o=new u.LatheGeometry(r?r.getPoints(e.divisions):void 0,e.segments,e.phiStart,e.phiLength);if(r){const n=()=>{e.path=e.path};s.Bus.compilerEvent.on(r,s.COMPILER_EVENT.UPDATE,n),je(o,r,n)}return p(o,e)},dispose(e){const t=E.get(e);t&&s.Bus.compilerEvent.off(t.target,s.COMPILER_EVENT.UPDATE,t.eventFun),E.delete(e),y(e)}}),we={type:"geometry",compiler:z,rule:ge,lifeOrder:s.SUPPORT_LIFE_CYCLE.TWO,processors:[oe,ue,ae,ce,me,pe,ye,le,Ge,fe,Pe,ve,de,Ce,Se,Ee,Le,be,Be,Oe,xe,Ae]};i.CubicBezierCurveGeometry=B,i.CurveGeometry=G,i.GeometryCompiler=z,i.LineCurveGeometry=T,i.LineShapeGeometry=x,i.LineTubeGeometry=j,i.LoadGeometry=b,i.PathGeometry=w,i.QuadraticBezierCurveGeometry=O,i.SplineCurveGeometry=M,i.SplineTubeGeometry=A,i.default=we,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
