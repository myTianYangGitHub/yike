var Older=angular.module('Older',['GolbalService']);
Older.controller('OlderController', ['$scope', '$http','format', function($scope,$http,format){
	// var res=format({name:"aa",age:10});
	// console.log(res)
	$http({
		method:'post',
		url:'../../api/older.php',
		data:format({today:'2016-08-30'}),
		headers:{
			'Content-type':'application/x-www-form-urlencoded'
		}
	}).success(function(data){
		$scope.date=data.date;
		$scope.posts=data.posts;
		console.log(data);
	})
}])