(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function t(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerPolicy&&(i.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?i.credentials="include":u.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(u){if(u.ep)return;u.ep=!0;const i=t(u);fetch(u.href,i)}})();const Hn=n=>{if(!n)throw new Error("La carta es un argumento obligatorio");const r=document.createElement("img");return r.src=`assets/cartas/${n}.png`,r.classList.add("carta"),r};var Jn="1.13.6",Sn=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},Z=Array.prototype,ln=Object.prototype,Bn=typeof Symbol<"u"?Symbol.prototype:null,Jr=Z.push,z=Z.slice,$=ln.toString,Ur=ln.hasOwnProperty,Un=typeof ArrayBuffer<"u",Wr=typeof DataView<"u",Gr=Array.isArray,Ln=Object.keys,Dn=Object.create,Rn=Un&&ArrayBuffer.isView,Xr=isNaN,Qr=isFinite,Wn=!{toString:null}.propertyIsEnumerable("toString"),Vn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Yr=Math.pow(2,53)-1;function d(n,r){return r=r==null?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(u=0;u<r;u++)i[u]=arguments[u];return i[r]=e,n.apply(this,i)}}function T(n){var r=typeof n;return r==="function"||r==="object"&&!!n}function Zr(n){return n===null}function Gn(n){return n===void 0}function Xn(n){return n===!0||n===!1||$.call(n)==="[object Boolean]"}function Kr(n){return!!(n&&n.nodeType===1)}function h(n){var r="[object "+n+"]";return function(t){return $.call(t)===r}}const cn=h("String"),Qn=h("Number"),xr=h("Date"),kr=h("RegExp"),br=h("Error"),Yn=h("Symbol"),Zn=h("ArrayBuffer");var Kn=h("Function"),jr=Sn.document&&Sn.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof jr!="function"&&(Kn=function(n){return typeof n=="function"||!1});const g=Kn,xn=h("Object");var kn=Wr&&xn(new DataView(new ArrayBuffer(8))),sn=typeof Map<"u"&&xn(new Map),nt=h("DataView");function rt(n){return n!=null&&g(n.getInt8)&&Zn(n.buffer)}const G=kn?rt:nt,P=Gr||h("Array");function N(n,r){return n!=null&&Ur.call(n,r)}var j=h("Arguments");(function(){j(arguments)||(j=function(n){return N(n,"callee")})})();const vn=j;function tt(n){return!Yn(n)&&Qr(n)&&!isNaN(parseFloat(n))}function bn(n){return Qn(n)&&Xr(n)}function jn(n){return function(){return n}}function nr(n){return function(r){var t=n(r);return typeof t=="number"&&t>=0&&t<=Yr}}function rr(n){return function(r){return r==null?void 0:r[n]}}const X=rr("byteLength"),et=nr(X);var ut=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function it(n){return Rn?Rn(n)&&!G(n):et(n)&&ut.test($.call(n))}const tr=Un?it:jn(!1),m=rr("length");function ft(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(u){return r[u]===!0},push:function(u){return r[u]=!0,n.push(u)}}}function er(n,r){r=ft(r);var t=Vn.length,e=n.constructor,u=g(e)&&e.prototype||ln,i="constructor";for(N(n,i)&&!r.contains(i)&&r.push(i);t--;)i=Vn[t],i in n&&n[i]!==u[i]&&!r.contains(i)&&r.push(i)}function v(n){if(!T(n))return[];if(Ln)return Ln(n);var r=[];for(var t in n)N(n,t)&&r.push(t);return Wn&&er(n,r),r}function ot(n){if(n==null)return!0;var r=m(n);return typeof r=="number"&&(P(n)||cn(n)||vn(n))?r===0:m(v(n))===0}function ur(n,r){var t=v(r),e=t.length;if(n==null)return!e;for(var u=Object(n),i=0;i<e;i++){var f=t[i];if(r[f]!==u[f]||!(f in u))return!1}return!0}function c(n){if(n instanceof c)return n;if(!(this instanceof c))return new c(n);this._wrapped=n}c.VERSION=Jn;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function $n(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,X(n))}var qn="[object DataView]";function nn(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return!1;if(n!==n)return r!==r;var u=typeof n;return u!=="function"&&u!=="object"&&typeof r!="object"?!1:ir(n,r,t,e)}function ir(n,r,t,e){n instanceof c&&(n=n._wrapped),r instanceof c&&(r=r._wrapped);var u=$.call(n);if(u!==$.call(r))return!1;if(kn&&u=="[object Object]"&&G(n)){if(!G(r))return!1;u=qn}switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:+n==0?1/+n===1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return Bn.valueOf.call(n)===Bn.valueOf.call(r);case"[object ArrayBuffer]":case qn:return ir($n(n),$n(r),t,e)}var i=u==="[object Array]";if(!i&&tr(n)){var f=X(n);if(f!==X(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;i=!0}if(!i){if(typeof n!="object"||typeof r!="object")return!1;var o=n.constructor,l=r.constructor;if(o!==l&&!(g(o)&&o instanceof o&&g(l)&&l instanceof l)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var a=t.length;a--;)if(t[a]===n)return e[a]===r;if(t.push(n),e.push(r),i){if(a=n.length,a!==r.length)return!1;for(;a--;)if(!nn(n[a],r[a],t,e))return!1}else{var s=v(n),p;if(a=s.length,v(r).length!==a)return!1;for(;a--;)if(p=s[a],!(N(r,p)&&nn(n[p],r[p],t,e)))return!1}return t.pop(),e.pop(),!0}function at(n,r){return nn(n,r)}function H(n){if(!T(n))return[];var r=[];for(var t in n)r.push(t);return Wn&&er(n,r),r}function hn(n){var r=m(n);return function(t){if(t==null)return!1;var e=H(t);if(m(e))return!1;for(var u=0;u<r;u++)if(!g(t[n[u]]))return!1;return n!==ar||!g(t[pn])}}var pn="forEach",fr="has",gn=["clear","delete"],or=["get",fr,"set"],lt=gn.concat(pn,or),ar=gn.concat(or),ct=["add"].concat(gn,pn,fr);const st=sn?hn(lt):h("Map"),vt=sn?hn(ar):h("WeakMap"),ht=sn?hn(ct):h("Set"),pt=h("WeakSet");function L(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function gt(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e}function lr(n){for(var r={},t=v(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function rn(n){var r=[];for(var t in n)g(n[t])&&r.push(t);return r.sort()}function dn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||t==null)return t;for(var u=1;u<e;u++)for(var i=arguments[u],f=n(i),o=f.length,l=0;l<o;l++){var a=f[l];(!r||t[a]===void 0)&&(t[a]=i[a])}return t}}const cr=dn(H),Q=dn(v),sr=dn(H,!0);function dt(){return function(){}}function vr(n){if(!T(n))return{};if(Dn)return Dn(n);var r=dt();r.prototype=n;var t=new r;return r.prototype=null,t}function mt(n,r){var t=vr(n);return r&&Q(t,r),t}function yt(n){return T(n)?P(n)?n.slice():cr({},n):n}function wt(n,r){return r(n),n}function hr(n){return P(n)?n:[n]}c.toPath=hr;function J(n){return c.toPath(n)}function mn(n,r){for(var t=r.length,e=0;e<t;e++){if(n==null)return;n=n[r[e]]}return t?n:void 0}function pr(n,r,t){var e=mn(n,J(r));return Gn(e)?t:e}function _t(n,r){r=J(r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(!N(n,u))return!1;n=n[u]}return!!t}function yn(n){return n}function q(n){return n=Q({},n),function(r){return ur(r,n)}}function wn(n){return n=J(n),function(r){return mn(r,n)}}function U(n,r,t){if(r===void 0)return n;switch(t??3){case 1:return function(e){return n.call(r,e)};case 3:return function(e,u,i){return n.call(r,e,u,i)};case 4:return function(e,u,i,f){return n.call(r,e,u,i,f)}}return function(){return n.apply(r,arguments)}}function gr(n,r,t){return n==null?yn:g(n)?U(n,r,t):T(n)&&!P(n)?q(n):wn(n)}function _n(n,r){return gr(n,r,1/0)}c.iteratee=_n;function y(n,r,t){return c.iteratee!==_n?c.iteratee(n,r):gr(n,r,t)}function At(n,r,t){r=y(r,t);for(var e=v(n),u=e.length,i={},f=0;f<u;f++){var o=e[f];i[o]=r(n[o],o,n)}return i}function dr(){}function Et(n){return n==null?dr:function(r){return pr(n,r)}}function Ot(n,r,t){var e=Array(Math.max(0,n));r=U(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e}function tn(n,r){return r==null&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}const C=Date.now||function(){return new Date().getTime()};function mr(n){var r=function(i){return n[i]},t="(?:"+v(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(i){return i=i==null?"":""+i,e.test(i)?i.replace(u,r):i}}const yr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Nt=mr(yr),Mt=lr(yr),Tt=mr(Mt),Pt=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var x=/(.)^/,It={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},St=/\\|'|\r|\n|\u2028|\u2029/g;function Bt(n){return"\\"+It[n]}var Lt=/^\s*(\w|\$)+\s*$/;function Dt(n,r,t){!r&&t&&(r=t),r=sr({},r,c.templateSettings);var e=RegExp([(r.escape||x).source,(r.interpolate||x).source,(r.evaluate||x).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(a,s,p,Pn,In){return i+=n.slice(u,In).replace(St,Bt),u=In+a.length,s?i+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:p?i+=`'+
((__t=(`+p+`))==null?'':__t)+
'`:Pn&&(i+=`';
`+Pn+`
__p+='`),a}),i+=`';
`;var f=r.variable;if(f){if(!Lt.test(f))throw new Error("variable is not a bare identifier: "+f)}else i=`with(obj||{}){
`+i+`}
`,f="obj";i=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+i+`return __p;
`;var o;try{o=new Function(f,"_",i)}catch(a){throw a.source=i,a}var l=function(a){return o.call(this,a,c)};return l.source="function("+f+`){
`+i+"}",l}function Rt(n,r,t){r=J(r);var e=r.length;if(!e)return g(t)?t.call(n):t;for(var u=0;u<e;u++){var i=n==null?void 0:n[r[u]];i===void 0&&(i=t,u=e),n=g(i)?i.call(n):i}return n}var Vt=0;function $t(n){var r=++Vt+"";return n?n+r:r}function qt(n){var r=c(n);return r._chain=!0,r}function wr(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=vr(n.prototype),f=n.apply(i,u);return T(f)?f:i}var D=d(function(n,r){var t=D.placeholder,e=function(){for(var u=0,i=r.length,f=Array(i),o=0;o<i;o++)f[o]=r[o]===t?arguments[u++]:r[o];for(;u<arguments.length;)f.push(arguments[u++]);return wr(n,e,this,this,f)};return e});D.placeholder=c;const _r=d(function(n,r,t){if(!g(n))throw new TypeError("Bind must be called on a function");var e=d(function(u){return wr(n,e,r,this,t.concat(u))});return e}),w=nr(m);function I(n,r,t,e){if(e=e||[],!r&&r!==0)r=1/0;else if(r<=0)return e.concat(n);for(var u=e.length,i=0,f=m(n);i<f;i++){var o=n[i];if(w(o)&&(P(o)||vn(o)))if(r>1)I(o,r-1,t,e),u=e.length;else for(var l=0,a=o.length;l<a;)e[u++]=o[l++];else t||(e[u++]=o)}return e}const Ct=d(function(n,r){r=I(r,!1,!1);var t=r.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=_r(n[e],n)}return n});function Ft(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return N(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t}const Ar=d(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),zt=D(Ar,c,1);function Ht(n,r,t){var e,u,i,f,o=0;t||(t={});var l=function(){o=t.leading===!1?0:C(),e=null,f=n.apply(u,i),e||(u=i=null)},a=function(){var s=C();!o&&t.leading===!1&&(o=s);var p=r-(s-o);return u=this,i=arguments,p<=0||p>r?(e&&(clearTimeout(e),e=null),o=s,f=n.apply(u,i),e||(u=i=null)):!e&&t.trailing!==!1&&(e=setTimeout(l,p)),f};return a.cancel=function(){clearTimeout(e),o=0,e=u=i=null},a}function Jt(n,r,t){var e,u,i,f,o,l=function(){var s=C()-u;r>s?e=setTimeout(l,r-s):(e=null,t||(f=n.apply(o,i)),e||(i=o=null))},a=d(function(s){return o=this,i=s,u=C(),e||(e=setTimeout(l,r),t&&(f=n.apply(o,i))),f});return a.cancel=function(){clearTimeout(e),e=i=o=null},a}function Ut(n,r){return D(r,n)}function An(n){return function(){return!n.apply(this,arguments)}}function Wt(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}}function Gt(n,r){return function(){if(--n<1)return r.apply(this,arguments)}}function Er(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}const Xt=D(Er,2);function Or(n,r,t){r=y(r,t);for(var e=v(n),u,i=0,f=e.length;i<f;i++)if(u=e[i],r(n[u],u,n))return u}function Nr(n){return function(r,t,e){t=y(t,e);for(var u=m(r),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(r[i],i,r))return i;return-1}}const En=Nr(1),Mr=Nr(-1);function Tr(n,r,t,e){t=y(t,e,1);for(var u=t(r),i=0,f=m(n);i<f;){var o=Math.floor((i+f)/2);t(n[o])<u?i=o+1:f=o}return i}function Pr(n,r,t){return function(e,u,i){var f=0,o=m(e);if(typeof i=="number")n>0?f=i>=0?i:Math.max(i+o,f):o=i>=0?Math.min(i+1,o):i+o+1;else if(t&&i&&o)return i=t(e,u),e[i]===u?i:-1;if(u!==u)return i=r(z.call(e,f,o),bn),i>=0?i+f:-1;for(i=n>0?f:o-1;i>=0&&i<o;i+=n)if(e[i]===u)return i;return-1}}const Ir=Pr(1,En,Tr),Qt=Pr(-1,Mr);function en(n,r,t){var e=w(n)?En:Or,u=e(n,r,t);if(u!==void 0&&u!==-1)return n[u]}function Yt(n,r){return en(n,q(r))}function E(n,r,t){r=U(r,t);var e,u;if(w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=v(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n}function M(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=Array(u),f=0;f<u;f++){var o=e?e[f]:f;i[f]=r(n[o],o,n)}return i}function Sr(n){var r=function(t,e,u,i){var f=!w(t)&&v(t),o=(f||t).length,l=n>0?0:o-1;for(i||(u=t[f?f[l]:l],l+=n);l>=0&&l<o;l+=n){var a=f?f[l]:l;u=e(u,t[a],a,t)}return u};return function(t,e,u,i){var f=arguments.length>=3;return r(t,U(e,i,4),u,f)}}const k=Sr(1),Cn=Sr(-1);function B(n,r,t){var e=[];return r=y(r,t),E(n,function(u,i,f){r(u,i,f)&&e.push(u)}),e}function Zt(n,r,t){return B(n,An(y(r)),t)}function Fn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(!r(n[f],f,n))return!1}return!0}function zn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(r(n[f],f,n))return!0}return!1}function A(n,r,t,e){return w(n)||(n=L(n)),(typeof t!="number"||e)&&(t=0),Ir(n,r,t)>=0}const Kt=d(function(n,r,t){var e,u;return g(r)?u=r:(r=J(r),e=r.slice(0,-1),r=r[r.length-1]),M(n,function(i){var f=u;if(!f){if(e&&e.length&&(i=mn(i,e)),i==null)return;f=i[r]}return f==null?f:f.apply(i,t)})});function On(n,r){return M(n,wn(r))}function xt(n,r){return B(n,q(r))}function Br(n,r,t){var e=-1/0,u=-1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:L(n);for(var o=0,l=n.length;o<l;o++)i=n[o],i!=null&&i>e&&(e=i)}else r=y(r,t),E(n,function(a,s,p){f=r(a,s,p),(f>u||f===-1/0&&e===-1/0)&&(e=a,u=f)});return e}function kt(n,r,t){var e=1/0,u=1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:L(n);for(var o=0,l=n.length;o<l;o++)i=n[o],i!=null&&i<e&&(e=i)}else r=y(r,t),E(n,function(a,s,p){f=r(a,s,p),(f<u||f===1/0&&e===1/0)&&(e=a,u=f)});return e}var bt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Lr(n){return n?P(n)?z.call(n):cn(n)?n.match(bt):w(n)?M(n,yn):L(n):[]}function Dr(n,r,t){if(r==null||t)return w(n)||(n=L(n)),n[tn(n.length-1)];var e=Lr(n),u=m(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,f=0;f<r;f++){var o=tn(f,i),l=e[f];e[f]=e[o],e[o]=l}return e.slice(0,r)}function jt(n){return Dr(n,1/0)}function ne(n,r,t){var e=0;return r=y(r,t),On(M(n,function(u,i,f){return{value:u,index:e++,criteria:r(u,i,f)}}).sort(function(u,i){var f=u.criteria,o=i.criteria;if(f!==o){if(f>o||f===void 0)return 1;if(f<o||o===void 0)return-1}return u.index-i.index}),"value")}function K(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=y(e,u),E(t,function(f,o){var l=e(f,o,t);n(i,f,l)}),i}}const re=K(function(n,r,t){N(n,t)?n[t].push(r):n[t]=[r]}),te=K(function(n,r,t){n[t]=r}),ee=K(function(n,r,t){N(n,t)?n[t]++:n[t]=1}),ue=K(function(n,r,t){n[t?0:1].push(r)},!0);function ie(n){return n==null?0:w(n)?n.length:v(n).length}function fe(n,r,t){return r in t}const Rr=d(function(n,r){var t={},e=r[0];if(n==null)return t;g(e)?(r.length>1&&(e=U(e,r[1])),r=H(n)):(e=fe,r=I(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var f=r[u],o=n[f];e(o,f,n)&&(t[f]=o)}return t}),oe=d(function(n,r){var t=r[0],e;return g(t)?(t=An(t),r.length>1&&(e=r[1])):(r=M(I(r,!1,!1),String),t=function(u,i){return!A(r,i)}),Rr(n,t,e)});function Vr(n,r,t){return z.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))}function b(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[0]:Vr(n,n.length-r)}function W(n,r,t){return z.call(n,r==null||t?1:r)}function ae(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[n.length-1]:W(n,Math.max(0,n.length-r))}function le(n){return B(n,Boolean)}function ce(n,r){return I(n,r,!1)}const $r=d(function(n,r){return r=I(r,!0,!0),B(n,function(t){return!A(r,t)})}),se=d(function(n,r){return $r(n,r)});function un(n,r,t,e){Xn(r)||(e=t,t=r,r=!1),t!=null&&(t=y(t,e));for(var u=[],i=[],f=0,o=m(n);f<o;f++){var l=n[f],a=t?t(l,f,n):l;r&&!t?((!f||i!==a)&&u.push(l),i=a):t?A(i,a)||(i.push(a),u.push(l)):A(u,l)||u.push(l)}return u}const ve=d(function(n){return un(I(n,!0,!0))});function he(n){for(var r=[],t=arguments.length,e=0,u=m(n);e<u;e++){var i=n[e];if(!A(r,i)){var f;for(f=1;f<t&&A(arguments[f],i);f++);f===t&&r.push(i)}}return r}function fn(n){for(var r=n&&Br(n,m).length||0,t=Array(r),e=0;e<r;e++)t[e]=On(n,e);return t}const pe=d(fn);function ge(n,r){for(var t={},e=0,u=m(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t}function de(n,r,t){r==null&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u}function me(n,r){if(r==null||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(z.call(n,e,e+=r));return t}function Nn(n,r){return n._chain?c(r).chain():r}function qr(n){return E(rn(n),function(r){var t=c[r]=n[r];c.prototype[r]=function(){var e=[this._wrapped];return Jr.apply(e,arguments),Nn(this,t.apply(c,e))}}),c}E(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=Z[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(r.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),Nn(this,t)}});E(["concat","join","slice"],function(n){var r=Z[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=r.apply(t,arguments)),Nn(this,t)}});const ye=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Jn,after:Gt,all:Fn,allKeys:H,any:zn,assign:Q,before:Er,bind:_r,bindAll:Ct,chain:qt,chunk:me,clone:yt,collect:M,compact:le,compose:Wt,constant:jn,contains:A,countBy:ee,create:mt,debounce:Jt,default:c,defaults:sr,defer:zt,delay:Ar,detect:en,difference:$r,drop:W,each:E,escape:Nt,every:Fn,extend:cr,extendOwn:Q,filter:B,find:en,findIndex:En,findKey:Or,findLastIndex:Mr,findWhere:Yt,first:b,flatten:ce,foldl:k,foldr:Cn,forEach:E,functions:rn,get:pr,groupBy:re,has:_t,head:b,identity:yn,include:A,includes:A,indexBy:te,indexOf:Ir,initial:Vr,inject:k,intersection:he,invert:lr,invoke:Kt,isArguments:vn,isArray:P,isArrayBuffer:Zn,isBoolean:Xn,isDataView:G,isDate:xr,isElement:Kr,isEmpty:ot,isEqual:at,isError:br,isFinite:tt,isFunction:g,isMap:st,isMatch:ur,isNaN:bn,isNull:Zr,isNumber:Qn,isObject:T,isRegExp:kr,isSet:ht,isString:cn,isSymbol:Yn,isTypedArray:tr,isUndefined:Gn,isWeakMap:vt,isWeakSet:pt,iteratee:_n,keys:v,last:ae,lastIndexOf:Qt,map:M,mapObject:At,matcher:q,matches:q,max:Br,memoize:Ft,methods:rn,min:kt,mixin:qr,negate:An,noop:dr,now:C,object:ge,omit:oe,once:Xt,pairs:gt,partial:D,partition:ue,pick:Rr,pluck:On,property:wn,propertyOf:Et,random:tn,range:de,reduce:k,reduceRight:Cn,reject:Zt,rest:W,restArguments:d,result:Rt,sample:Dr,select:B,shuffle:jt,size:ie,some:zn,sortBy:ne,sortedIndex:Tr,tail:W,take:b,tap:wt,template:Dt,templateSettings:Pt,throttle:Ht,times:Ot,toArray:Lr,toPath:hr,transpose:fn,unescape:Tt,union:ve,uniq:un,unique:un,uniqueId:$t,unzip:fn,values:L,where:xt,without:se,wrap:Ut,zip:pe},Symbol.toStringTag,{value:"Module"}));var on=qr(ye);on._=on;let R=[];const Cr=(n=[],r=[])=>{if(!n||n.length===0)throw new Error("TiposDeCartas es obligatorio como arreglo de string");if(!r||r.length===0)throw new Error("TiposEspeciales es obligatorio como arreglo de string");for(let t=2;t<=10;t++)for(let e of n)R.push(t+e);for(let t of n)for(let e of r)R.push(e+t);return R=on.shuffle(R),R},Mn=n=>{if(!n||n.length===0)throw"No hay cartas en el deck";return n.pop()},an=(n,r,t,e=[])=>{if(!n)throw new Error("Puntos minimos son necesario");if(!r)throw new Error("Argumento puntosHTML es necesario");let u=0;do{const i=Mn(e);if(u=u+Tn(i),r.innerText=u,t.append(Hn(i)),n>21)break}while(u<n&&n<=21);setTimeout(()=>{u===n?alert("Nadie gana :("):n>21?alert("Computadora gana"):u>21?alert("Jugador Gana"):alert("Computadora Gana")},100)},Tn=n=>{if(!n||n.length===0)throw new Error("Carta es de tipo string y es obligatoria");const r=n.substring(0,n.length-1);return isNaN(r)?r==="A"?11:10:r*1};let O=[];const Fr=["C","D","H","S"],zr=["A","J","Q","K"];let _=0;const V=document.querySelector("#btnPedir"),F=document.querySelector("#btnDetener"),we=document.querySelector("#btnNuevo"),Hr=document.querySelector("#jugador-cartas"),Y=document.querySelector("#computadora-cartas"),S=document.querySelectorAll("small");O=Cr(Fr,zr);let _e=Mn(O);Tn(_e);V.addEventListener("click",()=>{const n=Mn(O);_=_+Tn(n),S[0].innerText=_,Hr.append(Hn(n)),_>21?(console.warn("Lo siento mucho, perdiste"),V.disabled=!0,F.disabled=!0,an(_,S[1],Y,O)):_===21&&(console.warn("21, genial!"),V.disabled=!0,F.disabled=!0,an(_,S[1],Y,O))});F.addEventListener("click",()=>{V.disabled=!0,F.disabled=!0,an(_,S[1],Y,O)});we.addEventListener("click",()=>{console.clear(),O=[],O=Cr(Fr,zr),_=0,S[0].innerText=0,S[1].innerText=0,Y.innerHTML="",Hr.innerHTML="",V.disabled=!1,F.disabled=!1});
