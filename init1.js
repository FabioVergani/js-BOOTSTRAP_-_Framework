(function(global){'use strict';
 var $=global;
 if($){
	var $w=$,
	functionPrototype, isFunction, callBind,
	objectPrototype, createObject, freezeObject, emptyObject, has, hasOwnProperty;


	(function($Function){
	 var F=$Function,
	 FP=functionPrototype=F.prototype;//<-
	 isFunction=function(e){return e instanceof F;};
	 callBind=function(e){return FP.call.bind(e);};
	})($w.Function);


	(function($Object){
	 var O=$Object,
	 OP=objectPrototype=O.prototype,
	 create=createObject=O.create,
	 freeze=freezeObject=O.freeze;//<-
	 emptyObject=function(o){return create(null,o);};
	 hasOwnProperty=callBind(OP.hasOwnProperty);
	})($w.Object);


	has=freezeObject(emptyObject({
	 'OwnProperty':{value:function(e,i){var o=e,p=i;return p in o && hasOwnProperty(o,p);}},
	 'OwnMethod':{value:function(e,i){var o=e,p=i;return hasOwnProperty(o,p) && isFunction(o[p]);}}
	}));



console.dir(has);

/*
*/

/*
var =,;
console.log();
,…
*/


 }
})(document.defaultView||window);

