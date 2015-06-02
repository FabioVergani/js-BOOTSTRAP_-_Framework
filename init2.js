//noprotect
console.clear();
//#START
//javascript:'use strict';
void((function(win){
 var e,o=win,p='NameSpaceUniqueId',G=o.Object,isObject=function(e){return typeof(e)==='object';};
 (((p in o) && o.hasOwnProperty(p) && isObject(e=o[p]) && G.isFrozen(e))?o[p]:(o[p]=(function(gs,ns){
	var o=gs,p=ns,O=G,e={writable:true,value:0};return O.seal(O.create(null,{calls:e,run:e,use:{
	 value:function(win){
		var e=this;console.dir(e);
		if(e.run===0){
		 e.run=++e.calls;
		 //PROCESS, insertmorecodehere*/
		 //e.run=0;
		}else{
		 console.log('pending?');
		}/*;*/
		console.log(e.calls);
	 }
	}
 }));})(o,p))).use(o);
})(window));
//#END
