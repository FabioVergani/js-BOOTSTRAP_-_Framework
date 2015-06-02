 function isObject(e){return {theObject:e,v:typeof(e)==='object',valueOf:function(){return this.v;}};}
 
 
 
the typical use of protoype-based objects:

// define a new type of object
var foo = function() {};  

// define a default attribute and value that all objects of this type will have
foo.prototype.attribute1 = "defaultValue1";  

// create a new object of my type
var emptyObj = new foo();
console.log(emptyObj.attribute1);       // outputs defaultValue1
