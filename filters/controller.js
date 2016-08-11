var app = angular.module("filtersModule",[])
	.filter("removeHtml",function(){
		return function(texto){
			/* Rule for HTML tags deletion */
			return String(texto).replace(/<[^>]+>/gm,'');
		}
	})
	app.controller("FiltersController",function($scope,$http){
		/* Default values */
		$scope.mi_html = '\n<div class="jumbo-div>\n<h1 class="super-gigante">Hola!</h1>\n<p class="useless-paragraph">Esto es un párrafo!</p>\n<div/>';
		$scope.unit = 100;
		$scope.moneda = {};
		
		/* To calculate real time exchange rate directly from fixer.io's API */
		$http.get('http://api.fixer.io/latest?base=USD')
		.success(function(data){
			console.log(data);
			$scope.moneda = data;
		})
		/* Hard coded the object's values in case Cross Origin issue appears */
		.error(function(err){
			var data = {
				"base":"USD",
				"date":"2016-08-11",
				"rates": {			
					"BRL":3.1522,
					"CAD":1.3054,
					"JPY":101.36,
					"MXN":18.4281,
					"EUR":0.89662
				}
			}
			$scope.moneda = data;
		});
	});