(function(){
    'use strict';

    angular.module('basicApp')
        .controller('navController', navController);

    navController.$inject = ["$location", "homeService"];

    function navController($location, homeService){
        var nav = this;
        nav.isActive = isActive;
        nav.Lists = homeService.Lists;




        function isActive(viewLocation) {
            return viewLocation === $location.path();
        }
    }

}());
