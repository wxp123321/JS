function flexisum(a)
{
   var total = 0;
   for(var i = 0;i < arguments.length;i++)
	   {
	      var element = argument[i],n;
	      if(element == null) continue;            //忽略null和undefined实参
	        if(isArray(element))                   //如果参数是数组
	    	  {
	    	    n = flexisum.apply(this, element); //递归的计算累加
	    	  }
	        else if(typeof element === "function") //如果是函数的话
	          {
	        	 n = Number(element());            //调用它并做类型转换
	          }
	        else
	          {
	        	n = Number(element);               //否则就直接做类型转换
	          }
	        if(iaNaN(n))                           //如果无法转换为数字，则抛出异常
	          {
	        	throw Error("can't convert"+element+"to number");
	          }
	        total += n;                            //否则将n累加至total
	   }
   return total;
}
