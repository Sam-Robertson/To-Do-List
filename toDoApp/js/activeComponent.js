(function(){
    'use strict';

    angular.module('basicApp')
        .component('activeComponent', { templateUrl: "toDoApp/templates/active.html", controller: activeComponent, controllerAs: "ac"});

    function activeComponent(homeService) {

        var ac = this;

        ac.activeList = homeService.getActiveTasks();

    }

}());