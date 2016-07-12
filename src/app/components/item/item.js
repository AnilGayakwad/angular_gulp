angular.module('myApp.item', [])
.controller('itemCtrl',['$scope', '$rootScope', 'itemService' , function($scope, $rootScope, itemService){

	$scope.aboutText = 'This is the item component!';

	$scope.item = {
		'buildNo': Math.random(),
        'type': 'build',
        'owner': '',
        'timeStamp': '',
        'state': 'pending',
        'metrics': {
            'status': 'pending',
            'test': '0',
            'maintainablity': '0',
            'security': '0',
            'workmanship': '0'
        },
        'build': {
            'status': 'pending',
            'timeStarted': '4/18/2014 12:12pm'
        },
        'unitTest': {
            'status': 'pending',
            'failedTest': 15,
            'passedTest': 20
        },
        'functionalTest': {
            'status': 'pending',
            'failedTest': 45,
            'passedTest': 16
        }
	};

	$scope.addItem = function(){  
        var response =  itemService.addItem($scope.item);
        $scope.aboutText = 'Item add ' + response;
	};

}]);