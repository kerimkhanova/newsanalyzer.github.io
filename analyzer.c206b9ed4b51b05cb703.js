!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=117)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(56))},function(t,n,e){var r=e(0),o=e(10),i=e(29),c=e(53),u=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(6),o=e(33),i=e(5),c=e(18),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(6),o=e(7),i=e(17);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(28),o=e(57);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(50),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(32),o=e(22);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(10),i=e(8),c=e(4),u=e(21),a=e(35),f=e(36),l=f.get,s=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,e,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||c(e,"name")||i(e,"name",n),s(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!l&&t[n]&&(f=!0):delete t[n],f?t[n]=e:i(t,n,e)):f?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a.call(this)}))},function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return a})),e.d(n,"e",(function(){return f})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return p}));e(47);var r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],o=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],i=["вс","пн","вт","ср","чт","пт"," сб"],c=new Date,u=new Date(c);function a(t){return t="".concat(t.getDate(),", ").concat(i[t.getDay()])}function f(t){return t="".concat(t.getDate()," ").concat(r[t.getMonth()],", ").concat(t.getFullYear())}function l(t){return t="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}u.setDate(c.getDate()-6);var s=l(c),p=l(u)},function(t,n,e){var r=e(0),o=e(20).f,i=e(8),c=e(14),u=e(21),a=e(49),f=e(42);t.exports=function(t,n){var e,l,s,p,v,g=t.target,h=t.global,d=t.stat;if(e=h?r:d?r[g]||u(g,{}):(r[g]||{}).prototype)for(l in n){if(p=n[l],s=t.noTargetGet?(v=o(e,l))&&v.value:e[l],!f(h?l:g+(d?".":"#")+l,t.forced)&&void 0!==s){if(typeof p==typeof s)continue;a(p,s)}(t.sham||s&&s.sham)&&i(p,"sham",!0),c(e,l,p,t)}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(6),o=e(48),i=e(17),c=e(13),u=e(18),a=e(4),f=e(33),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=c(t),n=u(n,!0),f)try{return l(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(0),o=e(8);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){t.exports={}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(9);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(22);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r,o,i=e(0),c=e(45),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n){t.exports=!1},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(3),o=e(25),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(19);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(2),o=e(9),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(6),o=e(2),i=e(34);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(10);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r,o,i,c=e(58),u=e(0),a=e(3),f=e(8),l=e(4),s=e(38),p=e(23),v=u.WeakMap;if(c){var g=new v,h=g.get,d=g.has,y=g.set;r=function(t,n){return y.call(g,t,n),n},o=function(t){return h.call(g,t)||{}},i=function(t){return d.call(g,t)}}else{var x=s("state");p[x]=!0,r=function(t,n){return f(t,x,n),n},o=function(t){return l(t,x)?t[x]:{}},i=function(t){return l(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},,function(t,n,e){var r=e(10),o=e(29),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(51),o=e(41).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(24),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(18),o=e(7),i=e(17);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(2),o=e(1),i=e(27),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r=e(11);t.exports=r("navigator","userAgent")||""},,function(t,n,e){"use strict";var r=e(16),o=e(2),i=e(25),c=e(3),u=e(26),a=e(12),f=e(43),l=e(30),s=e(44),p=e(1),v=e(27),g=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),d=s("concat"),y=function(t){if(!c(t))return!1;var n=t[g];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!h||!d},{concat:function(t){var n,e,r,o,i,c=u(this),s=l(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],y(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(s,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(s,p++,i)}return s.length=p,s}})},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(4),o=e(59),i=e(20),c=e(7);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var l=e[f];r(t,l)||u(t,l,a(n,l))}}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(4),o=e(13),i=e(60).indexOf,c=e(23);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(5),o=e(19),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r=e(31),o=e(32),i=e(26),c=e(12),u=e(30),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,l=4==t,s=6==t,p=5==t||s;return function(v,g,h,d){for(var y,x,m=i(v),b=o(m),S=r(g,h,3),w=c(b.length),E=0,O=d||u,j=n?O(v,w):e?O(v,0):void 0;w>E;E++)if((p||E in b)&&(x=S(y=b[E],E,m),t))if(n)j[E]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return E;case 2:a.call(j,y)}else if(l)return!1;return s?-1:f||l?l:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(21),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=e(35),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(11),o=e(39),i=e(52),c=e(5);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(13),o=e(12),i=e(40),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),l=i(c,f);if(t&&e!=e){for(;f>l;)if((u=a[l++])!=u)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===e)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},,,,,,function(t,n,e){var r=e(0),o=e(67),i=e(68),c=e(8);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";var r=e(55).forEach,o=e(69);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";var r,o,i=e(121),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,f=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(f||l)&&(a=function(t){var n,e,r,o,a=this;return l&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(n=a.lastIndex),r=c.call(a,t),f&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),l&&r&&r.length>1&&u.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(118),e(119),e(66),e(126);for(var r=e(15),o=document.querySelector(".analytics-main__subtitle_result"),i=document.getElementById("newsOfWeek"),c=JSON.parse(localStorage.getItem("cards")),u=0,a=document.getElementById("summaryNumber"),f=document.querySelector(".analytics-result__table-month"),l=[],s=[],p=0;p<7;p++)l.push(new Date),l[p].setDate(l[p].getDate()-p),s.push(Object(r.a)(l[p])),document.getElementById("day".concat(p+1)).textContent=s[p];c.forEach((function(t){u+=t.title.split("".concat(localStorage.getItem("keyword"))).length-1,u+=t.title.split("".concat(localStorage.getItem("keyword")[0].toUpperCase()+localStorage.getItem("keyword").slice(1))).length-1})),o.textContent="«".concat(localStorage.getItem("keyword").toUpperCase(),"»"),i.textContent=JSON.parse(localStorage.getItem("totalResults")),a.textContent=u,f.textContent=r.b[l[0].getMonth()],l.forEach((function(t,n){var e=0;c.forEach((function(n){if(Object(r.e)(new Date(n.publishedAt))==Object(r.e)(t)){e+=n.title.split(localStorage.getItem("keyword")).length-1;var o=localStorage.getItem("keyword")[0].toUpperCase()+localStorage.getItem("keyword").slice(1);e+=n.title.split(o).length-1}})),document.getElementById("graphNumber".concat(n+1)).textContent=e,0==u?(document.getElementById("graph".concat(n+1)).setAttribute("style","width: 0%"),document.getElementById("graphNumber".concat(n+1)).textContent=""):document.getElementById("graph".concat(n+1)).setAttribute("style","width: ".concat(e,"%"))}))},function(t,n,e){"use strict";var r=e(16),o=e(3),i=e(25),c=e(40),u=e(12),a=e(13),f=e(43),l=e(44),s=e(1)("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!l("slice")},{slice:function(t,n){var e,r,l,g=a(this),h=u(g.length),d=c(t,h),y=c(void 0===n?h:n,h);if(i(g)&&("function"!=typeof(e=g.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[s])&&(e=void 0):e=void 0,e===Array||void 0===e))return p.call(g,d,y);for(r=new(void 0===e?Array:e)(v(y-d,0)),l=0;d<y;d++,l++)d in g&&f(r,l,g[d]);return r.length=l,r}})},function(t,n,e){"use strict";var r=e(120),o=e(122),i=e(5),c=e(22),u=e(54),a=e(123),f=e(12),l=e(125),s=e(91),p=e(2),v=[].push,g=Math.min,h=!p((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(c(this)),i=void 0===e?4294967295:e>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return n.call(r,t,i);for(var u,a,f,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=new RegExp(t.source,p+"g");(u=s.call(h,r))&&!((a=h.lastIndex)>g&&(l.push(r.slice(g,u.index)),u.length>1&&u.index<r.length&&v.apply(l,u.slice(1)),f=u[0].length,g=a,l.length>=i));)h.lastIndex===u.index&&h.lastIndex++;return g===r.length?!f&&h.test("")||l.push(""):l.push(r.slice(g)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var o=c(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,e):r.call(String(o),n,e)},function(t,o){var c=e(r,t,this,o,r!==n);if(c.done)return c.value;var s=i(t),p=String(this),v=u(s,RegExp),d=s.unicode,y=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(h?"y":"g"),x=new v(h?s:"^(?:"+s.source+")",y),m=void 0===o?4294967295:o>>>0;if(0===m)return[];if(0===p.length)return null===l(x,p)?[p]:[];for(var b=0,S=0,w=[];S<p.length;){x.lastIndex=h?S:0;var E,O=l(x,h?p:p.slice(S));if(null===O||(E=g(f(x.lastIndex+(h?0:S)),p.length))===b)S=a(p,S,d);else{if(w.push(p.slice(b,S)),w.length===m)return w;for(var j=1;j<=O.length-1;j++)if(w.push(O[j]),w.length===m)return w;S=b=E}}return w.push(p.slice(b)),w}]}),!h)},function(t,n,e){"use strict";var r=e(8),o=e(14),i=e(2),c=e(1),u=e(91),a=c("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,s){var p=c(t),v=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),g=v&&!i((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[p]=/./[p]),e.exec=function(){return n=!0,null},e[p](""),!n}));if(!v||!g||"replace"===t&&!f||"split"===t&&!l){var h=/./[p],d=e(p,""[t],(function(t,n,e,r,o){return n.exec===u?v&&!o?{done:!0,value:h.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),y=d[0],x=d[1];o(String.prototype,t,y),o(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)}),s&&r(RegExp.prototype[p],"sham",!0)}}},function(t,n,e){"use strict";var r=e(5);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){var r=e(3),o=e(9),i=e(1)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){"use strict";var r=e(124).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(24),o=e(22),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(9),o=e(91);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){}]);