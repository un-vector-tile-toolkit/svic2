parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"7boC":[function(require,module,exports) {
module.exports={conflict:["AFG","CAF","COL","COD","IRQ","LBY","MLI","MMR","SOM","SSD","SDN","SYR","YEM"],other:["BDI","NGA"],"post-conflict":["BIH","CIV","NPL","LKA"]};
},{}],"g/M8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor(t){if(this.id=`mbgl-gesture-handling-help-container-${e.count}`,e.count++,this.timer=null,this.settings={backgroundColor:"rgba(0, 0, 0, 0.8)",textColor:"#ffffff",textMessage:"Use alt + scroll to zoom the map.",textMessageMobile:"Use two fingers to move the map.",timeout:2e3,...t},this.helpElement=document.querySelector(`#${this.id}`),null===this.helpElement){this.helpElement=document.createElement("div"),this.helpElement.id=this.id,this.helpElement.style.backgroundColor=this.settings.backgroundColor,this.helpElement.style.position="absolute",this.helpElement.style.display="none",this.helpElement.style.zIndex=9999,this.helpElement.style.justifyContent="center",this.helpElement.style.alignItems="center";const e=document.createElement("div");e.style.textAlign="center",e.style.color=this.settings.textColor,e.innerText="",this.helpElement.appendChild(e),document.body.appendChild(this.helpElement)}}showHelp(e,t){const l=e.getContainer().getBoundingClientRect();this.helpElement.style.top=`${l.top+window.scrollY}px`,this.helpElement.style.left=`${l.left+window.scrollX}px`,this.helpElement.style.width=`${l.width}px`,this.helpElement.style.height=`${l.height}px`,this.helpElement.style.display="flex",this.helpElement.querySelector("div").innerText=t}hideHelp(){this.helpElement.style.display="none"}addTo(e){e.scrollZoom.disable(),this.helpElement.addEventListener("wheel",e=>{e.altKey?(e.preventDefault(),this.hideHelp()):(clearTimeout(this.timer),this.timer=setTimeout(()=>{this.hideHelp()},this.settings.timeout))}),e.getContainer().addEventListener("wheel",t=>{t.altKey?(t.preventDefault(),e.scrollZoom.isEnabled()||e.scrollZoom.enable()):(e.scrollZoom.disable(),this.showHelp(e,this.settings.textMessage),this.timer=setTimeout(()=>{this.hideHelp()},this.settings.timeout))}),this.helpElement.addEventListener("touchstart",t=>{t.touches&&2<=t.touches.length&&(clearTimeout(this.timer),this.hideHelp(),e.dragPan.enable(),t.preventDefault())}),e.on("movestart",t=>{t.originalEvent&&"touches"in t.originalEvent&&2>t.originalEvent.touches.length&&(this.showHelp(e,this.settings.textMessageMobile),e.dragPan.disable(),this.timer=setTimeout(()=>{e.dragPan.enable(),this.hideHelp()},this.settings.timeout))})}}e.count=0;var t=e;exports.default=t;
},{}],"A2T1":[function(require,module,exports) {
"use strict";var t=e(require("@tilecloud/mbgl-gesture-handling"));function e(t){return t&&t.__esModule?t:{default:t}}for(var o=require("./data.json"),n={},r=0,l=Object.keys(o);r<l.length;r++){var a=l[r],i=!0,c=!1,s=void 0;try{for(var u,d=o[a][Symbol.iterator]();!(i=(u=d.next()).done);i=!0){var f=u.value;n[f]=a}}catch(y){c=!0,s=y}finally{try{i||null==d.return||d.return()}finally{if(c)throw s}}}var v={conflict:"Sexual violence in conflict-affected settings","post-conflict":"Sexual violence in post-conflict settings",other:"Other situations of concern"},p={conflict:["rgb",255,142,0],"post-conflict":["rgb",255,0,139],other:["rgb",113,1,149]},h=document.getElementById("overlay"),m=document.getElementById("country"),g=document.getElementById("description");fetch("https://un-vector-tile-toolkit.github.io/tentatiles/style.json").then(function(t){return t.json()}).then(function(e){var r=!0,l=!1,a=void 0;try{for(var i,c=e.layers[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var s=i.value;"bnda"===s.id&&(s.paint["fill-color"]=["match",["get","iso3cd"],o.conflict,p.conflict,o["post-conflict"],p["post-conflict"],o.other,p.other,["rgb",175,226,254]])}}catch(y){l=!0,a=y}finally{try{r||null==c.return||c.return()}finally{if(l)throw a}}var u=new mapboxgl.Map({container:"map",maxZoom:2,style:e,attributionControl:!0,hash:!0,renderWorldCopies:!1});u.dragRotate.disable(),u.touchZoomRotate.disableRotation(),new t.default({backgroundColor:"rgba(207, 207, 207, 0.8)",textColor:"#000",timeout:2e3}).addTo(u),u.on("mousemove",function(t){var e=u.queryRenderedFeatures(t.point)[0];if(e){h.classList.remove("default","conflict","post-conflict","other");var o=n[e.properties.iso3cd];if(o){var r=v[o];h.classList.add(o),m.textContent=e.properties.maplab,g.textContent=r,console.log("".concat(e.properties.maplab,": ").concat(r," ").concat(h.classList))}else h.classList.add("default"),m.textContent="",g.textContent=""}}),u.on("load",function(){})});
},{"./data.json":"7boC","@tilecloud/mbgl-gesture-handling":"g/M8"}]},{},["A2T1"], null)
//# sourceMappingURL=app.331228fe.js.map