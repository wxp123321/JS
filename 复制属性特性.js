/*
  给Object.prototypoe添加一个不可枚举的extend()方法
  这个方法继承自调用它的对象，将作为参数传入的对象的属性一一复制
  除了这个值之外，也复制属性的所有特性，除非在目标对象中存在同名的属性
  参数对象的所有自有对象（包括不可枚举的属性）也会一一复制。
*/
Object.defineProperty(Object.prototype,"extend",      //定义Object.prototype.extend
		{
	        writable:true,
	        enumerable: false,                        //将其定义为不可枚举的
	        configurable:true,
	        value: function(o)                        //值就是这个函数
	        {
	        	//得到所有的自有属性，包括不可枚举属性
	        	var names = Object.gegtOwnPropertyNames(o);
	        	//遍历它们
	        	for(var i = 0;i < names.length;i++)
	        		{
	        		//如果属性已经存在，则跳过
	        		if(names[i] in this) continue;
	        		//获得o中的属性的描述符
	        		var desc = Object.getOwnPropertyDescripttor(o,names[i]);
	        		//用它给this创建属性
	        		Object.defineProperty(this,names[i],desc);
	        		}   		
	        }
		}		
);
