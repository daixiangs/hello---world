 
// ;var a = 10,
// 	b = 11,
// 	c = 12;
// 	console.log(a);
// 	      // 默认是window.c = 12;

// function test(a) {
// 	a = 1;
// 	var b = 2;
// 	console.log(c);  // 12  
// 	c = 3;       // 外边的c没有声明,函数体里边也是window.c = 3    把外边的12给改了;
// }
// test(10);
// console.log(a);  // 10
// console.log(b);  // 11
// console.log(c);  // 3                    ;4行的c是 12  ;到10行变成了3     ;最终输出3  



/* if (("a" in window)) {
	var a = 1;
		b = 10;
}
alert(b); */
/* 
var a = 4;

function b(x, y, a) {
	alert(a);   // 3
	arguments[2] = 10;
	alert(a);     //  10  
	// return   [x,y,a]
	return null
}
a = b(1, 2, 3);
console.log(a);
alert(a); */


/* var m =1;
  m = null;
	alert(m); */
 





/* 
 var foo = 'hello';
 (function (foo) {
 	console.log(foo);    // daixiang
 	var foo = foo || 'world';  
 	console.log(foo);   // daxiang
 })('daixiang');
 console.log(foo);    // hello */










//  10、


 /* var a = 9;   // 79行执行 a 0;80行 执行  a 1; 82行执行  a 1;
console.log(a)
 function fn() {
 	a = 0;
 	return function (b) {
 		return b + a++;
 	}
 }
 var f = fn()
 var m = f(5);
 console.log(m);   // 5
 var n = fn()(5);   // 5
 console.log(n);
 var x = f(5);     // 6  84行执行只会让fn的返回值执行 a=0不会加载;
 console.log(x);
 console.log(a);   */      //   2










 /* for (var i = 0; i < 10; i++) {
 	setTimeout(function () {
 		console.log(i);
 	}, 5000);
	 console.log(i);
 }; */
 function fn(){
	 console.log(f)
	 function f(){
		 alert(111)
	 }
	 var f = 1;
 }
 fn(100);
 










