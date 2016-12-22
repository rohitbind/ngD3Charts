(function() {
    'use strict';
    
    angular
        .module('analyticsChart')
        .controller('barChartController', barChartController);
    
    barChartController.$inject = ['$scope', '$state', '$localStorage'];
    
    /* @ngInject */
    function barChartController($scope, $state, $localStorage) {

        alert($state.current.name);
        $scope.title = "Bar Chart";

        if(!angular.isUndefined($localStorage.barChartData)){
            $scope.barChartData = $localStorage.barChartData;
        } else {
            defaultValues();
        }

        function defaultValues() {
            //Default Values
            $scope.barChartData = {
                "uniqueName" : "barChartData1",
                "plotingData" : [{
                    'x': 1,
                    'y': 50
                }, {
                    'x': 20,
                    'y': 20
                }, {
                    'x': 40,
                    'y': 10
                }, {
                    'x': 60,
                    'y': 40
                }, {
                    'x': 80,
                    'y': 5
                }, {
                    'x': 100,
                    'y': 60
                }],
                "height" : 300,
                "width" : 500,
                "barColor" : [{
                    "color" : "#4caf50"
                },{
                    "color" : "#e08600"
                },{
                    "color" : "#cb171e"
                }]
            };
        }

        $scope.loadNewGraph = function () {
            console.log($scope.barChartData);
            $localStorage.barChartData = $scope.barChartData;
            $state.reload();
        };

        $scope.setDetault = function () {
            defaultValues();
            $localStorage.barChartData = $scope.barChartData;
            $state.reload();
        }
    }
    
})();

