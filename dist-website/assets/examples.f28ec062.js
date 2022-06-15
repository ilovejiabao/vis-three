import{_ as G,n as v}from"./nprogress.cc2648e5.js";import{v as B,B as q,A as P,T as z,F as d,G as S,H as h,I as c,J as I,U as T,V as Y,K as F,L as Z,M as Q,W as _,X as V,Q as O,R as X,Y as W,Z as $,S as w,$ as b,a0 as N,a1 as R}from"./Antd.8511b24e.js";var L=[{name:"convenient/History",url:"convenient/History.html",poster:"poster/convenient/History.jpg"},{name:"core/ProxyBroadcast",url:"core/ProxyBroadcast.html",poster:"poster/core/ProxyBroadcast.jpg"},{name:"develop/CanvasExtends",url:"develop/CanvasExtends.html",poster:"poster/develop/CanvasExtends.jpg"},{name:"develop/configure",url:"develop/configure.html",poster:"poster/develop/configure.jpg"},{name:"develop/Vue2-ConfigExtends",url:"develop/Vue2-ConfigExtends.html",poster:"poster/develop/Vue2-ConfigExtends.jpg"},{name:"develop/Vue2",url:"develop/Vue2.html",poster:"poster/develop/Vue2.jpg"},{name:"develop/Vue3",url:"develop/Vue3.html",poster:"poster/develop/Vue3.jpg"},{name:"displayer/MaterialDisplayer",url:"displayer/MaterialDisplayer.html",poster:"poster/displayer/MaterialDisplayer.jpg"},{name:"displayer/TextureDisplayer",url:"displayer/TextureDisplayer.html",poster:"poster/displayer/TextureDisplayer.jpg"},{name:"engine/DisplayEngine",url:"engine/DisplayEngine.html",poster:"poster/engine/DisplayEngine.jpg"},{name:"engine/DisplayEngineSupport",url:"engine/DisplayEngineSupport.html",poster:"poster/engine/DisplayEngineSupport.jpg"},{name:"engine/Engine",url:"engine/Engine.html",poster:"poster/engine/Engine.jpg"},{name:"engine/ModelingEngine",url:"engine/ModelingEngine.html",poster:"poster/engine/ModelingEngine.jpg"},{name:"engine/ModelingEngineSupport",url:"engine/ModelingEngineSupport.html",poster:"poster/engine/ModelingEngineSupport.jpg"},{name:"helper/CameraHelper",url:"helper/CameraHelper.html",poster:"poster/helper/CameraHelper.jpg"},{name:"helper/directionalLight",url:"helper/directionalLight.html",poster:"poster/helper/directionalLight.jpg"},{name:"helper/GroupHelper",url:"helper/GroupHelper.html",poster:"poster/helper/GroupHelper.jpg"},{name:"helper/PointLightHelper",url:"helper/PointLightHelper.html",poster:"poster/helper/PointLightHelper.jpg"},{name:"helper/SpotLightHelper",url:"helper/SpotLightHelper.html",poster:"poster/helper/SpotLightHelper.jpg"},{name:"homepage/vis",url:"homepage/vis.html",poster:"poster/homepage/vis.jpg"},{name:"library/EventLibrary",url:"library/EventLibrary.html",poster:"poster/library/EventLibrary.jpg"},{name:"loader/VideoLoader",url:"loader/VideoLoader.html",poster:"poster/loader/VideoLoader.jpg"},{name:"manager/EventManager",url:"manager/EventManager.html",poster:"poster/manager/EventManager.jpg"},{name:"manager/LoaderManager",url:"manager/LoaderManager.html",poster:"poster/manager/LoaderManager.jpg"},{name:"manager/ResourceManager",url:"manager/ResourceManager.html",poster:"poster/manager/ResourceManager.jpg"},{name:"modifier/BooleanModifier",url:"modifier/BooleanModifier.html",poster:"poster/modifier/BooleanModifier.jpg"},{name:"plugin/AxesHelperPlugin",url:"plugin/AxesHelperPlugin.html",poster:"poster/plugin/AxesHelperPlugin.jpg"},{name:"plugin/CSS3DRendererPlugin",url:"plugin/CSS3DRendererPlugin.html",poster:"poster/plugin/CSS3DRendererPlugin.jpg"},{name:"plugin/DisplayModePlugin",url:"plugin/DisplayModePlugin.html",poster:"poster/plugin/DisplayModePlugin.jpg"},{name:"plugin/GridHelperPlugin",url:"plugin/GridHelperPlugin.html",poster:"poster/plugin/GridHelperPlugin.jpg"},{name:"plugin/ObjectHelperPlugin",url:"plugin/ObjectHelperPlugin.html",poster:"poster/plugin/ObjectHelperPlugin.jpg"},{name:"plugin/SelectionPlugin",url:"plugin/SelectionPlugin.html",poster:"poster/plugin/SelectionPlugin.jpg"},{name:"plugin/StatsPlugin",url:"plugin/StatsPlugin.html",poster:"poster/plugin/StatsPlugin.jpg"},{name:"plugin/TransformControlsPlugin",url:"plugin/TransformControlsPlugin.html",poster:"poster/plugin/TransformControlsPlugin.jpg"},{name:"plugin/ViewpointPlugin",url:"plugin/ViewpointPlugin.html",poster:"poster/plugin/ViewpointPlugin.jpg"},{name:"plugin/WebGLRendererPlugin",url:"plugin/WebGLRendererPlugin.html",poster:"poster/plugin/WebGLRendererPlugin.jpg"},{name:"support/AnimationSupport",url:"support/AnimationSupport.html",poster:"poster/support/AnimationSupport.jpg"},{name:"support/CameraSupport",url:"support/CameraSupport.html",poster:"poster/support/CameraSupport.jpg"},{name:"support/CSS3DSupport",url:"support/CSS3DSupport.html",poster:"poster/support/CSS3DSupport.jpg"},{name:"support/EventSupport",url:"support/EventSupport.html",poster:"poster/support/EventSupport.jpg"},{name:"support/GeometrySupport",url:"support/GeometrySupport.html",poster:"poster/support/GeometrySupport.jpg"},{name:"support/GroupSupport",url:"support/GroupSupport.html",poster:"poster/support/GroupSupport.jpg"},{name:"support/LightSupport",url:"support/LightSupport.html",poster:"poster/support/LightSupport.jpg"},{name:"support/LineSupport",url:"support/LineSupport.html",poster:"poster/support/LineSupport.jpg"},{name:"support/MaterialSupport",url:"support/MaterialSupport.html",poster:"poster/support/MaterialSupport.jpg"},{name:"support/MeshSupport",url:"support/MeshSupport.html",poster:"poster/support/MeshSupport.jpg"},{name:"support/PassSupport",url:"support/PassSupport.html",poster:"poster/support/PassSupport.jpg"},{name:"support/PointsSupport",url:"support/PointsSupport.html",poster:"poster/support/PointsSupport.jpg"},{name:"support/SceneSupport",url:"support/SceneSupport.html",poster:"poster/support/SceneSupport.jpg"},{name:"support/SpriteSupport",url:"support/SpriteSupport.html",poster:"poster/support/SpriteSupport.jpg"},{name:"support/TextureSupport",url:"support/TextureSupport.html",poster:"poster/support/TextureSupport.jpg"},{name:"test/Pressure-canvas",url:"test/Pressure-canvas.html",poster:"poster/test/Pressure-canvas.jpg"},{name:"test/Pressure-css3D",url:"test/Pressure-css3D.html",poster:"poster/test/Pressure-css3D.jpg"}],ee=function(r,o){if(o=o.split(":")[0],r=+r,!r)return!1;switch(o){case"http":case"ws":return r!==80;case"https":case"wss":return r!==443;case"ftp":return r!==21;case"gopher":return r!==70;case"file":return!1}return r!==0},C={},te=Object.prototype.hasOwnProperty,re;function M(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch{return null}}function H(e){try{return encodeURIComponent(e)}catch{return null}}function oe(e){for(var r=/([^=?#&]+)=?([^&]*)/g,o={},t;t=r.exec(e);){var p=M(t[1]),s=M(t[2]);p===null||s===null||p in o||(o[p]=s)}return o}function ne(e,r){r=r||"";var o=[],t,p;typeof r!="string"&&(r="?");for(p in e)if(te.call(e,p)){if(t=e[p],!t&&(t===null||t===re||isNaN(t))&&(t=""),p=H(p),t=H(t),p===null||t===null)continue;o.push(p+"="+t)}return o.length?r+o.join("&"):""}C.stringify=ne;C.parse=oe;var x=ee,E=C,pe=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,J=/[\n\r\t]/g,se=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,k=/:\d+$/,ie=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,le=/^[a-zA-Z]:/;function y(e){return(e||"").toString().replace(pe,"")}var j=[["#","hash"],["?","query"],function(r,o){return g(o.protocol)?r.replace(/\\/g,"/"):r},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],U={hash:1,query:1};function D(e){var r;typeof window!="undefined"?r=window:typeof B!="undefined"?r=B:typeof self!="undefined"?r=self:r={};var o=r.location||{};e=e||o;var t={},p=typeof e,s;if(e.protocol==="blob:")t=new m(unescape(e.pathname),{});else if(p==="string"){t=new m(e,{});for(s in U)delete t[s]}else if(p==="object"){for(s in e)s in U||(t[s]=e[s]);t.slashes===void 0&&(t.slashes=se.test(e.href))}return t}function g(e){return e==="file:"||e==="ftp:"||e==="http:"||e==="https:"||e==="ws:"||e==="wss:"}function K(e,r){e=y(e),e=e.replace(J,""),r=r||{};var o=ie.exec(e),t=o[1]?o[1].toLowerCase():"",p=!!o[2],s=!!o[3],l=0,i;return p?s?(i=o[2]+o[3]+o[4],l=o[2].length+o[3].length):(i=o[2]+o[4],l=o[2].length):s?(i=o[3]+o[4],l=o[3].length):i=o[4],t==="file:"?l>=2&&(i=i.slice(2)):g(t)?i=o[4]:t?p&&(i=i.slice(2)):l>=2&&g(r.protocol)&&(i=o[4]),{protocol:t,slashes:p||g(t),slashesCount:l,rest:i}}function ae(e,r){if(e==="")return r;for(var o=(r||"/").split("/").slice(0,-1).concat(e.split("/")),t=o.length,p=o[t-1],s=!1,l=0;t--;)o[t]==="."?o.splice(t,1):o[t]===".."?(o.splice(t,1),l++):l&&(t===0&&(s=!0),o.splice(t,1),l--);return s&&o.unshift(""),(p==="."||p==="..")&&o.push(""),o.join("/")}function m(e,r,o){if(e=y(e),e=e.replace(J,""),!(this instanceof m))return new m(e,r,o);var t,p,s,l,i,u,a=j.slice(),A=typeof r,n=this,f=0;for(A!=="object"&&A!=="string"&&(o=r,r=null),o&&typeof o!="function"&&(o=E.parse),r=D(r),p=K(e||"",r),t=!p.protocol&&!p.slashes,n.slashes=p.slashes||t&&r.slashes,n.protocol=p.protocol||r.protocol||"",e=p.rest,(p.protocol==="file:"&&(p.slashesCount!==2||le.test(e))||!p.slashes&&(p.protocol||p.slashesCount<2||!g(n.protocol)))&&(a[3]=[/(.*)/,"pathname"]);f<a.length;f++){if(l=a[f],typeof l=="function"){e=l(e,n);continue}s=l[0],u=l[1],s!==s?n[u]=e:typeof s=="string"?(i=s==="@"?e.lastIndexOf(s):e.indexOf(s),~i&&(typeof l[2]=="number"?(n[u]=e.slice(0,i),e=e.slice(i+l[2])):(n[u]=e.slice(i),e=e.slice(0,i)))):(i=s.exec(e))&&(n[u]=i[1],e=e.slice(0,i.index)),n[u]=n[u]||t&&l[3]&&r[u]||"",l[4]&&(n[u]=n[u].toLowerCase())}o&&(n.query=o(n.query)),t&&r.slashes&&n.pathname.charAt(0)!=="/"&&(n.pathname!==""||r.pathname!=="")&&(n.pathname=ae(n.pathname,r.pathname)),n.pathname.charAt(0)!=="/"&&g(n.protocol)&&(n.pathname="/"+n.pathname),x(n.port,n.protocol)||(n.host=n.hostname,n.port=""),n.username=n.password="",n.auth&&(i=n.auth.indexOf(":"),~i?(n.username=n.auth.slice(0,i),n.username=encodeURIComponent(decodeURIComponent(n.username)),n.password=n.auth.slice(i+1),n.password=encodeURIComponent(decodeURIComponent(n.password))):n.username=encodeURIComponent(decodeURIComponent(n.auth)),n.auth=n.password?n.username+":"+n.password:n.username),n.origin=n.protocol!=="file:"&&g(n.protocol)&&n.host?n.protocol+"//"+n.host:"null",n.href=n.toString()}function ue(e,r,o){var t=this;switch(e){case"query":typeof r=="string"&&r.length&&(r=(o||E.parse)(r)),t[e]=r;break;case"port":t[e]=r,x(r,t.protocol)?r&&(t.host=t.hostname+":"+r):(t.host=t.hostname,t[e]="");break;case"hostname":t[e]=r,t.port&&(r+=":"+t.port),t.host=r;break;case"host":t[e]=r,k.test(r)?(r=r.split(":"),t.port=r.pop(),t.hostname=r.join(":")):(t.hostname=r,t.port="");break;case"protocol":t.protocol=r.toLowerCase(),t.slashes=!o;break;case"pathname":case"hash":if(r){var p=e==="pathname"?"/":"#";t[e]=r.charAt(0)!==p?p+r:r}else t[e]=r;break;case"username":case"password":t[e]=encodeURIComponent(r);break;case"auth":var s=r.indexOf(":");~s?(t.username=r.slice(0,s),t.username=encodeURIComponent(decodeURIComponent(t.username)),t.password=r.slice(s+1),t.password=encodeURIComponent(decodeURIComponent(t.password))):t.username=encodeURIComponent(decodeURIComponent(r))}for(var l=0;l<j.length;l++){var i=j[l];i[4]&&(t[i[1]]=t[i[1]].toLowerCase())}return t.auth=t.password?t.username+":"+t.password:t.username,t.origin=t.protocol!=="file:"&&g(t.protocol)&&t.host?t.protocol+"//"+t.host:"null",t.href=t.toString(),t}function ge(e){(!e||typeof e!="function")&&(e=E.stringify);var r,o=this,t=o.host,p=o.protocol;p&&p.charAt(p.length-1)!==":"&&(p+=":");var s=p+(o.protocol&&o.slashes||g(o.protocol)?"//":"");return o.username?(s+=o.username,o.password&&(s+=":"+o.password),s+="@"):o.password?(s+=":"+o.password,s+="@"):o.protocol!=="file:"&&g(o.protocol)&&!t&&o.pathname!=="/"&&(s+="@"),(t[t.length-1]===":"||k.test(o.hostname)&&!o.port)&&(t+=":"),s+=t+o.pathname,r=typeof o.query=="object"?e(o.query):o.query,r&&(s+=r.charAt(0)!=="?"?"?"+r:r),o.hash&&(s+=o.hash),s}m.prototype={set:ue,toString:ge};m.extractProtocol=K;m.location=D;m.trimLeft=y;m.qs=E;var me=m;const he=q({setup(){const e=new me(window.location.href,!0).query,r=P(e.example||L[0].url),o=P(e.search||""),t=z(()=>L.filter(a=>a.url.toLocaleLowerCase().includes(o.value)));return{filterText:o,currentExample:r,jump:a=>{window.open(a)},getExampleUrl:a=>`/vis-three/examples/${a}`,getExamplePoster:a=>`/vis-three/examples/${a}`,toHome:()=>{window.location.href=window.location.origin+"/vis-three/"},changeExample:a=>{r.value=a;let A=`${window.location.origin}/vis-three/examples.html?example=${a}`;o.value&&(A+=`&search=${o.value}`),history.replaceState(null,"",A)},basePath:"/vis-three/",repoPrefix:"https://github.com/Shiotsukikaedesari/vis-three/tree/main/examples/",filterMenus:t}}}),Ae=e=>(F("data-v-3b64b74e"),e=e(),Z(),e),ce={class:"App-container"},de={class:"sidebar"},fe={class:"sidebar-header"},Ee={class:"header-title"},Se=Ae(()=>h("span",null,"VIS-THREE-EXAMPLES",-1)),Qe={class:"header-operation"},Ce={class:"sidebar-box"},ye=["onClick"],je={class:"item-title"},ve={class:"iframe-main"},Be=["src"];function Pe(e,r,o,t,p,s){const l=d("a-image"),i=d("search-outlined"),u=d("a-input"),a=d("CodeOutlined"),A=d("a-button");return Q(),S("div",ce,[h("div",de,[h("div",fe,[h("div",Ee,[c(l,{src:e.basePath+"/favicon.ico",preview:!1,onClick:e.toHome},null,8,["src","onClick"]),Se]),h("div",Qe,[c(u,{value:e.filterText,"onUpdate:value":r[0]||(r[0]=n=>e.filterText=n)},{suffix:I(()=>[c(i)]),_:1},8,["value"])])]),h("div",Ce,[(Q(!0),S(T,null,Y(e.filterMenus,n=>(Q(),S("div",{key:n.name,class:_(["sidebar-item",{"sidebar-item-active":n.url===e.currentExample}]),onClick:f=>e.changeExample(n.url)},[c(l,{preview:!1,src:e.getExamplePoster(n.poster),fallback:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="},null,8,["src"]),h("div",je,V(n.name),1)],10,ye))),128))])]),h("div",ve,[h("iframe",{src:e.getExampleUrl(e.currentExample),frameborder:"0"},null,8,Be),c(A,{type:"primary",size:"large",shape:"circle",title:"\u6253\u5F00\u6E90\u7801",class:"code-open",onClick:r[1]||(r[1]=n=>e.jump(e.repoPrefix+e.currentExample))},{icon:I(()=>[c(a)]),_:1})])])}var Ie=G(he,[["render",Pe],["__scopeId","data-v-3b64b74e"]]);v.start();O(Ie).use(X).use(W).use($).component(w.displayName,w).component(b.displayName,b).component(N.displayName,N).component(R.displayName,R).mount("#app");v.done();