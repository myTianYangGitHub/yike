var GolbalService=angular.module('GolbalService',[]);
GolbalService.factory('format', function(){
	return function (obj){
		var s='';
		for(var key in obj){
			s+= key + "=" +obj[key]+'&'
		}
		return s.slice(0, -1);
	};
})