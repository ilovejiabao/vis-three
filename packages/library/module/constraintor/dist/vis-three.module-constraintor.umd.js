(function(r,s){typeof exports=="object"&&typeof module!="undefined"?module.exports=s(require("@vis-three/middleware"),require("uuid"),require("@vis-three/library-constraintor")):typeof define=="function"&&define.amd?define(["@vis-three/middleware","uuid","@vis-three/library-constraintor"],s):(r=typeof globalThis!="undefined"?globalThis:r||self,r["vis-three"]=r["vis-three"]||{},r["vis-three"]["module-constraintor"]=s(r.middleware,r.uuid,r.libraryConstraintor))})(this,function(r,s,f){"use strict";class u extends r.Compiler{constructor(){super()}}const c=function(t,e,n=s.validate){r.Rule(t,e,n)},C=function(){return Object.assign(r.getSymbolConfig(),{})},y=function(){return Object.assign(C(),{target:"",targetAttr:"",ref:"",refAttr:"",offset:null})},m={reg:new RegExp(".*"),handler(t){t.processor.set(t),t.target.constrain()}},i=new WeakMap;var d=r.defineProcessor({type:"NumberConstraintor",config:y,commands:{set:{target({target:t,config:e,engine:n}){e.target&&e.targetAttr&&(t.setTarget(n.getConfigBySymbol(e.target),e.targetAttr),t.constrain())},targetAttr({target:t,config:e,engine:n}){e.target&&e.targetAttr&&(t.setTarget(n.getConfigBySymbol(e.target),e.targetAttr),t.constrain())},ref({target:t,config:e,engine:n}){e.ref&&e.refAttr&&(t.setReference(n.getConfigBySymbol(e.ref),e.refAttr),t.constrain())},refAttr({target:t,config:e,engine:n}){e.ref&&e.refAttr&&(t.setReference(n.getConfigBySymbol(e.ref),e.refAttr),t.constrain())},$reg:[m]}},create(t,e){const n=e.getObjectBySymbol(t.ref),o=new f.NumberConstraintor(e.getConfigBySymbol(t.target),t.targetAttr,e.getConfigBySymbol(t.ref),t.refAttr,t.offset?{...t.offset}:null);if(n){o.constrain();const a=()=>{o.constrain()};i.set(o,a),r.Bus.compilerEvent.on(n,`${r.COMPILER_EVENT.COMPILE}:${t.refAttr}`,a)}return o},dispose(t){i.delete(t)}}),l={type:"constraintor",compiler:u,rule:c,processors:[d],lifeOrder:r.SUPPORT_LIFE_CYCLE.NINE};return l});