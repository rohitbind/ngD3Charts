(function () {
    'use strict';

    angular
        .module('analyticsChart')
        .controller('barchart2', barchart2);

    barchart2.$inject = ['$scope', '$state'];

    /* @ngInject */
    function barchart2($scope, $state) {
        $scope.title = "Bar Chart 2";

        // alert($state.current.name);

        $scope.barChartData1 = {
            "uniqueName" : "barChartData1",
            "plotingData" : [{
                'x': 20,
                'y': 508
            }, {
                'x': 20,
                'y': 202
            }, {
                'x': 40,
                'y': 123
            }, {
                'x': 60,
                'y': 445
            }, {
                'x': 80,
                'y': 512
            }, {
                'x': 100,
                'y': 600
            }],
            "height" : 300,
            "width" : 500
        };

        $scope.barChartData2 = {
            "uniqueName" : "barChartData2",
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
    }

})();