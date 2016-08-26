var app = angular.module("hideApp", []);

app.controller("hideController", function($scope,$http) {
	
	$scope.posts = [];
	$scope.newPost = {};
	$scope.loading = true;
	$scope.style = 'info';
	
	$http.get('https://jsonplaceholder.typicode.com/posts')
		.success(function(data){
			setTimeout(function(){
				$scope.$apply(function(){
					$scope.posts = data;
					$scope.loading = false;
				})
			},1500);
		})
		.error(function(err){
			setTimeout(function(){
				$scope.$apply(function(){
					var data = [{"title": "It looks like something's wrong :(","body":"Error: No Results found."}];
					$scope.posts = data;
					$scope.loading = false;
					$scope.style = 'danger';
				})
			},5000);
		
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