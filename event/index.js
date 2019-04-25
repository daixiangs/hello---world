// import Vue from 'vue';
// import App from './App.vue'
// console.log(Vue);

// new Vue({
// 	el:'#app',
// 	render:h=>h(App),
// })



// new Vue({
// 	el:'#app',
// 	data:{
// 		mes:'明天'
// 	}
// })




// alert(44444)

// console.log($('#app'))
let app = document.getElementById('app');
app.style.display = 'none';
// let oul = $($('.tab'))
let oul = document.getElementsByTagName('ul')[0];
console.log(oul);

// 取消浏览器默认行为

// $("#app").bind("contextmenu", function () {
// 	return false;
// })

// document.oncontextmenu = function () {
// 	return false;
// }

(()=>{
	// function tick(params) {
	// 	params.style.display = 'block';

	// }
	// window.addEventListener('click')


	// $('#app').mousedown = (e)=>{
	// 	console.log(e.which)
	// }
})()

// $('#app').mousedown = (e) => {
// 	console.log(e.which)
// }
// function fn (ev){
// 	ev = ev || window.event;
// 	console.log(ev.which);
// 	let target = ev.target;
// }

// app.addEventListener('mousedown',fn,true)


let flag = -1;
document.onmousedown = (e)=>{
	console.log(e.which);
	let left = e.clientX;
	let top = e.clientY;
	let appW = app.offsetWidth;
	let appH = app.offsetHeight;
	flag *= -1;
	flag === 1 ? app.style.display = 'block' : app.style.display = 'none';
	if (left === window.innerWidth) {
		left = left - appW
	}
	if (top === window.innerHeight) {
		top = top - appH
	}
	if (left + appW > window.innerWidth) {
		left = window.innerWidth - appW;
		app.style.right = 0;
	}
	if (top + appH > window.innerHeight) {
		top = window.innerHeight - appH + 'px';
		console.log(top)
		app.style.bottom = 0;
	}
	app.style.left = left + 'px'
	app.style.top = top + 'px'
}