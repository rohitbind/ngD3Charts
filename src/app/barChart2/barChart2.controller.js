(function () {
    'use strict';

    angular
        .module('analyticsChart')
        .controller('barchart2', barchart2);

    barchart2.$inject = ['$scope'];

    /* @ngInject */
    function barchart2($scope) {
        $scope.title = "Bar Chart 2";

        $scope.barChartData1 = {
            "uniqueName" : "barChartData1",
            "plotingData" : [{
                'x': 20,
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
            "width" : 500
        };
        $scope.barChartData2 = {
            "uniqueName" : "barChartData2",
            "plotingData" : [{
                'x': 1,
                'y': 100
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
            "width" : 500
        };
    }

})();