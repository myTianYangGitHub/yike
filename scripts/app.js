//定义最大的模快
var Yike=angular.module('Yike',['ngRoute','Nav','Today','Older']);
Yike.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl:'../views/today.html',
		controller:'TodayController'
	}).when('/older',{
		templateUrl:'../views/older.html',
		controller:'OlderController'
	});
	
}])
Yike.run(['$rootScope',function($rootScope){
	$rootScope.toggled=false;
	$rootScope.key=0;
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
	}
}])
