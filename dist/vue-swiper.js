/*!
 * vue-light-swiper v1.0.5
 * vue swiper for vue 2.0. light weight and simple
 * https://github.com/zhengjiaqi/vue-light-swiper
 * @author zhengjiaqi <971682460@qq.com>
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSwiper=e():t.VueSwiper=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=3)}([function(t,e){function i(t,e){var i=t[1]||"",s=t[3];if(!s)return i;if(e&&"function"==typeof btoa){var o=n(s);return[i].concat(s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"})).concat([o]).join("\n")}return[i].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(n[o]=!0)}for(s=0;s<t.length;s++){var r=t[s];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),e.push(r))}},e}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(o(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var r=[],s=0;s<i.parts.length;s++)r.push(o(i.parts[s]));c[i.id]={id:i.id,refs:1,parts:r}}}}function s(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function o(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(p)return v;n.parentNode.removeChild(n)}if(m){var o=f++;n=u||(u=s()),e=r.bind(null,n,o,!1),i=r.bind(null,n,o,!0)}else n=s(),e=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function r(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=_(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function a(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=i(7),c={},h=d&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,p=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){p=i;var s=l(t,e);return n(s),function(e){for(var i=[],o=0;o<s.length;o++){var r=s[o],a=c[r.id];a.refs--,i.push(a)}e?(s=l(t,e),n(s)):s=[];for(var o=0;o<i.length;o++){var a=i[o];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete c[a.id]}}}};var _=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e,i,n,s,o){var r,a=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(r=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId=s);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=n),c){var h=l.functional,u=h?l.render:l.beforeCreate;h?(l._injectStyles=c,l.render=function(t,e){return c.call(e),u(t,e)}):l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:r,exports:a,options:l}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.vueSwiperSlide=e.vueSwiper=void 0;var s=i(4),o=n(s),r=i(10),a=n(r);e.vueSwiper=o.default,e.vueSwiperSlide=a.default},function(t,e,i){"use strict";function n(t){i(15)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(8),o=i.n(s),r=i(17),a=i(2),d=n,l=a(o.a,r.a,!1,d,null,null);e.default=l.exports},,,function(t,e){t.exports=function(t,e){for(var i=[],n={},s=0;s<e.length;s++){var o=e[s],r=o[0],a=o[1],d=o[2],l=o[3],c={id:t+":"+s,css:a,media:d,sourceMap:l};n[r]?n[r].parts.push(c):i.push(n[r]={id:r,parts:[c]})}return i}},function(t,e,i){"use strict";function n(t,e){var i=null,n=(new Date).getTime();return function(){var s=this,o=arguments;clearTimeout(i),n=(new Date).getTime(),i=setTimeout(function(){t.apply(s,o)},e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vueSwiper",props:{showIndex:{type:Number,default:0},auto:{type:Number,default:0},defaultDuration:{type:Number,default:300},loop:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},baseWidth:{type:Number,default:0},baseHeight:{type:Number,default:0},baseSizeDom:{},indicators:{type:Boolean,default:!1},limit:{type:Number,default:20},uselazyload:{type:Boolean,default:!1},preload:{type:Number,default:0}},data:function(){return{addonBefore:"",addonBefore2:"",addonAfter:"",addonAfter2:"",translateX:0,translateY:0,timer:0,activeIndex:0,oldActiveIndex:this.showIndex,slotsList:[],childrenList:[],style:{height:"",paddingBottom:""},addonStyle:{width:"100%",height:"auto"},transitionDuration:this.defaultDuration}},watch:{auto:function(){this._setTimer()},showIndex:function(t){var e=this;setTimeout(function(){e._transitionToPage(t)},30)}},created:function(){this.childrenList=this.$children,this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)},mounted:function(){this.activeIndex=this.showIndex,this._setTimer(),this._resize(),this._handleUpdate(),this.$on("childUpdate",n(function(){this._handleUpdate()},this.defaultDuration)),window.addEventListener("resize",this._resize),document.addEventListener("touchmove",this.onTouchMove,{passive:!1},!1),document.addEventListener("touchend",this.onTouchEnd,{passive:!1},!1),document.addEventListener("mousemove",this.onTouchMove,{passive:!1},!1),document.addEventListener("mouseup",this.onTouchEnd,{passive:!1},!1)},destoryed:function(){window.removeEventListener("resize",this._resize),this._clearTimer()},methods:{_handleUpdate:function(){this.slotsList=this.$slots.default,this._setSlideActive(),this._setHelperDOM(),this._lazyLoad()},onTouchstart:function(t){if(1!=this.slotsList.length){this.transitionDuration=0;var e=this._getTouchPos(t);this.x=e.x,this.y=e.y,this._clearTimer(),this.touchStart=!0}},onTouchMove:function(t){if(this.touchStart){var e=this._calculatePos(t);!this.vertical&&e.absX>e.absY&&(t.preventDefault(),this._slid(this.activeIndex,e.deltaX)),this.vertical&&(t.preventDefault(),this._slid(this.activeIndex,e.deltaY))}},onTouchEnd:function(t){if(this.touchStart){var e=this.loop,i=this.slotsList,n=this.limit,s=this.activeIndex,o=this._calculatePos(t),r=s;o.abs>n&&(r+=o.abs/o.delta,e||(r=Math.max(Math.min(r,i.length-1),0))),this._transitionToPage(r),this.touchStart=!1}},onTouchcancel:function(t){this._transitionToPage(this.activeIndex)},onTransitionend:function(t){!this.loop||0!==this.activeIndex&&this.activeIndex!==this.slotsList.length-1||(this.transitionDuration=0,this._slid(this.activeIndex,0)),this.$emit("slide-end",this.activeIndex),this.oldActiveIndex!==this.activeIndex&&(this.$emit("slide-change",this.activeIndex,this.oldActiveIndex),this.$emit("update:showIndex",this.activeIndex),this.oldActiveIndex=this.activeIndex)},_lazyLoad:function(){if(this.uselazyload)for(var t=0;t<=this.preload;){var e=this.slotsList[this.activeIndex+t]||{},i=e.elm;if(i)for(var n=i.querySelectorAll(".lazy"),s=0;s<n.length;s++){var o=n[s];o.setAttribute("src",o.dataset.src),o.classList.remove("lazy")}t++}},_setSlideActive:function(){var t=this;this.slotsList.forEach(function(e,i){e.componentInstance._setActive(i,t.activeIndex)})},_setHelperDOM:function(){var t=this.slotsList.length;t>1&&this.loop&&(this.addonBefore=this.slotsList[t-1].elm.innerHTML,this.addonBefore2=this.slotsList[t-2].elm.innerHTML,this.addonAfter=this.slotsList[0].elm.innerHTML,this.addonAfter2=this.slotsList[1].elm.innerHTML)},_slid:function(t,e){var i=this.loop,n=this.slotsList,s=n.length;if(0!==s){1===s&&(i=!1),i||(t=(t+s)%s);var o=-this._getTranslateOfPage()*(t+(i?2:0))-e;this._setTranslate(o),this.activeIndex=(t+s)%s}},_calculatePos:function(t){var e=this._getTouchPos(t),i=e.x,n=e.y,s=this.x-i,o=this.y-n,r=Math.abs(s),a=Math.abs(o),d=this.vertical?"absY":"absX",l=this.vertical?"deltaY":"deltaX",c={deltaX:s,deltaY:o,absX:r,absY:a};return c.abs=c[d],c.delta=c[l],c},_setTimer:function(){var t=this,e=this.auto,i=this.slotsList,n=i.length;e&&n>1&&(this.timer=setInterval(function(){t._transitionToPage(t.activeIndex+1)},e))},_clearTimer:function(){this.timer&&clearInterval(this.timer)},_transitionToPage:function(t,e){this._clearTimer(),this.transitionDuration=e||this.defaultDuration,this._slid(t,0),this._setTimer()},_getTouchPos:function(t){var e=0,i=0;return t.changedTouches?(e=t.changedTouches[0].clientX,i=t.changedTouches[0].clientY):(e=t.clientX,i=t.clientY),{x:e,y:i}},_resize:function(){var t=0,e=0,i=0,n=0,s=this.baseSizeDom;if(s&&("string"==typeof s&&(s=document.querySelector(s)||{style:{width:0,height:0}}),i=s.offsetWidth||parseInt(s.style.width)||0,n=s.offsetHeight||parseInt(s.style.height)||0),this.baseWidth&&(t=this.baseWidth),t=i||this.$el.offsetWidth,0!==t&&(this.width=t,this.addonStyle.width=t+"px"),this.vertical&&(this.baseHeight&&(e=this.baseHeight),0!==(e=n||this.$el.offsetHeight)&&(this.height=e,this.addonStyle.height=e+"px")),0!==t||0!==e){var o=!0,r=!1,a=void 0;try{for(var d,l=this.$children[Symbol.iterator]();!(o=(d=l.next()).done);o=!0){d.value.$emit("sizeResized",{width:t,height:e})}}catch(t){r=!0,a=t}finally{try{!o&&l.return&&l.return()}finally{if(r)throw a}}}this.$nextTick(function(){this._transitionToPage(this.activeIndex,"0")},this)},_setTranslate:function(t){this[this.vertical?"translateY":"translateX"]=t},_getTranslate:function(){return this[this.vertical?"translateY":"translateX"]},_getTranslateOfPage:function(){return this[this.vertical?"height":"width"]}}}},,function(t,e,i){"use strict";function n(t){i(11)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(13),o=i.n(s),r=i(14),a=i(2),d=n,l=a(o.a,r.a,!1,d,null,null);e.default=l.exports},function(t,e,i){var n=i(12);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1)("a1cf4084",n,!0)},function(t,e,i){e=t.exports=i(0)(void 0),e.push([t.i,".swiper-item,.swiper-item-help{width:1200px;box-sizing:border-box;flex-shrink:0;display:flex;height:100%}",""])},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vueSwiperSlide",created:function(){var t=this,e=this.$parent.width,i=this.$parent.height;e&&(this.style.width=e+"px"),i&&(this.style.height=i+"px"),this.$on("sizeResized",function(e){var i=e.width,n=e.height;i&&(t.style.width=i+"px"),n&&(t.style.height=n+"px")})},data:function(){return{style:{width:"100%",height:"auto"},active:!1}},methods:{_setActive:function(t,e){this.active=t===e}},updated:function(t,e){this.$parent.$emit("childUpdate")}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"swiper-item",class:{"is-active":t.active},style:t.style},[t._t("default")],2)},s=[],o={render:n,staticRenderFns:s};e.a=o},function(t,e,i){var n=i(16);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(1)("494bc433",n,!0)},function(t,e,i){e=t.exports=i(0)(void 0),e.push([t.i,".swiper{overflow:hidden}.swiper,.swiper-track{width:100%;position:relative}.swiper-track{height:100%;display:flex;align-items:center;top:0;left:0}.swiper-indicators{position:absolute;height:0;bottom:20px;left:0;width:100%;text-align:center}.swiper-dot{display:inline-block;width:6px;height:6px;margin:3px;border-radius:100%;background:rgba(0,0,0,.5);border:1px solid hsla(0,0%,100%,.5);transition:all .5s ease}.swiper-dot.is-active{background:#05b4ff}.swiper.vertical .swiper-track{flex-direction:column}.swiper.vertical .swiper-indicators{left:auto;right:20px;bottom:auto;top:50%;width:8px;height:auto;transform:translate3d(0,-50%,0)}",""])},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper",class:{vertical:t.vertical},on:{touchstart:t.onTouchstart,mousedown:t.onTouchstart,touchcancel:t.onTouchcancel}},[i("div",{staticClass:"swiper-track",style:{transform:"translate3d("+t.translateX+"px,"+t.translateY+"px, 0)","transition-duration":t.transitionDuration+"ms"},on:{transitionend:t.onTransitionend}},[t.loop&&t.addonBefore2?i("div",{staticClass:"swiper-item-help b2",style:t.addonStyle,domProps:{innerHTML:t._s(t.addonBefore2)}}):t._e(),t._v(" "),t.loop&&t.addonBefore?i("div",{staticClass:"swiper-item-help b1",style:t.addonStyle,domProps:{innerHTML:t._s(t.addonBefore)}}):t._e(),t._v(" "),t._t("default"),t._v(" "),t.loop&&t.addonAfter?i("div",{staticClass:"swiper-item-help a1",style:t.addonStyle,domProps:{innerHTML:t._s(t.addonAfter)}}):t._e(),t._v(" "),t.loop&&t.addonAfter2?i("div",{staticClass:"swiper-item-help a2",style:t.addonStyle,domProps:{innerHTML:t._s(t.addonAfter2)}}):t._e()],2),t._v(" "),t.indicators?i("div",{staticClass:"swiper-indicators"},t._l(t.childrenList,function(e,n){return i("div",{key:n,class:{"swiper-dot":!0,"is-active":n===t.activeIndex},on:{click:function(e){e.stopPropagation(),t._transitionToPage(n)}}})})):t._e()])},s=[],o={render:n,staticRenderFns:s};e.a=o}])});