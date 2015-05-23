//====================================================================================================================================================
/*
Memo Caratteri speciali:

 \u2192 | &rarr;		| →
 \u2026 | &hellip;	| …
 \u2003 | &emsp;

*/
//====================================================================================================================================================

(function(o){
 setGetter=o.defineGetter=function(e,s,f){o.defineProperty(e,s,{get:f})};
})(Object);

//
(function(o){
 var p=o.prototype;
 o.SliceOn=function(x){return p.slice.call(x)};
 setGetter(p,'contiguous',function(){return this.join('')});
})(Array);

//
(function(o){
 o.repeat=function(s,n){var t='';if(n>1){while(n>0){if(n%2===1){t+=s};s+=s;n>>=1}}else{t=n<=0?'':s};return t};
 o.padN=function(s,i,t){return i===0||t.length===0?s:o.repeat(t,i-s.length)+s};
})(String);

//
(function(o){
 setGetter(o,'pick',function(){
  var t=new o(),f=function(s,i){s=String(t['get'+s]());return String.padN(s,i,'0')};
  return{toString:function(){return [f('Hours',2),f('Minutes',2),f('Seconds',2),f('Milliseconds',3)].join(':')},date:t}
 });
})(Date);
//====================================================================================================================================================


console.stamp=function(){
  var o=console.stamp,m=Array.SliceOn(arguments),x=Date.pick,t=x.date;
  m.unshift([x,'|',t-o.t||0,'\t'].contiguous);
  console.log.apply(this,m);
  o.t=t;
};

//====================================================================================================================================================

/*
[0]
 //return isPosIndex(i)?m[i]:m
*/


//====================================================================================================================================================
//console.clear();
(function boot(global){'use strict';
 var undefined=void(0),
 isNum=function(x){return typeof(x)==='number'},
 isPosIndex=function(x){return isNum(x) && x >=0},
 $=global.document,
 $id=function(s){return $.getElementById(s)},
 $tags=function(s,i){var m=$.getElementsByTagName(s);m.first=m[0];setGetter(m,'last',function(){var e=this;return e[e.length-1]});return m},
 $main=function(p){return $[p]||$tags(p).first},
 unid=(function(p){return function(e){var n=e[p];n=isPosIndex(n)?n:0;e[p]=++n;return n}})('uid-n'),
 listenOnce=function(e,l,f){var n=unid(e);n='f'+n;e.addEventListener(l,e[n]=(function(x){f(x);e.removeEventListener(l,e[n],0)}),0)},
 whenDomLoaded=function(e,f){listenOnce(e,'DOMContentLoaded',f)},
 whenLoaded=function(e,f){listenOnce(e,'load',f)};
 //
 var init=function(evt){
  console.stamp('document → ready…');
  var theHtml=$.documentElement,theHead=$main('head'),theBody=$main('body');
  //console.log(theHtml,theHead,theBody);
  /*

   console.log();
   console.log(unid(theBody));
   console.log(unid(theBody));
  */
 };
 //
 var start=function(evt){
  console.stamp('document → loaded!');



 };
 //
 whenDomLoaded(global,init);
 whenLoaded(global,start);
})(window);
//---------------------

