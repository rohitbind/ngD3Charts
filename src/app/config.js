(function() {
    'use strict';

    angular
        .module('analyticsChart')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    /** @ngInject */
    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $stateProvider
            .state('barChart1', {
                url: '/barChart1',
                templateUrl: 'app/barChartModule/barChartView.html'
            })
            .state('barChart2', {
                url: '/barChart2',
                templateUrl: 'app/barChart2/barChart2.html'
            });

        $urlRouterProvider.otherwise('/barChart1');
    }
})();