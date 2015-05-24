(function(global){'use strict';
 function consume(arraylike,callback){var m=arraylike,f=callback;while(m.length!==0){f(m.shift());};};

 var $=global;
 if($){

	var $w=$,
	functionPrototype, isFunction, callBind,
	objectPrototype, createObject, freezeObject, emptyObject, has, hasOwnProperty,
	console;



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
	 'OwnMethod':{value:function(e,i){var o=e,p=i;return has.OwnProperty(o,p) && isFunction(o[p]);}}
	}));


	(function(a,b){
	 function test(have){return function(obj,prop,v){var o=obj,p=prop,x=have(o,p);if(x===false){o[p]=v;};return !x;};};
	 var object2fill,prop2found,filled,methods=test,fillPropertyWith=methods(a),fillMethodWith=methods(b);



	 prop2found='console';
	 object2fill=$w;
	 methods=[
		'trace','table','log','clear','dir','dirxml',
		'warn','error','exception','info','count',
		'group','groupCollapsed','groupEnd',
		'profile','profileEnd','markTimeline',
		'time','timeEnd','timeStamp',
		'debug','assert'
	 ];

	 if(fillPropertyWith(object2fill,prop2found,emptyObject())){
		(function(object,array){
		 var o=filled=object,m=array;
		 consume(m,function(i){o[i]=function(){};});
		})(object2fill[prop2found],methods);
	 }else{

		(function(object,array){
		 var o=filled=object,m=array;
		 consume(m,function(i){fillMethodWith(o,i,function(){});});
		})(object2fill[prop2found],methods);

	 };

	 $w.console.dir(console);

	})(has.OwnProperty,has.OwnMethod);

	/*
	 ...
	*/
 }
})(document.defaultView||window);



/*console.dir();
var =,;
console.log();
,…


=====================================================
function cally(x){return Function.prototype.call.bind(x);

is.something($w)
is={
	defined:function(obj){var e=obj;return e!=='' && typeof(e)!=='undefined';},
	something:function(obj){var e=obj;return e!==null && this.defined(e);}/*,…* /
 };
*/
