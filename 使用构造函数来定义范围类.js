//����һ�����캯�������Գ�ʼ���´����ġ���Χ����
//ע�⣬���ﲢû�д���������һ�����󣬽����ǳ�ʼ��
function Range(from,to)
{
    //�洢����Χ���󡱵���ʼλ�úͽ���λ�ã�״̬��
	//�����������ǲ��ɼ̳еģ�ÿ������ӵ��Ψһ������
	this.from = from;
	
	this.to = to;
}
//���еġ���Χ���󡱶��̳����������
//ע�⣬���Ե����ֱ����ǡ�prototype��
Range.prototype = 
	{
		//���x�ڷ�Χ�ڣ��򷵻�true�����򷵻�false
		//����������ԱȽ����ַ�Χ��Ҳ���ԱȽ��ַ��������ڷ�Χ
		includes: function(x)
		{
			return this.form <= x && x <= this.to;
		},
        //���ڷ�Χ�ڵ�ÿ������������һ��f
        //�������ֻ�����������ַ�Χ
        foreach: function(f)
        {
        	for(var x = Math.ceil(this.from);x <=this.to;x++)
        		f(x);
        },
        //���ر�ʾ�����Χ���ַ���
        toString: function()
        {
        	return "("+this.from+"...."+this.to+")";
        }
		
	};
//������ʹ�á���Χ���󡱵�һЩ����
var r = new Range(1,3);     //����һ����Χ����
r.includes(2);              //=>true: 2�������Χ��
r.foreach(console.log);     //���1 2 3
console.log(r);             //���(1....3)
















