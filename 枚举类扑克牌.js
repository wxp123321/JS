function inherit(p)
{
	if(p === null)
	{
     throw TypeError();
 	}
	if(Object.create)
	{
	 return Object.create(p);	
	}
	var t = typeof p;
	if(t !== "object" && t!== "function")
	{
	 throw TypeError();	
	}
	function f(){};
	f.prototype = p;
	return new f();
}


function enumeration(namesToValues)
{
	//�������Ĺ��캯���Ƿ���ֵ
	var enumeration = function()
	{
		throw "Can't Instantiate Enumerations";
	};
    
	//ö��ֵ�̳����������
	var proto = enumeration.prototype = 
		{
			constructor: enumeration,    //��ʶ����
			toString: function(){return this.name;},
			valueOf: function(){return this.value;},
			toJSON: function(){return this.name;}
		};
	
	enumeration.values = [];   //���Դ��ö�ٶ��������
	
	//���ڴ��������͵�ʵ��
	for(name in namesToValues)    //����ÿһ��ֵ
		{
		  var e = inherit(proto);  //����һ���������Ķ���
		  e.name = name;           //����һ������
		  e.value = namesToValues[name];   //����һ��ֵ
		  enumration[name] = e;      //��������Ϊ���캯��������
		  enumration.values.push(e);  //�����洢��ֵ������
		}
	//һ���෽�������������ʵ�����е���
	enumeration.foreach = function(f,c)
	{
		for(var i = 0;i < this.values.length;i++)
			{
			 f.call(c,this.values[i]);
			}
	};
	return enumeration;
}

//����һ����ʾ"����"����
function Card(suit,rank)
{
  this.suit = suit;  //�ƵĻ�ɫ
  this.rank = rank;  //�Ƶĵ���
}

//ʹ��ö�����Ͷ��廨ɫ�͵���
Card.Suit = enumeration({Clubs: 1,Diamonds: 2,Herats: 3,Spades: 4});
Card.Rank = enumeration({
	Two: 2,Three: 3, Four: 4,Five :5, Six: 6,Seven: 7,Eight:8,Nine:9,Ten:10,Jack: 11,Queen: 12,King:13,Ace: 14
});

//������������������ı�
Card.prototype.toString = function()
{
  return this.rank.toString+"of"+this.suit.toString();	
};

//�Ƚ��˿����������ƵĴ�С
Card.prototype.conpareTo = function(that)
{
 if(this.rank < that.rank)
	 {
	 return -1;
	 }
 if(this.rank > that.rank)
	 {
	 return 1;
	 }
 return 0;
};

//���˿��Ƶ��淨������ƽ�������ĺ���
Card.orderByRank = function(a,b)
{
  return a.compareTo(b);	
};

//�����Ƶķ���������˿��ƽ�������ĺ���
Card.orderBySuit = function(a,b)
{
 if(a.suit < b.suit) return -1;
 if(a.suit > b.suit) return 1;
 if(a.rank < b.rank) return -1;
 if(a.rank > b.rank) return 1;
 return 0;
};

//�������ڱ�ʾһ����׼�˿��Ƶ���
function Deck()
{
 var cards = this.cards = [];	       //һ���ƾ���������ɵ�����
 Cards.Suit.foreach(function (s)       //��ʼ���������
		 
		 {
	   Cards.Rank.foreach(function (r)
			   {
		   cards.push(new Cards(s,r));
			   });
		     
		 });
}

//ϴ�Ƶķ���������ϴ�Ʋ�����ϴ�õ���
Deck.prototype.shuffle = function()
{
 //���������ÿ��Ԫ�أ�����ҳ�������С�õ�Ԫ�أ�����֮����ǰ������Ԫ�أ�����
	var deck = this.cards, len = deck.length;
	for(var i = len - 1;i > 0; i--)
		{
          var r = Math.floor(Math.random()*(i+1)), temp;
          temp = deck[i],
          deck[i] = deck[r];
          deck[r] = temp;
		}
	return this;
};

//���Ƶķ����������Ƶ�����
Deck.prototype.deal = function(n)
{
	if(this.cards.length < n)
		{
		throw "Out of cards";
		retrun this.cards.splice(this.cards.length-n,n);
		};
};

//����һ���µ��˿��ƣ�ϴ�Ʋ�����
var deck = (new Deck()).shuffle();
var hand = deck.deal(13).sort(Card.orderBySuit);




























































































































