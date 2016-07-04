/判定o是否为一个类数组对象
//字符串和函数有length属性，但是它们可以用typeof检测将其排除，
//在客户端JavaScript中，DOM文本节点也有length属性，需要额外判断o.nodeType！=3将其排除
function isArrayLike(o)
{
 if(o &&                                            //o非null,undefined等
   typeof o == "object"&&                           //o是对象   
   ifFinite(o.length)                               //o.length是有限数值
   && o.length >= 0                                 //o.length为非负值
   &&o.length===Math.floor(o.length)                //o.length是整数
   &&o.length < 4294967296)                         //o.length<2^32
	 return true;                                   
 else
	 return false;
}
