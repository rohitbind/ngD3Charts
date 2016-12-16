(function() {
    'use strict';
    
    angular
        .module('analyticsChart')
        .controller('barChartController', barChartController);
    
    barChartController.$inject = ['$scope'];
    
    /* @ngInject */
    function barChartController($scope) {
        var vm = this;
        vm.title = 'barChartController';
        
        activate();
        
        ////////////////
        
        function activate() {
            
        }
    }
    
})();

