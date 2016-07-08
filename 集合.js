function Set()                            //����һ�����캯��
{                                         
	this.values = {};                     //�������ݱ����ڶ����������
	this.n = 0;                           //������ֵ�ø��� 
	this.add.apply(this,arguments);       //�����в�������ӽ��������
}



//��ÿ�������������������
Set.prototype.add = function()
{
      for(var i = 0;i < arguments.length;i++)  //����ÿ������
	   {
	      var val = arguments[i];              //����ӵ������е�ֵ
	   }
      var str = Set._v2s(val);                 //����ת��Ϊ�ַ���
      if(!this.values.hasOwnProperty(str))     //������ڼ�����
       {
    	  this.values[str] = val;              //���ַ�����ֵ��Ӧ����
    	  this.n++;                            //�����е�ֵ�ü�����һ
       }
      return this;                             //֧����ʽ��������
};



//�Ӽ���ɾ��Ԫ�أ���ЩԪ���ɲ���ָ��
Set.prototype.remove= function()
{
    for(var i = 0;i < arguments.length;i++)   //����ÿ������
	  {
	    var str = Set._v2s(arguments[i]);     //���ַ�����ֵ��Ӧ����
	    if(this.values.hasOwnProperty(str))   //������ڼ�����
	     {
	       delete this.values[str];           //ɾ����
	       this.n--;                          //����ֵ�ü�����һ
	     }
	  }
    return this;         
};


//������ϰ������ֵ���򷵻�true;���򷵻�false
Set.prototype.contains = function()
{
	return this.values.hasOwnProperty(Set._v2s(value));
};

//���ؼ��ϴ�С
Set.prototype.size = function()
{
 return this.n;	
};

//�������������е�Ԫ�أ���ָ�����������е���f
Set.v2s = function(f,context)
{
  for(var s in this.values)      //���������е�����Ԫ��
	  if(this.values.hasOwnProperty(s))        //���Լ̳е�����
		  f.call(context,this.values[s]);      //����f,����value
};


//����һ���ڲ����������Խ�����JavaScriptֵ��Ψһ���ַ�����Ӧ����
Set._v2s = function(val)
{
	switch(val)
	{
		case undefined: return "u";       //�����ԭʼֵֻ��һ����ĸ����
		case null: return "n";
		case false: return "f";
		case true: return "t";
		default: switch(typeof val)
		{
		   case "number": return "#"+val;    //���ֶ����С�#��ǰ׺
		   case "string": return '"'+val;    //�ַ������С�"��ǰ׺
		   default:return '@'+objectId(val);  
		}
	}
};


//����������󣬶��᷵��һ���ַ���
//��Բ�ͬ�Ķ�����������᷵�ز�ͬ���ַ���
//����ͬһ������Ķ�ε��ã����Ƿ�����ͬ���ַ���
//Ϊ��������һ�㣬����o������һ�����ԣ���ES5�У���������ǲ���ö����ֻ����
function objectId(o)
{
  var prop = "|**objectid**|";    //˽�����ԣ����Դ��id
  if(!o.hasOwnProperty(prop))     //�������û��id
	  o[prop] = Set._v2s.next++;  //����һ��ֵ������
  return o[prop];
}
Set._v2s.next = 100;   //��ʼֵ








































