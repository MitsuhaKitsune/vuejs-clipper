(function(e){function t(t){for(var a,i,r=t[0],o=t[1],l=t[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==c[r]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},c={app:0},s=[];function r(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-04519f82":"29e5cc36","chunk-099dcb56":"eb52f6a5","chunk-09c8482c":"105fd5d1","chunk-0d0d5674":"8769cd3c","chunk-36868e4e":"84153cfe","chunk-39324414":"d1845225","chunk-440dd448":"49033579","chunk-55e9fcc0":"d44fb627","chunk-5b9a3582":"945dd5af","chunk-5bf4c0dd":"6d1f5e2d","chunk-64706354":"05d13ef2"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-04519f82":1,"chunk-099dcb56":1,"chunk-09c8482c":1,"chunk-0d0d5674":1,"chunk-36868e4e":1,"chunk-39324414":1,"chunk-440dd448":1,"chunk-55e9fcc0":1,"chunk-5b9a3582":1,"chunk-5bf4c0dd":1,"chunk-64706354":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-04519f82":"7f0d6cfc","chunk-099dcb56":"72fddb1d","chunk-09c8482c":"d721180a","chunk-0d0d5674":"cee64b76","chunk-36868e4e":"4e6c3c82","chunk-39324414":"f838a608","chunk-440dd448":"e04f8125","chunk-55e9fcc0":"70c85145","chunk-5b9a3582":"8b919253","chunk-5bf4c0dd":"5b540a5a","chunk-64706354":"336ae6f1"}[e]+".css",c=o.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===c))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===a||u===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[e],f.parentNode.removeChild(f),n(s)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=r(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[n("div",{staticClass:"wrap"},[n("h2",[e._v("vuejs-clipper")]),n("div",{staticClass:"flex"},[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/basic"}},[e._v("clipper-basic")])],1),n("li",[n("router-link",{attrs:{to:"/fixed"}},[e._v("clipper-fixed")])],1),n("li",[n("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.show=!e.show}}},[e._v("Examples")])])]),e._m(0),n("span",{staticClass:"gh-issue"}),n("span",{staticClass:"gh-stars"})])]),n("my-list",{staticClass:"list",model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"https://www.npmjs.com/package/vuejs-clipper",target:"_blank"}},[n("img",{attrs:{src:"https://img.shields.io/npm/v/vuejs-clipper.svg",alt:"vuejs-clipper"}})])}],c=n("2e90"),s={mounted:function(){this.$el.querySelector(".gh-issue").appendChild(document.querySelector("#github-issue")),this.$el.querySelector(".gh-stars").appendChild(document.querySelector("#github-stars"))},components:{myList:c["default"]},data:function(){return{show:!1}}},r=s,o=(n("d86b"),n("2877")),l=Object(o["a"])(r,a,i,!1,null,"49780a9c",null);t["default"]=l.exports},"0872":function(e,t,n){"use strict";var a=n("d718"),i=n.n(a);i.a},2117:function(e,t,n){"use strict";var a=n("5ee8"),i=n.n(a);i.a},"21bb":function(e,t,n){"use strict";var a=n("a569"),i=n.n(a);i.a},"2b9d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.cancel?e._e():n("div",{staticClass:"notification",on:{click:e.cancelNote}},[n("img",{attrs:{src:"icon/cancel.png"}}),e._v("\n        "+e._s(e.msg)+"\n    ")])])},i=[],c={data:function(){return{msg:"NOTICE: These pages might use the latest version components on GitHub that is fixing or migrating to upcoming version instead of the published version of NPM.",cancel:!1}},methods:{cancelNote:function(){this.cancel=!0}}},s=c,r=(n("2117"),n("2877")),o=Object(r["a"])(s,a,i,!1,null,"406ae630",null);t["default"]=o.exports},"2e90":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list",class:{show:e.show}},[n("div",{staticClass:"full",on:{click:e.toggle}}),n("div",{staticClass:"my-list",on:{click:e.toggle}},[n("h4",[e._v("Examples")]),n("ul",e._l(e.list,(function(t){return n("li",{key:t.name,staticClass:"el"},[n("router-link",{attrs:{to:"/examples/"+t.path}},[e._v(e._s(t.name))])],1)})),0)])])},i=[],c={props:["value"],data:function(){return{list:[{name:"Quick Start",path:"quick-start"},{name:"Vertical images",path:"verticle-images"},{name:"Canvas to Image",path:"canvas-to-image"},{name:"Transparent Background",path:"transparent-bg"},{name:"Set clipping components position",path:"set-layout"},{name:"Set pixel(width) of result canvas",path:"result-pixel"},{name:"Use as Image zoom-in component",path:"image-zoomin"},{name:"Profile Photo",path:"profile-photo"}]}},computed:{show:function(){return this.value}},methods:{toggle:function(){this.$emit("input",!this.show)}}},s=c,r=(n("e366"),n("2877")),o=Object(r["a"])(s,a,i,!1,null,"34621753",null);t["default"]=o.exports},"3a3e":function(e,t,n){},"3d3e":function(e,t,n){},"3dfd":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("my-header"),n("notification"),e.done?e._e():n("home-loader",{on:{load:e.loaded}}),e.done?n("router-view"):e._e(),n("go-top"),n("my-footer")],1)},i=[],c=n("c5ff"),s=n("2b9d"),r=n("0418"),o=n("fd2d"),l=n("c12c"),u={data:function(){return{done:!1}},components:{myHeader:r["default"],Notification:s["default"],myFooter:o["default"],goTop:l["default"],HomeLoader:c["default"]},methods:{loaded:function(){this.done=!0}}},d=u,f=(n("5c0b"),n("2877")),p=Object(f["a"])(d,a,i,!1,null,null,null);t["default"]=p.exports},"49c9":function(e,t,n){},"555f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.done?e._e():n("div",{staticClass:"loader-con"},[n("div",{staticClass:"load-text"},[n("span",[e._t("default")],2),e._m(0)])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"dats"},[n("span",{staticClass:"dat"}),n("span",{staticClass:"dat"}),n("span",{staticClass:"dat"})])}],c={props:["done"]},s=c,r=(n("0872"),n("2877")),o=Object(r["a"])(s,a,i,!1,null,"5b7cb864",null);t["default"]=o.exports},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=n("3dfd"),c=(n("d81d"),n("b0c0"),n("d3b7"),n("e6cf"),n("8c4f")),s=n("bb51"),r=n("a451"),o=n("78c1"),l=n("2e90");a["a"].use(c["a"]);var u=function(e,t,n){return{x:0,y:0}},d=l["default"].data().list,f="./views/examples/",p=function(){return d.map((function(e){return{path:e.path,component:function(){return n("c65f")("".concat(f,"Ex-").concat(e.path,".vue"))}}}))}();p.unshift({path:"",name:"eptExample",beforeEnter:function(e,t,n){"eptExample"===e.name&&n({path:"/examples/quick-start"})}});var v=new c["a"]({routes:[{path:"/",name:"home",component:s["default"]},{path:"/basic",name:"basic",component:function(){return n.e("chunk-36868e4e").then(n.bind(null,"3fae"))}},{path:"/fixed",name:"fixed",component:function(){return n.e("chunk-0d0d5674").then(n.bind(null,"1c8d"))}},{path:"/examples",component:r["default"],children:p},{path:"/test",name:"test",component:o["default"]}],scrollBehavior:u}),m=n("56dd"),h=(n("3a3e"),n("998c")),b=n.n(h);a["a"].use(b.a),a["a"].use(m["a"]),a["a"].config.productionTip=!1,new a["a"]({router:v,render:function(e){return e(i["default"])}}).$mount("#app")},"594e":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("64b0"),i=n.n(a);i.a},"5ee8":function(e,t,n){},"64b0":function(e,t,n){},6546:function(e,t,n){"use strict";var a=n("49c9"),i=n.n(a);i.a},"75eb":function(e,t,n){},"78c1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clipper-upload",{staticClass:"upload",model:{value:e.src,callback:function(t){e.src=t},expression:"src"}},[e._v("upload")]),e._v("\n    "+e._s(e.src)+"\n    "),n("clipper-basic",{attrs:{name:"basic"}})],1)},i=[],c={data:function(){return{src:""}}},s=c,r=n("2877"),o=Object(r["a"])(s,a,i,!1,null,null,null);t["default"]=o.exports},"808b":function(e,t,n){},"885f":function(e,t,n){},a451:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"list-container"},[n("router-view")],1)])},i=[],c={data:function(){return{}}},s=c,r=(n("6546"),n("2877")),o=Object(r["a"])(s,a,i,!1,null,"b79b3f90",null);t["default"]=o.exports},a569:function(e,t,n){},b7a4:function(e,t,n){"use strict";var a=n("594e"),i=n.n(a);i.a},bb51:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"content"},[n("clipper-basic",{staticClass:"basic-dark",attrs:{src:"ex3.jpg",shadow:"rgba(0,0,0,0.7)"}}),e._m(0),n("div",{staticClass:"area"},[n("h2",[e._v("clipper-basic")]),e._m(1),n("div",{staticClass:"flex2"},[n("div",[n("clipper-basic",{attrs:{src:"ex2.jpg",preview:"ex1"}})],1),n("div",[n("clipper-preview",{attrs:{name:"ex1"}})],1)]),n("router-link",{staticClass:"tab",attrs:{to:"/basic"}},[e._v("more clipper-basic example")])],1),n("div",{staticClass:"gap"}),n("div",{staticClass:"area"},[n("h2",[e._v("clipper-fixed (recommended for mobile)")]),e._m(2),n("div",{staticClass:"flex2"},[n("div",[n("clipper-fixed",{attrs:{src:"ex1.jpg",rotate:e.ex2rotate,preview:"ex2",bgColor:"black"}}),n("div",{staticClass:"tab pd"},[e._v("Let's rotate:")]),n("clipper-range",{staticClass:"range",attrs:{min:-180,max:180},model:{value:e.ex2rotate,callback:function(t){e.ex2rotate=t},expression:"ex2rotate"}})],1),n("div",[n("clipper-preview",{staticClass:"fixed-preview-lg",attrs:{name:"ex2"}}),n("clipper-preview",{staticClass:"fixed-preview-md",attrs:{name:"ex2"}})],1)]),n("div",{staticClass:"tab"},[n("router-link",{attrs:{to:"/fixed"}},[e._v("more clipper-fixed example")])],1)])],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"area"},[n("h2",[e._v("Features")]),n("div",{staticClass:"tab"},[n("ul",[n("li",[e._v("Vue.js image clipping components using vue-rx.")]),n("li",[e._v("Add image clipping components to your Vue application in nothing flat.")]),n("li",[e._v("Touch devices supported and fully responsive.")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab"},[n("h4",[e._v("PC")]),n("ul",[n("li",[e._v("mouse"),n("img",{staticClass:"icon",attrs:{src:"icon/mouse.png",alt:"vuejs-clipper"}}),e._v(": Drag & Zoom clipping area/Create new clipping area.")])]),n("h4",[e._v("Mobile")]),n("ul",[n("li",[e._v("touch"),n("img",{staticClass:"icon",attrs:{src:"icon/touch.png",alt:"vuejs-clipper"}}),e._v(": Drag & Zoom clipping area/Create new clipping area.")]),n("li",[e._v("two fingers"),n("img",{staticClass:"icon",attrs:{src:"icon/twofinger.png",alt:"vuejs-clipper"}}),e._v(": Zoom clipping area.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab"},[n("h4",[e._v("PC")]),n("ul",[n("li",[e._v("mouse"),n("img",{staticClass:"icon",attrs:{src:"icon/mouse.png",alt:"vuejs-clipper"}}),e._v(": Drag image.")]),n("li",[e._v("mouse wheel"),n("img",{staticClass:"icon",attrs:{src:"icon/wheel.png",alt:"vuejs-clipper"}}),e._v(": Zoom image.")])]),n("h4",[e._v("Mobile")]),n("ul",[n("li",[e._v("touch"),n("img",{staticClass:"icon",attrs:{src:"icon/touch.png",alt:"vuejs-clipper"}}),e._v(": Drag image.")]),n("li",[e._v("two fingers"),n("img",{staticClass:"icon",attrs:{src:"icon/twofinger.png",alt:"vuejs-clipper"}}),e._v(": Zoom image.")])])])}],c={name:"home",components:{},data:function(){return{ex2rotate:0}},methods:{}},s=c,r=(n("21bb"),n("2877")),o=Object(r["a"])(s,a,i,!1,null,null,null);t["default"]=o.exports},bfa9:function(e,t,n){"use strict";var a=n("75eb"),i=n.n(a);i.a},c12c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content fixed"},[n("div",{staticClass:"gotop",on:{click:e.goToTop}},[n("div",{staticClass:"circle"}),e._m(0)])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text"},[n("span",[e._v("Top")])])}],c={methods:{goToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},s=c,r=(n("b7a4"),n("2877")),o=Object(r["a"])(s,a,i,!1,null,"2047b54d",null);t["default"]=o.exports},c5ff:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader-con"},[e._m(0),n("loader",{staticClass:"loader-text",attrs:{done:e.done}},[e._v("\r\n        Loading Pictures\r\n    ")])],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader"},[n("div",{staticClass:"dot"},[n("div")]),n("div",{staticClass:"dot"},[n("div")]),n("div",{staticClass:"dot"},[n("div")]),n("div",{staticClass:"dot"},[n("div")]),n("div",{staticClass:"dot"},[n("div")])])}],c=(n("99af"),n("4160"),n("e260"),n("d3b7"),n("e6cf"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),s=n("555f"),r=new Promise((function(e,t){setTimeout(e,16)})),o=["dawn.jpg","ex1.jpg","ex2.jpg","ex3.jpg","tanya.jpg"];function l(e){var t=[];return e.forEach((function(e){t.push(new Promise((function(t,n){var a=document.createElement("DIV"),i=document.createElement("IMG");a.appendChild(i),a.style.display="none",i.src=e,i.onload=function(){t()},i.onerror=function(){t()},document.body.appendChild(a),i.isComplete&&t()})))})),t}var u={components:{Loader:s["default"]},mounted:function(){var e=this,t=l(o);Promise.all([].concat(Object(c["a"])(t),[r])).then((function(){e.done=!0,e.$emit("load")}))},data:function(){return{done:!1}}},d=u,f=(n("bfa9"),n("2877")),p=Object(f["a"])(d,a,i,!1,null,"d9a50c56",null);t["default"]=p.exports},c65f:function(e,t,n){var a={"./App.vue":["3dfd"],"./components/Footer.vue":["fd2d"],"./components/Gallary.vue":["e4fd","chunk-099dcb56"],"./components/GoTop.vue":["c12c"],"./components/Header.vue":["0418"],"./components/List.vue":["2e90"],"./components/Loader.vue":["555f"],"./components/Notification.vue":["2b9d"],"./views/Basic.vue":["3fae","chunk-36868e4e"],"./views/Examples.vue":["a451"],"./views/Fixed.vue":["1c8d","chunk-0d0d5674"],"./views/Home.vue":["bb51"],"./views/HomeLoad.vue":["c5ff"],"./views/Test.vue":["78c1"],"./views/examples/Ex-canvas-to-image.vue":["b237","chunk-04519f82"],"./views/examples/Ex-image-zoomin.vue":["72f4","chunk-55e9fcc0"],"./views/examples/Ex-profile-photo.vue":["d930","chunk-09c8482c"],"./views/examples/Ex-quick-start.vue":["7967","chunk-64706354"],"./views/examples/Ex-result-pixel.vue":["6c9d","chunk-5bf4c0dd"],"./views/examples/Ex-set-layout.vue":["c5fd","chunk-5b9a3582"],"./views/examples/Ex-transparent-bg.vue":["3bdd","chunk-39324414"],"./views/examples/Ex-verticle-images.vue":["2ae4","chunk-440dd448"]};function i(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(a)},i.id="c65f",e.exports=i},d718:function(e,t,n){},d86b:function(e,t,n){"use strict";var a=n("808b"),i=n.n(a);i.a},df8f:function(e,t,n){"use strict";var a=n("885f"),i=n.n(a);i.a},e366:function(e,t,n){"use strict";var a=n("3d3e"),i=n.n(a);i.a},fd2d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"all-center"},[n("div",{staticClass:"sm all-center"},[n("div",[e._v(" vuejs-clipper")]),n("div",[n("a",{attrs:{href:"mailto:litingen1995@gmail.com"}},[e._v("litingen1995@gmail.com")])])])])}],c={},s=c,r=(n("df8f"),n("2877")),o=Object(r["a"])(s,a,i,!1,null,"5ebdfbd7",null);t["default"]=o.exports}});
//# sourceMappingURL=app.747d5e6d.js.map