!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(window,function(t){var e=function(){function e(t){return null==t?String(t):U[I.call(t)]||"object"}function n(t){return"function"==e(t)}function i(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(t){return"object"==e(t)}function s(t){return o(t)&&!i(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){var e=!!t&&"length"in t&&t.length,n=C.type(t);return"function"!=n&&!i(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function c(t){return F.call(t,function(t){return null!=t})}function u(t){return t.length>0?C.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in M?M[t]:M[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||Z[l(t)]?e:e+"px"}function p(t){var e,n;return D[t]||(e=$.createElement(t),$.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),D[t]=n),D[t]}function d(t){return"children"in t?P.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function m(t,e){var n,i=t?t.length:0;for(n=0;i>n;n++)this[n]=t[n];this.length=i,this.selector=e||""}function y(t,e,n){for(w in e)n&&(s(e[w])||Q(e[w]))?(s(e[w])&&!s(t[w])&&(t[w]={}),Q(e[w])&&!Q(t[w])&&(t[w]=[]),y(t[w],e[w],n)):e[w]!==T&&(t[w]=e[w])}function v(t,e){return null==e?C(t):C(t).filter(e)}function g(t,e,i,r){return n(e)?e.call(t,i,r):e}function x(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className||"",i=n&&n.baseVal!==T;return e===T?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function E(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?C.parseJSON(t):t):t}catch(e){return t}}function j(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)j(t.childNodes[n],e)}var T,w,C,N,S,O,A=[],L=A.concat,F=A.filter,P=A.slice,$=t.document,D={},M={},Z={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},k=/^\s*<(\w+|!)[^>]*>/,R=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,q=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,W=/^(?:body|html)$/i,z=/([A-Z])/g,B=["val","css","html","text","data","width","height","offset"],H=["after","prepend","before","append"],V=$.createElement("table"),X=$.createElement("tr"),J={tr:$.createElement("tbody"),tbody:V,thead:V,tfoot:V,td:X,th:X,"*":$.createElement("div")},_=/^[\w-]*$/,U={},I=U.toString,Y={},G=$.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return Y.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=G).appendChild(t),i=~Y.qsa(r,e).indexOf(t),o&&G.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},O=function(t){return F.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){var i,r,o;return R.test(t)&&(i=C($.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(q,"<$1></$2>")),e===T&&(e=k.test(t)&&RegExp.$1),e in J||(e="*"),o=J[e],o.innerHTML=""+t,i=C.each(P.call(o.childNodes),function(){o.removeChild(this)})),s(n)&&(r=C(i),C.each(n,function(t,e){B.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},Y.Z=function(t,e){return new m(t,e)},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,e){var i;if(!t)return Y.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&k.test(t))i=Y.fragment(t,RegExp.$1,e),t=null;else{if(e!==T)return C(e).find(t);i=Y.qsa($,t)}else{if(n(t))return C($).ready(t);if(Y.isZ(t))return t;if(Q(t))i=c(t);else if(o(t))i=[t],t=null;else if(k.test(t))i=Y.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==T)return C(e).find(t);i=Y.qsa($,t)}}return Y.Z(i,t)},C=function(t,e){return Y.init(t,e)},C.extend=function(t){var e,n=P.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){y(t,n,e)}),t},Y.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=_.test(o);return t.getElementById&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:P.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},C.contains=$.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},C.type=e,C.isFunction=n,C.isWindow=i,C.isArray=Q,C.isPlainObject=s,C.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},C.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},C.inArray=function(t,e,n){return A.indexOf.call(e,t,n)},C.camelCase=S,C.trim=function(t){return null==t?"":String.prototype.trim.call(t)},C.uuid=0,C.support={},C.expr={},C.noop=function(){},C.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&o.push(n);else for(r in t)null!=(n=e(t[r],r))&&o.push(n);return u(o)},C.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},C.grep=function(t,e){return F.call(t,e)},t.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){U["[object "+e+"]"]=e.toLowerCase()}),C.fn={constructor:Y.Z,length:0,forEach:A.forEach,reduce:A.reduce,push:A.push,sort:A.sort,splice:A.splice,indexOf:A.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=Y.isZ(e)?e.toArray():e;return L.apply(Y.isZ(this)?this.toArray():this,n)},map:function(t){return C(C.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return C(P.apply(this,arguments))},ready:function(e){if("complete"===$.readyState||"loading"!==$.readyState&&!$.documentElement.doScroll)setTimeout(function(){e(C)},0);else{var n=function(){$.removeEventListener("DOMContentLoaded",n,!1),t.removeEventListener("load",n,!1),e(C)};$.addEventListener("DOMContentLoaded",n,!1),t.addEventListener("load",n,!1)}return this},get:function(t){return t===T?P.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return A.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return n(t)?this.not(this.not(t)):C(F.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return C(O(this.concat(C(t,e))))},is:function(t){return"string"==typeof t?this.length>0&&Y.matches(this[0],t):t&&this.selector==t.selector},not:function(t){var e=[];if(n(t)&&t.call!==T)this.each(function(n){t.call(this,n)||e.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&n(t.item)?P.call(t):C(t);this.forEach(function(t){i.indexOf(t)<0&&e.push(t)})}return C(e)},has:function(t){return this.filter(function(){return o(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!o(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!o(t)?t:C(t)},find:function(t){var e=this;return t?"object"==typeof t?C(t).filter(function(){var t=this;return A.some.call(e,function(e){return C.contains(e,t)})}):1==this.length?C(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)}):C()},closest:function(t,e){var n=[],i="object"==typeof t&&C(t);return this.each(function(o,s){for(;s&&!(i?i.indexOf(s)>=0:Y.matches(s,t));)s=s!==e&&!r(s)&&s.parentNode;s&&n.indexOf(s)<0&&n.push(s)}),C(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=C.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(O(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||P.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return F.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var i=C(t).get(0),r=i.parentNode||this.length>1;return this.each(function(n){C(this).wrapAll(e?t.call(this,n):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var e;(e=t.children()).length;)t=e.first();C(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var i=C(this),r=i.contents(),o=e?t.call(this,n):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=C(this);(t===T?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;C(this).empty().append(g(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=g(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(o(t))for(w in t)x(this,w,t[w]);else x(this,t,g(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:T},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){x(this,t)},this)})},prop:function(t,e){return t=K[t]||t,"string"!=typeof t||1 in arguments?this.each(function(n){if(o(t))for(w in t)this[K[w]||w]=t[w];else this[t]=g(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=K[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(z,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?E(i):T},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=g(this,t,e,this.value)})):this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=C(this),i=g(this,e,t,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if($.documentElement!==this[0]&&!C.contains($.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,n){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[S(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(Q(t)){if(!i)return;var r={},o=getComputedStyle(i,"");return C.each(t,function(t,e){r[e]=i.style[S(e)]||o.getPropertyValue(e)}),r}}var s="";if("string"==e(t))n||0===n?s=l(t)+":"+h(t,n):this.each(function(){this.style.removeProperty(l(t))});else for(w in t)t[w]||0===t[w]?s+=l(w)+":"+h(w,t[w])+";":this.each(function(){this.style.removeProperty(l(w))});return this.each(function(){this.style.cssText+=";"+s})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&A.some.call(this,function(t){return this.test(b(t))},f(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){N=[];var n=b(this);g(this,t,e,n).split(/\s+/g).forEach(function(t){C(this).hasClass(t)||N.push(t)},this),N.length&&b(this,n+(n?" ":"")+N.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===T)return b(this,"");N=b(this),g(this,t,e,N).split(/\s+/g).forEach(function(t){N=N.replace(f(t)," ")}),b(this,N.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=C(this);g(this,t,n,b(this)).split(/\s+/g).forEach(function(t){(e===T?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===T?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===T?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=W.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(C(t).css("margin-top"))||0,n.left-=parseFloat(C(t).css("margin-left"))||0,i.top+=parseFloat(C(e[0]).css("border-top-width"))||0,i.left+=parseFloat(C(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||$.body;t&&!W.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});C.fn[t]=function(n){var o,s=this[0];return n===T?i(s)?s["inner"+e]:r(s)?s.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){(s=C(this)).css(t,g(this,n,e,s[t]()))})}}),H.forEach(function(n,i){var r=i%2;C.fn[n]=function(){var n,o,s=C.map(arguments,function(t){var i=[];return n=e(t),"array"==n?(t.forEach(function(t){return t.nodeType!==T?i.push(t):C.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(Y.fragment(t)))}),i):"object"==n||null==t?t:Y.fragment(t)}),a=this.length>1;return s.length<1?this:this.each(function(e,n){o=r?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=C.contains($.documentElement,o);s.forEach(function(e){if(a)e=e.cloneNode(!0);else if(!o)return C(e).remove();o.insertBefore(e,n),c&&j(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},C.fn[r?n+"To":"insert"+(i?"Before":"After")]=function(t){return C(t)[n](this),this}}),Y.Z.prototype=m.prototype=C.fn,Y.uniq=O,Y.deserializeValue=E,C.zepto=Y,C}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function n(t,n,i){var r=e.Event(n);return e(t).trigger(r,i),!r.isDefaultPrevented()}function i(t,e,i,r){return t.global?n(e||b,i,r):void 0}function r(t){t.global&&0==e.active++&&i(t,null,"ajaxStart")}function o(t){t.global&&!--e.active&&i(t,null,"ajaxStop")}function s(t,e){var n=e.context;return!1!==e.beforeSend.call(n,t,e)&&!1!==i(e,n,"ajaxBeforeSend",[t,e])&&void i(e,n,"ajaxSend",[t,e])}function a(t,e,n,r){var o=n.context,s="success";n.success.call(o,t,s,e),r&&r.resolveWith(o,[t,s,e]),i(n,o,"ajaxSuccess",[e,n,t]),u(s,e,n)}function c(t,e,n,r,o){var s=r.context;r.error.call(s,n,e,t),o&&o.rejectWith(s,[n,e,t]),i(r,s,"ajaxError",[n,r,t||e]),u(e,n,r)}function u(t,e,n){var r=n.context;n.complete.call(r,e,t),i(n,r,"ajaxComplete",[e,n]),o(n)}function l(t,e,n){if(n.dataFilter==f)return t;var i=n.context;return n.dataFilter.call(i,t,e)}function f(){}function h(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==w?"json":j.test(t)?"script":T.test(t)&&"xml")||"text"}function p(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function d(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=p(t.url,t.data),t.data=void 0)}function m(t,n,i,r){return e.isFunction(n)&&(r=i,i=n,n=void 0),e.isFunction(i)||(r=i,i=void 0),{url:t,data:n,success:i,dataType:r}}function y(t,n,i,r){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,c){o=e.type(c),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?t.add(c.name,c.value):"array"==o||!i&&"object"==o?y(t,c,i,n):t.add(n,c)})}var v,g,x=+new Date,b=t.document,E=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,j=/^(?:text|application)\/javascript/i,T=/^(?:text|application)\/xml/i,w="application/json",C="text/html",N=/^\s*$/,S=b.createElement("a");S.href=t.location.href,e.active=0,e.ajaxJSONP=function(n,i){if(!("type"in n))return e.ajax(n);var r,o,u=n.jsonpCallback,l=(e.isFunction(u)?u():u)||"Zepto"+x++,f=b.createElement("script"),h=t[l],p=function(t){e(f).triggerHandler("error",t||"abort")},d={abort:p};return i&&i.promise(d),e(f).on("load error",function(s,u){clearTimeout(o),e(f).off().remove(),"error"!=s.type&&r?a(r[0],d,n,i):c(null,u||"error",d,n,i),t[l]=h,r&&e.isFunction(h)&&h(r[0]),h=r=void 0}),!1===s(d,n)?(p("abort"),d):(t[l]=function(){r=arguments},f.src=n.url.replace(/\?(.+)=\?/,"?$1="+l),b.head.appendChild(f),n.timeout>0&&(o=setTimeout(function(){p("timeout")},n.timeout)),d)},e.ajaxSettings={type:"GET",beforeSend:f,success:f,error:f,complete:f,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:w,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:f},e.ajax=function(n){var i,o,u=e.extend({},n||{}),m=e.Deferred&&e.Deferred();for(v in e.ajaxSettings)void 0===u[v]&&(u[v]=e.ajaxSettings[v]);r(u),u.crossDomain||(i=b.createElement("a"),i.href=u.url,i.href=i.href,u.crossDomain=S.protocol+"//"+S.host!=i.protocol+"//"+i.host),u.url||(u.url=t.location.toString()),(o=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,o)),d(u);var y=u.dataType,x=/\?.+=\?/.test(u.url);if(x&&(y="jsonp"),!1!==u.cache&&(n&&!0===n.cache||"script"!=y&&"jsonp"!=y)||(u.url=p(u.url,"_="+Date.now())),"jsonp"==y)return x||(u.url=p(u.url,u.jsonp?u.jsonp+"=?":!1===u.jsonp?"":"callback=?")),e.ajaxJSONP(u,m);var E,j=u.accepts[y],T={},w=function(t,e){T[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:t.location.protocol,O=u.xhr(),A=O.setRequestHeader;if(m&&m.promise(O),u.crossDomain||w("X-Requested-With","XMLHttpRequest"),w("Accept",j||"*/*"),(j=u.mimeType||j)&&(j.indexOf(",")>-1&&(j=j.split(",",2)[0]),O.overrideMimeType&&O.overrideMimeType(j)),(u.contentType||!1!==u.contentType&&u.data&&"GET"!=u.type.toUpperCase())&&w("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(g in u.headers)w(g,u.headers[g]);if(O.setRequestHeader=w,O.onreadystatechange=function(){if(4==O.readyState){O.onreadystatechange=f,clearTimeout(E);var t,n=!1;if(O.status>=200&&O.status<300||304==O.status||0==O.status&&"file:"==C){if(y=y||h(u.mimeType||O.getResponseHeader("content-type")),"arraybuffer"==O.responseType||"blob"==O.responseType)t=O.response;else{t=O.responseText;try{t=l(t,y,u),"script"==y?(0,eval)(t):"xml"==y?t=O.responseXML:"json"==y&&(t=N.test(t)?null:e.parseJSON(t))}catch(t){n=t}if(n)return c(n,"parsererror",O,u,m)}a(t,O,u,m)}else c(O.statusText||null,O.status?"error":"abort",O,u,m)}},!1===s(O,u))return O.abort(),c(null,"abort",O,u,m),O;var L=!("async"in u)||u.async;if(O.open(u.type,u.url,L,u.username,u.password),u.xhrFields)for(g in u.xhrFields)O[g]=u.xhrFields[g];for(g in T)A.apply(O,T[g]);return u.timeout>0&&(E=setTimeout(function(){O.onreadystatechange=f,O.abort(),c(null,"timeout",O,u,m)},u.timeout)),O.send(u.data?u.data:null),O},e.get=function(){return e.ajax(m.apply(null,arguments))},e.post=function(){var t=m.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=m.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,i){if(!this.length)return this;var r,o=this,s=t.split(/\s/),a=m(t,n,i),c=a.success;return s.length>1&&(a.url=s[0],r=s[1]),a.success=function(t){o.html(r?e("<div>").html(t.replace(E,"")).find(r):t),c&&c.apply(o,arguments)},e.ajax(a),this};var O=encodeURIComponent;e.param=function(t,n){var i=[];return i.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(O(t)+"="+O(n))},y(i,t,n),i.join("&").replace(/%20/g,"+")}}(e),function(t,e){function n(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}function i(t){return r?r+t:t.toLowerCase()}var r,o,s,a,c,u,l,f,h,p,d="",m={Webkit:"webkit",Moz:"",O:"o"},y=document.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,g={};y.style.transform===e&&t.each(m,function(t,n){return y.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",r=n,!1):void 0}),o=d+"transform",g[s=d+"transition-property"]=g[a=d+"transition-duration"]=g[u=d+"transition-delay"]=g[c=d+"transition-timing-function"]=g[l=d+"animation-name"]=g[f=d+"animation-duration"]=g[p=d+"animation-delay"]=g[h=d+"animation-timing-function"]="",t.fx={off:r===e&&y.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(n,i,r,o,s){return t.isFunction(i)&&(o=i,r=e,i=e),t.isFunction(r)&&(o=r,r=e),t.isPlainObject(i)&&(r=i.easing,o=i.complete,s=i.delay,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),s&&(s=parseFloat(s)/1e3),this.anim(n,i,r,o,s)},t.fn.anim=function(i,r,d,m,y){var x,b,E,j={},T="",w=this,C=t.fx.transitionEnd,N=!1;if(r===e&&(r=t.fx.speeds._default/1e3),y===e&&(y=0),t.fx.off&&(r=0),"string"==typeof i)j[l]=i,j[f]=r+"s",j[p]=y+"s",j[h]=d||"linear",C=t.fx.animationEnd;else{b=[];for(x in i)v.test(x)?T+=x+"("+i[x]+") ":(j[x]=i[x],b.push(n(x)));T&&(j[o]=T,b.push(o)),r>0&&"object"==typeof i&&(j[s]=b.join(", "),j[a]=r+"s",j[u]=y+"s",j[c]=d||"linear")}return E=function(e){if(void 0!==e){if(e.target!==e.currentTarget)return;t(e.target).unbind(C,E)}else t(this).unbind(C,E);N=!0,t(this).css(g),m&&m.call(this)},r>0&&(this.bind(C,E),setTimeout(function(){N||E.call(w)},1e3*(r+y)+25)),this.size()&&this.get(0).clientLeft,this.css(j),0>=r&&setTimeout(function(){w.each(function(){E.call(this)})},0),this},y=null}(e),function(t){function e(n){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var n=arguments;return e(function(e){t.each(i,function(i,r){var a=t.isFunction(n[i])&&n[i];s[r[1]](function(){var n=a&&a.apply(this,arguments);if(n&&t.isFunction(n.promise))n.promise().done(e.resolve).fail(e.reject).progress(e.notify);else{var i=this===o?e.promise():this,s=a?[n]:arguments;e[r[0]+"With"](i,s)}})}),n=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},s={};return t.each(i,function(t,e){var n=e[2],a=e[3];o[e[1]]=n.add,a&&n.add(function(){r=a},i[1^t][2].disable,i[2][2].lock),s[e[0]]=function(){return s[e[0]+"With"](this===s?o:this,arguments),this},s[e[0]+"With"]=n.fireWith}),o.promise(s),n&&n.call(s,s),s}var n=Array.prototype.slice;t.when=function(i){var r,o,s,a=n.call(arguments),c=a.length,u=0,l=1!==c||i&&t.isFunction(i.promise)?c:0,f=1===l?i:e(),h=function(t,e,i){return function(o){e[t]=this,i[t]=arguments.length>1?n.call(arguments):o,i===r?f.notifyWith(e,i):--l||f.resolveWith(e,i)}};if(c>1)for(r=new Array(c),o=new Array(c),s=new Array(c);c>u;++u)a[u]&&t.isFunction(a[u].promise)?a[u].promise().done(h(u,s,a)).fail(f.reject).progress(h(u,o,r)):--l;return l||f.resolveWith(s,a),f.promise()},t.Deferred=e}(e),e});
