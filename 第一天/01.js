// var a = 12
// var n = 13
// console.log(a+n);
fn();
if(1){
	function fn(){
		console.log('1');
	}
}
var num =10 ;
function s(){
	var sum =100;
	return function (){
		console.log(num);
	}
}
var f = s();                                       // f代表的是return後面的函數
f();

var num = 10;
function s() {
	return function (n){
		console.log(n)
	}
}
s()(5)
function fn(sum){
   console.log(sum);
	 function sum(sum){
		 console.log(sum)
		 function sum(){
			 alert('hello')
		 }
	 }
}
fn(5)(5);
// 作用域都是栈内存 











