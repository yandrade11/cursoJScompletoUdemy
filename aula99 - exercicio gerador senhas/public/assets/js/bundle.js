(()=>{"use strict";var n,e,r,t,a,o,i,c,s,u,p,A,l,d,f={122:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(537),a=r.n(t),o=r(645),i=r.n(o)()(a());i.push([n.id,'/* como criar uma variavel em css puro */\n:root {\n  --cor-primaria: rgb(118, 146, 104);\n  --cor-secundaria: rgb(86, 136, 60);\n}\n\n/* como utilizar essa variavel */\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: var(--cor-primaria);\n  font-family: sans-serif;\n}\n\n.container {\n  background-color: white;\n  border-radius: 10px;\n  font-size: 20px;\n  margin: 50px auto;\n  max-width: 640px;\n  padding: 20px;\n  text-align: justify;\n}\n\nh1 {\n  text-align: center;\n}\n\np.selecione {\n  text-align: center;\n}\n\ninput[type="number"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n}\ninput[type="number"] {\n  -moz-appearance: textfield;\n  appearance: textfield;\n  width: 30px;\n}\n\ninput.symbol {\n    text-align: center;\n}\n',"",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA,wCAAwC;AACxC;EACE,kCAAkC;EAClC,kCAAkC;AACpC;;AAEA,gCAAgC;AAChC;EACE,SAAS;EACT,UAAU;EACV,qCAAqC;EACrC,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;AACA;EACE,0BAA0B;EAC1B,qBAAqB;EACrB,WAAW;AACb;;AAEA;IACI,kBAAkB;AACtB",sourcesContent:['/* como criar uma variavel em css puro */\r\n:root {\r\n  --cor-primaria: rgb(118, 146, 104);\r\n  --cor-secundaria: rgb(86, 136, 60);\r\n}\r\n\r\n/* como utilizar essa variavel */\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: var(--cor-primaria);\r\n  font-family: sans-serif;\r\n}\r\n\r\n.container {\r\n  background-color: white;\r\n  border-radius: 10px;\r\n  font-size: 20px;\r\n  margin: 50px auto;\r\n  max-width: 640px;\r\n  padding: 20px;\r\n  text-align: justify;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\np.selecione {\r\n  text-align: center;\r\n}\r\n\r\ninput[type="number"]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n}\r\ninput[type="number"] {\r\n  -moz-appearance: textfield;\r\n  appearance: textfield;\r\n  width: 30px;\r\n}\r\n\r\ninput.symbol {\r\n    text-align: center;\r\n}\r\n'],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);t&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],u=t.base?s[0]+t.base:s[0],p=o[u]||0,A="".concat(u," ").concat(p);o[u]=p+1;var l=r(A),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(d);else{var f=a(d,t);t.byIndex=c,e.splice(c,0,{identifier:A,updater:f,references:1})}i.push(A)}return i}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=r(o[i]);e[c].references--}for(var s=t(n,a),u=0;u<o.length;u++){var p=r(o[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function v(n){var e=m[n];if(void 0!==e)return e.exports;var r=m[n]={id:n,exports:{}};return f[n](r,r.exports,v),r.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var r in e)v.o(e,r)&&!v.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(379),e=v.n(n),r=v(795),t=v.n(r),a=v(569),o=v.n(a),i=v(565),c=v.n(i),s=v(216),u=v.n(s),p=v(589),A=v.n(p),l=v(122),(d={}).styleTagTransform=A(),d.setAttributes=c(),d.insert=o().bind(null,"head"),d.domAPI=t(),d.insertStyleElement=u(),e()(l.Z,d),l.Z&&l.Z.locals&&l.Z.locals})();
//# sourceMappingURL=bundle.js.map