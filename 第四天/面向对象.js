// 自执行函数左边有 = 让一个变量接受自执行函数的返回值  
// function fn() {

// };
// fn();
// fn();
// 类的继承 封装 多态
// new 操作符 1 进入函数之后 创建一个空对象  2 当前作用域的this指向空对象 3 代码执行完默认返回这个对象
// var num = new Number()  // 默认是 0;    实例创建
// var ary = new Array(13);
// const name = new type(arguments);
/* 
*
*
*
*
*
*
*
*
 */



// var aa = new RegExp(0987654);

/* function Fn() {
	this.x =m;
	this.y =n;
}
Fn.prototype.getX = function () {
	console.log(this.x)
}
var a = new Fn(1,2);

var b = new Fn(3,4);
console.log(a.getX); */
// 函数.prototype  是一个对象
// Fn :{prototype :{constructor:Fn}}

/*Array.prototype.quChong = function () {
        var newAry = [];
        for(var i=0;i<this.length;i++){
            var cur = this[i];
            if(newAry.indexOf(cur)===-1){
                newAry.push(cur)
            }
        }
        return newAry
    }
    var  ary1 = [12,12,8,12,8,99,0];
    var a = ary1.quChong();
    console.log(a);*/

//console.log(new Date().changeTime());// 2019-01-21 17:43:39
// 如果扩展的属性名和内置的属性名相同，会把原有的方法给覆盖掉；
// var date = new Date()
Date.prototype.changTime = function () {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	if(hour<10){
		hour= '0' + hour
	};
	if(minute<10){
		minute = '0' + minute
	}
	if(second<10){
		second = '0' + second
	}
	return  `${hour}时${minute}分${second}秒`
	// console.log(hour,minute,second);
	
}
	// var f = new Date();
	// f.changTime();
	// console.log(mm)
var ele = document.createElement('p');
document.body.appendChild(ele);
ele.className = 'para';
setInterval(function (){
	var f = new Date();
	
	
	ele.innerHTML = f.changTime();
},1000)


