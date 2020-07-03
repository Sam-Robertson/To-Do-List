
(function(){
    'use strict';

    angular.module('basicApp')
        .component('completedComponent', { templateUrl: "toDoApp/templates/completed.html", controller: completedComponent, controllerAs: "vm"});

    function completedComponent(homeService) {


        var vm = this;

        vm.completedList = homeService.getCompletedTasks();
        vm.clearCompleted = homeService.clearCompleted;

        vm.clearCompleted = function () {
            homeService.clearCompleted();
            vm.completedList = homeService.getCompletedTasks();
            $state.go("completed");
        }

    }

}());