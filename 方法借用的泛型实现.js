var generic = 
	{
		//����һ���ַ���������ַ����������캯�������֣�������캯�������֣�
		//�Լ����зǼ̳�����ؼ�Ǻ������Ե����ֺ�ֵ
		toString: function()
		{
			var s = "[";
			//����������������캯�����ҹ��캯����������
			//������ֻ���Ϊ�����ַ�����һ����
			//��Ҫע����ǣ����������������ǷǱ�׼�ģ������������еĻ���������ʹ��
			if(this.constructor && this.constructor.name)
				{
				s+=this.constructor.name+": ";
				}
			
			//ö�����зǼ̳��ҷǺ���������
			var n = 0;
			for(var name in this)
				{
				if(!this.hasOwnProperty(name)) continue; //�����̳е�����
				var value = this[name];
				if(typeof value === "function") continue; //��������
				if(n++) s+=", ";
				s += name + '=' + value;
				}
			return s+"]";
		},
		
	
    //ͨ���Ƚ�this��that�Ĺ��캯����ʵ���������ж������Ƿ����
    //���ַ���ֻ�ʺ���Щʵ��������ԭʼֵ�������ԭʼֵ����ͨ����===�����Ƚ�
    //���ﻹ����һ��������������Ǻ�����Set����ӵ���������
  equals: function()
  {
    if(that == null) return false;
    if(this.constructor !== that.constructor) return false;
    for(var name in this)
    	{
    	 if(name === "|**objectid**|") continue;       //������������
    	 if(!this.hasOwnProperty(name)) continue;      //�����̳���������
    	 if(this[name] !== that[name]) return false;   //�Ƚ��Ƿ����
    	}
    return true;                                       //����������Զ�ƥ�䣬�����������
  }
   
};























