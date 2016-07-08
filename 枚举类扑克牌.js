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
	//这个虚拟的构造函数是返回值
	var enumeration = function()
	{
		throw "Can't Instantiate Enumerations";
	};
    
	//枚举值继承自这个对象
	var proto = enumeration.prototype = 
		{
			constructor: enumeration,    //标识类型
			toString: function(){return this.name;},
			valueOf: function(){return this.value;},
			toJSON: function(){return this.name;}
		};
	
	enumeration.values = [];   //用以存放枚举对象的数组
	
	//现在创建新类型的实例
	for(name in namesToValues)    //遍历每一个值
		{
		  var e = inherit(proto);  //创建一个代表它的对象
		  e.name = name;           //给它一个名字
		  e.value = namesToValues[name];   //给它一个值
		  enumration[name] = e;      //将它设置为构造函数的属性
		  enumration.values.push(e);  //将它存储到值数组中
		}
	//一个类方法，用来对类的实例进行迭代
	enumeration.foreach = function(f,c)
	{
		for(var i = 0;i < this.values.length;i++)
			{
			 f.call(c,this.values[i]);
			}
	};
	return enumeration;
}

//定义一个表示"玩牌"的类
function Card(suit,rank)
{
  this.suit = suit;  //牌的花色
  this.rank = rank;  //牌的点数
}

//使用枚举类型定义花色和点数
Card.Suit = enumeration({Clubs: 1,Diamonds: 2,Herats: 3,Spades: 4});
Card.Rank = enumeration({
	Two: 2,Three: 3, Four: 4,Five :5, Six: 6,Seven: 7,Eight:8,Nine:9,Ten:10,Jack: 11,Queen: 12,King:13,Ace: 14
});

//定义用以描述牌面的文本
Card.prototype.toString = function()
{
  return this.rank.toString+"of"+this.suit.toString();	
};

//比较扑克牌中两张牌的大小
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

//以扑克牌的玩法规则对牌进行排序的函数
Card.orderByRank = function(a,b)
{
  return a.compareTo(b);	
};

//以桥牌的方法规则对扑克牌进行排序的函数
Card.orderBySuit = function(a,b)
{
 if(a.suit < b.suit) return -1;
 if(a.suit > b.suit) return 1;
 if(a.rank < b.rank) return -1;
 if(a.rank > b.rank) return 1;
 return 0;
};

//定义用于表示一副标准扑克牌的类
function Deck()
{
 var cards = this.cards = [];	       //一副牌就是由牌组成的数组
 Cards.Suit.foreach(function (s)       //初始化这个数组
		 
		 {
	   Cards.Rank.foreach(function (r)
			   {
		   cards.push(new Cards(s,r));
			   });
		     
		 });
}

//洗牌的方法：重新洗牌并返回洗好的牌
Deck.prototype.shuffle = function()
{
 //遍历数组的每个元素，随机找出牌面最小得到元素，并与之（当前遍历的元素）交换
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

//发牌的方法，返回牌的数组
Deck.prototype.deal = function(n)
{
	if(this.cards.length < n)
		{
		throw "Out of cards";
		retrun this.cards.splice(this.cards.length-n,n);
		};
};

//创建一副新的扑克牌，洗牌并发牌
var deck = (new Deck()).shuffle();
var hand = deck.deal(13).sort(Card.orderBySuit);




























































































































