function cally(x){return Function.prototype.call.bind(x);}
//
function isFunction(x){return x instanceof Function;}
//
//
var framework={fix:{},has:{}};
//
(function(obj,lib){
 var O=obj,OP=O.prototype,hOP=cally(OP.hasOwnProperty),
 expose=lib.has,
 hasOwnProperty=expose.OwnProperty=function(obj,prop){var o=obj,p=prop;return p in o && hOP(o,p);},
 hasOwnMethod=expose.OwnMethod=function(obj,prop){var o=obj,p=prop;return hasOwnProperty(o,p) && isFunction(o[p]);},
 PolyfillMethod=lib.fix.PolyfillMethod=function(obj,prop,fn){var o=obj,p=prop;if(hasOwnMethod(o,p)!== true){o[p]=fn;}};
 expose=null;
 PolyfillMethod(O,'create',function(x){function F(){};F.prototype=x||{};return new F();});
 PolyfillMethod(O,'setPrototypeOf',function(obj,x){var o=obj;o.__proto__=x;return o;});
 O.setPrototypeOf(lib,null);
})(Object,framework);
//
//
delete framework.fix;
//
//console.dir(framework);
//console.dir(Object.create(null));
