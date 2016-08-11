var app = angular.module("filtersModule",[])
	.filter("removeHtml",function(){
		return function(texto){
			return String(texto).replace(/<[^>]+>/gm, '');
		}
	})
	app.controller("FiltersController",function($scope,$http){
		$scope.mi_html = '\n<div class="jumbo-div>\n<h1 class="super-gigante">Hola!</h1>\n<p class="useless-paragraph">Esto es un párrafo!</p>\n<div/>'
		$scope.unit = 100;
		$scope.moneda = {};
		
		// To calculate exchange rate directly from bitapeso.com's API
		$http.get('http://bitapeso.com/json/')
		.success(function(data){
			$scope.moneda = data;
		})
		// In case Cross Origin issue appears we hard code the object's values
		.error(function(err){
			var data = {
				"btc": 1, 
				"dolar": 18.400999, 
				"mxn": 10998.01 ,
				"usd": 598
			}
			$scope.moneda = data;
		});
	});