//定义最大的模快
var Yike=angular.module('Yike',['ngRoute','Nav']);
Yike.run(['$rootScope',function($rootScope){
	$rootScope.toggled=false;
	$rootScope.toggle=function(){

		
		$rootScope.toggled=!$rootScope.toggled;
		var navs=document.querySelectorAll('.navs dd');
		if($rootScope.toggled) {
				for(var i=0; i<navs.length; i++) {
					navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
					navs[i].style.transitionProperty = 'all';
					navs[i].style.transitionDelay = '0.2s';
					navs[i].style.transitionTimingFunction = 'ease-out';
					navs[i].style.transform = 'translate(0)';
				}
			} else {
				for(var i=navs.length - 1; i>=0; i--) {
					navs[i].style.transitionDuration = (navs.length - i + 1) * 0.05 + 's';
					navs[i].style.transitionProperty = 'all';
					navs[i].style.transitionDelay = '';
					navs[i].style.transitionTimingFunction = 'ease-out';
					navs[i].style.transform = 'translate(-100%)';
				}
			}



		// var menu = document.querySelector('.menu');
		// var body = document.querySelector('.body');
		// var header = document.querySelector('.header');
		// var navs = document.querySelector('.navs');
		// var navs = navs.querySelectorAll('navs');

		// menu.onclick = function () {
		// 	body.classList.toggle('pull-right');
		// 	navs.classList.toggle('pull-right');
		// 	header.classList.toggle('pull-right');

		// 	if(!this.classList.contains('collapsed')) {
		// 		for(var i=0; i<navs.length; i++) {
		// 			navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
		// 			navs[i].style.transitionProperty = 'all';
		// 			navs[i].style.transitionDelay = '0.2s';
		// 			navs[i].style.transitionTimingFunction = 'ease-out';
		// 			navs[i].style.transform = 'translate(0)';
		// 		}
		// 	} else {
		// 		for(var i=navs.length - 1; i>=0; i--) {
		// 			navs[i].style.transitionDuration = (navs.length - i + 1) * 0.05 + 's';
		// 			navs[i].style.transitionProperty = 'all';
		// 			navs[i].style.transitionDelay = '';
		// 			navs[i].style.transitionTimingFunction = 'ease-out';
		// 			navs[i].style.transform = 'translate(-100%)';
		// 		}
		// 	}

		// 	this.classList.toggle('collapsed');
		// }
	}
}])
