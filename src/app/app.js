require('angular');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');
require("angular-ui-bootstrap");
require('angularjs-datetime-picker');
//require('./components/home/homeModule.js');
//require('./components/home/homeResource.js');
require('./services/service.js');
require('./components/home/home.js');
require('./components/item/item.js');
require('./components/build/build.js');
require('./components/metrics/metrics.js');
require('./components/testDetail/testDetail.js');


var app = angular.module('myApp', ['ngMaterial', 'ui.bootstrap', 'ui.router', 'angularjs-datetime-picker', 'googlechart', 'myApp.home', 'myApp.item', 'myApp.build', 'myApp.metrics', 'myApp.testDetail', 'myApp.services']);

app.directive("paiChart",
    function() {
        return {
            template: "<div google-chart chart='newObj{{$parent.$index}}' style='width:180px; height:180px;'></div>",
            replace: false,
            restrict: 'EA',
            scope: true,
            controller: function($scope) {
                $scope.$parent.$parent["asg" + $scope.$parent.$index] = "toD0";
                $scope.$parent.$parent['newObj' + $scope.$parent.$index] = {};
                $scope.$parent.$parent['newObj' + $scope.$parent.$index]['type'] = "PieChart";
                $scope.$parent.$parent['newObj' + $scope.$parent.$index]['options'] = {
                	width: 150,
               		height: 150,
               		chartArea:{
					    left:5,
					    top: 6,
					    width: '100%',
					    height: '150'
					},
                    legend: {
                        position: 'none'
                    }
                };
                $scope.$parent.$parent['newObj' + $scope.$parent.$index]['data'] = {
                    "cols": [{
                        id: "t",
                        label: "Topping",
                        type: "string"
                    }, {
                        id: "s",
                        label: "Slices",
                        type: "number"
                    }],
                    "rows": [{
                        c: [{
                            v: "Test Passed"
                        }, {
                            v: $scope.$parent.item.unitTest.passedTest
                        }, ]
                    }, {
                        c: [{
                            v: "Failed Test"
                        }, {
                            v: $scope.$parent.item.unitTest.failedTest
                        }]
                    }]
                };
            }
        };
    }
);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            views: {
                "": {
                    templateUrl: "app/components/home/home.html"
                },
                "header@home": {
                    templateUrl: "app/shared/header/header.html"
                }
            }
        })
        .state('item', {
            url: "/item",
            views: {
                "": {
                    templateUrl: "app/components/item/item.html"
                },
                "header@item": {
                    templateUrl: "app/shared/header/header.html"
                }
            }
        })
        .state('build', {
            parent: 'home',
            params: {
                tId: null,
                frm: 'home'
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $modal) {
                $modal.open({
                    templateUrl: 'app/components/build/build.html',
                    controller: 'buildCtrl',
                    windowClass: 'Build-Details',
                    resolve: {
                        typesList: function() {}
                    }
                }).result.finally(function() {
                    $state.go('^');
                });
            }]
        })
        .state('metrics', {
            parent: 'home',
            params: {
                tId: null,
                frm: 'home'
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $modal) {
                $modal.open({
                    templateUrl: 'app/components/metrics/metrics.html',
                    controller: 'metricsCtrl',
                    windowClass: 'Metrics_Details',
                    resolve: {
                        typesList: function() {}
                    }
                }).result.finally(function() {
                    $state.go('^');
                });
            }]
        })
        .state('testDetail', {
            parent: 'home',
            params: {
                tId: null,
                frm: 'home'
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $modal) {
                $modal.open({
                    templateUrl: 'app/components/testDetail/testDetail.html',
                    controller: 'testDetailCtrl',
                    windowClass: 'Test_Details',
                    resolve: {
                        typesList: function() {}
                    }
                }).result.finally(function() {
                    $state.go('^');
                });
            }]
        });
}); 