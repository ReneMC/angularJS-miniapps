angular.module("ToDoList", ["LocalStorageModule"])
.controller("ToDoController", function($scope, localStorageService){
	if(localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist");
	}
	else{
		$scope.todo = [];
	}
	$scope.$watchCollection('todo',function(newValue,oldValue){
		localStorageService.set("angular-todolist",$scope.todo);
	});
	$scope.addActv = function(){
		var data = $scope.newActv;
		$scope.todo.push(data);
		$scope.newActv = {};
	}
	$scope.clean = function(){
		$scope.todo = [];
	}
});