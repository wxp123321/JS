function NonNullSet()
{
     //�����ӵ�����
	 //��Ϊ��ͨ�������ø���Ĺ��캯������ʼ��ͨ���ù��캯�����ô����Ķ���
	Set.apply(this,arguments);
}


//��NonNullSet����ΪSet������
NonNullSet.prototype = inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet;

//Ϊ�˽�null��undefined�ų����⣬ֻ����дadd()����
NonNullSet.prototype.add = function()
{
  //�������ǲ���null��undefined
	for(var i = 0; i < arguments.length;i++)
		{
		if(arguments[i] == null)
			{
			throw new Error("Can't add null or undefined to a NonNullSet");
			}
		//���ø����add()������ִ��ʵ�ʲ������
		return Set.prototype.add.apply(this,arguments);
		}
};





















