/*
���ַ�����ʽ����o������
���o��null������"null"�����o��NaN������"nan"
���typeof�����ص�ֵ����"object"���򷵻����ֵ
��ע�⣬��һЩJavaScript��ʵ�ֽ�������ʽʶ��Ϊ������
���o���಻��"Object"���򷵻����ֵ
���o�������캬˰����������캯���������ƣ��򷵻��������
����һ�ɷ���"Object"
*/
function type(o)
{
	//����nullֵ����������
    if(o === null)
	 {
	   return "null";
	 }
    //����NaN���������Σ�NaN�����������
    if(o !== o)
     {
       return "nan";	
     }
    //���typeof��ֵ����"object"����ʹ�����ֵ
    //�����ʶ���ԭʼֵ�����ͺͺ���
    if((t = typeof o) !== "object")
     {
       return t;	
     }
    //���ض��������������ֵΪ"Object"
    //���ַ�ʽ����ʶ�������������ö���
    if((c == classof(o))!="Object")
     {
       return c;	
     }
    //�����������캯�������ִ��ڵĻ����򷵻���
    if(o.constructor && typeof o.constructor === "function" &&
    		(n = o.constructor.getName()))
     {
       return n;	 
     }
    //�������Ͷ��޷��б�һ�ɷ���"Object"
    return "Object";
    
    
    //���ض������
    function classof(o)
    {
    	return Object.prototype.toString.call(o).slice(8,-1);
    }
    
    //���غ���������(�����ǿ��ַ���)�����Ǻ����Ļ�����"null"
    Function.prototype.getName = function()
    {
    	if("name" in this)
    	 {
    	   return this.name;	
    	 }
    	return this.name = this.toString().match(/fucntion\s*([^(]*)\(/)[1];
    }; 
}