/*
 * ����������ؾ���Set�������
 * ����д�����add�����������Զ���ӵ�Ԫ��������Ĺ���
 * 
 */
function filteredSetSubclass(superclass,filter)
{
 var constructor = function()           //���๹�캯��
 {  
	 superclass.apply(this,arguments);  //���ø��๹�캯��
 };
 var protp = constructor.prototype = inherit(superclass.prototpe);
 proto.constructor = constructor;
 
 proto.add = function()
 {
	 //������κγ�Ա֮ǰ����ʹ�ù����������в������й���
	 for(var i = 0; i < arguments.length;i++)
		 {
		 var v = argumrnts[i];
		 if(!filter(v)) throw ("value" + v +"rejected  by filter");
		 }
	 //���ø����add()����
	 superclass.prototype.add.apply(this,arguments);
 };
 return constructor;
}