function Set()                            //这是一个构造函数
{                                         
	this.values = {};                     //集合数据保存在对象的属性里
	this.n = 0;                           //集合中值得个数 
	this.add.apply(this,arguments);       //把所有参数都添加进这个集合
}



//将每个参数都添加至集合中
Set.prototype.add = function()
{
      for(var i = 0;i < arguments.length;i++)  //遍历每个集合
	   {
	      var val = arguments[i];              //待添加到集合中的值
	   }
      var str = Set._v2s(val);                 //把它转换为字符串
      if(!this.values.hasOwnProperty(str))     //如果不在集合中
       {
    	  this.values[str] = val;              //将字符串和值对应起来
    	  this.n++;                            //集合中的值得计数加一
       }
      return this;                             //支持链式方法调用
};



//从集合删除元素，这些元素由参数指定
Set.prototype.remove= function()
{
    for(var i = 0;i < arguments.length;i++)   //遍历每个参数
	  {
	    var str = Set._v2s(arguments[i]);     //将字符串和值对应起来
	    if(this.values.hasOwnProperty(str))   //如果它在集合中
	     {
	       delete this.values[str];           //删除它
	       this.n--;                          //集合值得计数减一
	     }
	  }
    return this;         
};


//如果集合包含这个值，则返回true;否则返回false
Set.prototype.contains = function()
{
	return this.values.hasOwnProperty(Set._v2s(value));
};

//返回集合大小
Set.prototype.size = function()
{
 return this.n;	
};

//遍历集合中所有的元素，在指定的上下文中调用f
Set.v2s = function(f,context)
{
  for(var s in this.values)      //遍历集合中的所有元素
	  if(this.values.hasOwnProperty(s))        //忽略继承的属性
		  f.call(context,this.values[s]);      //调用f,传入value
};


//这是一个内部函数，用以将任意JavaScript值和唯一的字符串对应起来
Set._v2s = function(val)
{
	switch(val)
	{
		case undefined: return "u";       //特殊的原始值只有一个字母代码
		case null: return "n";
		case false: return "f";
		case true: return "t";
		default: switch(typeof val)
		{
		   case "number": return "#"+val;    //数字都带有“#”前缀
		   case "string": return '"'+val;    //字符串带有‘"’前缀
		   default:return '@'+objectId(val);  
		}
	}
};


//对于任意对象，都会返回一个字符串
//针对不同的对象，这个函数会返回不同的字符串
//对于同一个对象的多次调用，总是返回相同的字符串
//为了做到这一点，它给o创建了一个属性，在ES5中，这个属性是不可枚举且只读的
function objectId(o)
{
  var prop = "|**objectid**|";    //私有属性，用以存放id
  if(!o.hasOwnProperty(prop))     //如果对象没有id
	  o[prop] = Set._v2s.next++;  //将下一个值赋给它
  return o[prop];
}
Set._v2s.next = 100;   //初始值








































