1.

function C1(name) {
	if (name) {
		this.name = name;
	};
}

function C2(name) {
	this.name = name;
}

function C3(name) {
	this.name = name || 'join';
}
C1.prototype.name = 'Tom';
C2.prototype.name = 'Tom';
C3.prototype.name = 'Tom';
console.log(new C1().name)
console.log(new C2().name)
console.log(new C3().name)


	


function fun() {
	this.a = 0;
	this.b = function () {
		alert(this.a);
	}
}
fun.prototype = {
	b: function () {
		this.a = 20;
		alert(this.a);
	},
	c: function () {
		this.a = 30;
		alert(this.a)
	}
}
var my_fun = new fun();
my_fun.b();   //  0
my_fun.c();   //  30



-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
3.

function Foo() {
	this.getName = function () {
		console.log(1);
	};
	return this;
}
Foo.getName = function () {
	console.log(2);
};
Foo.prototype.getName = function () {
	console.log(3);
};
var getName = function () {
	console.log(4);
};

function getName() {
	console.log(5);
}

Foo.getName();     
getName();      
Foo().getName();   
getName();      
new Foo.getName();      
new Foo().getName();			
new new Foo().getName()   


	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
	4.

function Fn() {
	this.x = 100;
	this.y = 200;
	this.getX = function () {
		console.log(this.x);
	}
}
Fn.prototype.getX = function () {
	console.log(this.x);
};
Fn.prototype.getY = function () {
	console.log(this.y);
};
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.getX === Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY()


	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
	5.
var name = 'zhufengpeixun';
var Fn = function (name) {
	var name = 'world';
	this.name = 'zhufeng';
	this.sex = function () {
		this.name = 'hello';
	}
}
var f1 = new Fn(name);
var f2 = new Fn('age');
console.log(f1.name);
console.log(f2.age);
f1.sex();
console.log(f1);
f1.sex === f2.sex
Fn.name == f1.name


	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
6.

function Fn() {
	var a = 1
	this.a = a
}
Fn.prototype.say = function () {
	this.a = 2
}
Fn.prototype = new Fn;
var f1 = new Fn;
f1.__proto__.b = function () {
	this.a = 3
};
console.log(f1.a)
console.log(f1.prototype)
console.log(f1.b)
f1.hasOwnProperty('b')
'b' in f1
console.log(f1.constructor == Fn)






function sum() {

// arguments.prototype = 
arguments.__proto__ = Array.prototype;// 用数组的原型的内置函数
arguments.sort(function (a,b){
	return a-b;
});
arguments.pop();
arguments.shift();
var tt = 0;
for(var i= 0;i<arguments.length;i++){
	tt = tt  + arguments[i];

}
return  tt/arguments.length;

}

sum(100,300,100,200)










Array.prototype.zeng = function (n) {
	var cur = this.length;
	// arguments = n;
	console.log(cur);
	for(var i = cur; i<cur + arguments.length;i++){
		this.ind = i;
		for(var j=0;j<arguments.length;j++){
		this[ind] = arguments[j];
		}
	}
	// this[cur] = n;
	return this.length;
}
var ary = [1,2,3]
ary.zeng(4,5,6,9);



​


// Array.prototype.myShift = function () {
// 	var cur = this[0];
// 	console.log(cur)
// 	this = this - cur;
// 	return this.length;
// };
// arr=[2,3,4];
// arr.myShift();    语法报错