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
            .state('home', {
                url: '/home',
                templateUrl: 'app/barChartModule/barChartView.html'
            })
            .state('home2', {
                url: '/home2',
                templateUrl: 'app/barChartModule/barChartView.html'
            });

        $urlRouterProvider.otherwise('/home2');
    }
})();