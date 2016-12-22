(function () {
    'use strict';

    angular
        .module('analyticsChart')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope','$state'];

    /* @ngInject */
    function homeController($scope, $state) {
        alert($state.current.name);
    }

})();