import{C as l,T as c,a as v,g as t}from"../Vis.es.321d2553.js";import{g as n}from"../vue.esm.browser.min.816a6d7c.js";import"../three.5dc0577a.js";import"../vis-three.a3d50446.js";const r=new l({width:800,height:160}).preview({top:"5%",left:"5%"}),m=new c({},{canvasExtends:!0}),a=new v({textureDataSupport:m}).registerResources({"example.canvas":r.get()});a.loaderManager.setPath("/vis-three/examples/");const i=t("AmbientLight"),s=a.reactiveConfig(n.observable(t("CanvasTexture",{url:"example.canvas",canvasExtends:{number:0,text:"Hello World"}},!1))),o=t("SpriteMaterial",{map:s.vid}),p=t("Sprite",{material:o.vid,position:{y:15},scale:{x:25,y:5}}),d=t("Scene",{children:[i.vid,p.vid]});a.applyConfig(i,s,o,p,d);new n({el:"#app",data(){return{canvasTexture:s}},methods:{updateCanvas(){r.clear().draw(e=>{e.textBaseline="middle",e.textAlign="center",e.fillStyle="rgb(206, 42, 230)",e.font=" bold 72px \u5FAE\u8F6F\u96C5\u9ED1",e.fillText(`${this.canvasTexture.canvasExtends.text} ${this.canvasTexture.canvasExtends.number} `,400,80)}),this.canvasTexture.needsUpdate=!0}},mounted(){this.updateCanvas(),a.setDom(document.getElementById("app")).setSize().setScene(d.vid).play()}});
