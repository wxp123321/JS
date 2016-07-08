/*
 * 这个函数返回具体Set类的子类
 * 并重写该类的add（）方法用以对添加的元素做特殊的过滤
 * 
 */
function filteredSetSubclass(superclass,filter)
{
 var constructor = function()           //子类构造函数
 {  
	 superclass.apply(this,arguments);  //调用父类构造函数
 };
 var protp = constructor.prototype = inherit(superclass.prototpe);
 proto.constructor = constructor;
 
 proto.add = function()
 {
	 //在添加任何成员之前首先使用过滤器将所有参数进行过滤
	 for(var i = 0; i < arguments.length;i++)
		 {
		 var v = argumrnts[i];
		 if(!filter(v)) throw ("value" + v +"rejected  by filter");
		 }
	 //调用父类的add()方法
	 superclass.prototype.add.apply(this,arguments);
 };
 return constructor;
}