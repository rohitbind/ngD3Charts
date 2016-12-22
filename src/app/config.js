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
            .state('customChart', {
                url: '/customChart',
                templateUrl: 'app/barChartModule/barChartView.html'
            })
            .state('justChart', {
                url: '/justChart',
                templateUrl: 'app/barChart2/barChart2.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html'
            });

        $urlRouterProvider.otherwise('/home');
    }
})();