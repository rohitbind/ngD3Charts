(function () {
    'use strict';

    angular
        .module('analyticsChart')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope','$state'];

    /* @ngInject */
    function homeController($scope, $state) {
        $scope.title = "Home";

        $scope.$state = $state;
        alert($state.current);
    }

})();