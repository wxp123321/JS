   function getClass(classname)
   {
	   //如果浏览器支持
	   if(document.getElementsByClassName)
		   {
		   	return document.getElementsByClassName(classname);
		   }
	   //如果浏览器不支持
	   var arr = [];
	   var dom = document.getElementsByTagName("*");
	   for(var i = 0; i < dom.length;i++)
		   {
			   var arr2 = dom[i].className.split(" ");
			   for(var j = 0; j < arr2.lengthl;j++)
				   {
				   if(classname == arr2[j])
					   {
					   arr.push(arr2[i]);
					   }
				   }
		   }
	   return arr;
   }
