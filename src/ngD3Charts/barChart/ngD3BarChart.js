(function() {
    'use strict';
    
    angular
        .module('ngD3Charts')
        .directive('d3BarChart', d3BarChart);
    
    d3BarChart.$inject = [];
    
    /* @ngInject */
    function d3BarChart() {
        var directive = {
            bindToController: true,
            controller: d3BarChartController,
            controllerAs: 'vm',
            templateURL : 'ngD3Chart.html',
            link: link,
            restrict: 'A',
            scope: {}
        };
        return directive;
        
        function link(scope, element, attrs) {
            
        }
    }
    
    d3BarChartController.$inject = ['$scope'];
    
    /* @ngInject */
    function d3BarChartController($scope) {
        
    }
    
})();