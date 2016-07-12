angular.module('myApp.home', [])
.controller('homeCtrl',[ '$scope', '$rootScope', '$state', 'itemService' , function($scope, $rootScope, $state, itemService){
	this.welcomeText = 'Welcome to My Assignment !';

	$scope.openBuild = function(type){
		if(type === 'build'){
			$state.go('build');
		}else if(type=== 'metrics') {
			$state.go('metrics');
		}else {
			$state.go('testDetail');
		}
	}; 

	$scope.itemCollection = itemService.getItems(); 
}]);