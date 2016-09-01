var Today=angular.module('Today',[]);
Today.controller('TodayController',['$scope','$http',function($scope,$http){
	$http({
		method:'get',
		url:'./api/today.php'
	}).success(function(data){
		$scope.date=data.date;
		$scope.posts=data.posts;
	})
}])