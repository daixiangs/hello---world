/* var mm ={
	a:2,
	b:(function fn(name, age) {
	var obj = {};
	this.name = name;
	this.age = age;
	return this;
})

};

var oo = fn('daixiang',19);
console.log(oo); */
function A(){
	this.name=12;
}
function B(){
	A.call(this);
	this.age='daixiang'
}
var b =new B;
// B的实例中私有属性为name 和age







