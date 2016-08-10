var app = angular.module("myFirstApp", []);

app.controller("FirstController", function($scope,$http) {
	$scope.posts = [];
	$scope.newPost = {};
	$http.get('https://jsonplaceholder.typicode.com/posts')
		.success(function(data){
			$scope.posts = data;
		})
		.error(function(err){
			var data = [{"title": "Error","body":"No Results found."}];
			$scope.posts = data;
		});
	$scope.addPost = function(){
		$http.post("https://jsonplaceholder.typicode.com/posts", {
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
			.success(function(data,status,headers,config){
				$scope.posts.push(data);
				$scope.newPost = {};
			})
			.error(function(error, status, headers, config){
				console.log(error);
			});
	}

});