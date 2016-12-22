(function() {
    'use strict';
    
    angular
        .module('analyticsChart')
        .controller('barChartController', barChartController);
    
    barChartController.$inject = ['$scope'];
    
    /* @ngInject */
    function barChartController($scope) {
        $scope.title = "Bar Chart";

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
            "width" : 500
        };
    }
    
})();

