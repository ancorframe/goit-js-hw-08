(()=>{var e={705:(e,t,r)=>{var n=r(639).Symbol;e.exports=n},239:(e,t,r)=>{var n=r(705),o=r(607),i=r(333),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},561:(e,t,r)=>{var n=r(990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},957:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},607:(e,t,r)=>{var n=r(705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),r=e[u];try{e[u]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[u]=r:delete e[u]),o}},333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},639:(e,t,r)=>{var n=r(957),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},990:e=>{var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},279:(e,t,r)=>{var n=r(218),o=r(771),i=r(841),a=Math.max,u=Math.min;e.exports=function(e,t,r){var c,f,l,s,v,p,m=0,g=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=c,n=f;return c=f=void 0,m=t,s=e.apply(n,r)}function x(e){return m=e,v=setTimeout(h,t),g?y(e):s}function j(e){var r=e-p;return void 0===p||r>=t||r<0||d&&e-m>=l}function h(){var e=o();if(j(e))return O(e);v=setTimeout(h,function(e){var r=t-(e-p);return d?u(r,l-(e-m)):r}(e))}function O(e){return v=void 0,b&&c?y(e):(c=f=void 0,s)}function T(){var e=o(),r=j(e);if(c=arguments,f=this,p=e,r){if(void 0===v)return x(p);if(d)return clearTimeout(v),v=setTimeout(h,t),y(p)}return void 0===v&&(v=setTimeout(h,t)),s}return t=i(t)||0,n(r)&&(g=!!r.leading,l=(d="maxWait"in r)?a(i(r.maxWait)||0,t):l,b="trailing"in r?!!r.trailing:b),T.cancel=function(){void 0!==v&&clearTimeout(v),m=0,c=p=f=v=void 0},T.flush=function(){return void 0===v?s:O(o())},T}},218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},448:(e,t,r)=>{var n=r(239),o=r(5);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},771:(e,t,r)=>{var n=r(639);e.exports=function(){return n.Date.now()}},493:(e,t,r)=>{var n=r(279),o=r(218);e.exports=function(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:i,maxWait:t,trailing:a})}},841:(e,t,r)=>{var n=r(561),o=r(218),i=r(448),a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=u.test(e);return r||c.test(e)?f(e.slice(2),r?2:8):a.test(e)?NaN:+e}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(493),t=r.n(e),n={form:document.querySelector(".feedback-form")},o={};n.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("email:",e.currentTarget.elements.email.value),console.log("message:",e.currentTarget.elements.message.value),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),n.form.addEventListener("input",new(t())((function(e){o[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500)),function(){if(localStorage.getItem("feedback-form-state")){var e=localStorage.getItem("feedback-form-state");o=JSON.parse(e),console.log(o),n.form.elements.email.value=o.email,n.form.elements.message.value=o.message}}()})()})();