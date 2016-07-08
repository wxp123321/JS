function classof(o)
{
 if(o == null)
	 return "Null";
 if(o == undefined)
	 return "undefined";
 return Object.prototype.toString.call(o).slice(8,-1); 
}