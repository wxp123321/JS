var generic = 
	{
		//返回一个字符串，这个字符串包含构造函数的名字（如果构造函数有名字）
		//以及所有非继承来的丶非函数属性的名字和值
		toString: function()
		{
			var s = "[";
			//如果这个对象包含构造函数，且构造函数包含名字
			//这个名字会作为返回字符串的一部分
			//需要注意的是，函数的名字属性是非标准的，并不是在所有的环境都可以使用
			if(this.constructor && this.constructor.name)
				{
				s+=this.constructor.name+": ";
				}
			
			//枚举所有非继承且非函数的属性
			var n = 0;
			for(var name in this)
				{
				if(!this.hasOwnProperty(name)) continue; //跳过继承的属性
				var value = this[name];
				if(typeof value === "function") continue; //跳过方法
				if(n++) s+=", ";
				s += name + '=' + value;
				}
			return s+"]";
		},
		
	
    //通过比较this和that的构造函数和实例属性来判断它们是否相等
    //这种方法只适合那些实例属性是原始值的情况，原始值可以通过“===”来比较
    //这里还处理一种特殊情况，就是忽略由Set类添加的特殊属性
  equals: function()
  {
    if(that == null) return false;
    if(this.constructor !== that.constructor) return false;
    for(var name in this)
    	{
    	 if(name === "|**objectid**|") continue;       //跳过特殊属性
    	 if(!this.hasOwnProperty(name)) continue;      //跳过继承来的属性
    	 if(this[name] !== that[name]) return false;   //比较是否相等
    	}
    return true;                                       //如果所有属性都匹配，两个对象相等
  }
   
};























