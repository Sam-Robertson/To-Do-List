(function(){
    'use strict';

    onload

    angular.module('basicApp')
        .component('homeController', { templateUrl: "toDoApp/templates/home.html", controller: homeController, controllerAs: "hc"});

    homeController.$inject = ['homeService', '$stateParams'];

    function homeController(homeService, $stateParams) {

        
        var hc = this;
        hc.titleText = homeService.Lists[$stateParams.index];
        hc.sometext;

        hc.clearText = clearText;
        hc.makeItem = makeItem;
        hc.fullList = homeService.myFullList;
        hc.activeList = activeList;
        hc.completedList = completedList;
        hc.makeList = makeList;
        hc.clearCompleted = clearCompleted;
        hc.index = $stateParams.index;
        



        // define functions
        function clearText() {
            hc.sometext = homeService.clearText();
        }
        function makeItem(){
            homeService.addNewActive(hc.sometext, $stateParams.index);
            clearText();
        }
        function activeList() {
            return homeService.getActiveTasks();
        }
        function completedList() {
            return homeService.getCompletedTasks();
        }
        function makeList() {
            homeService.makeNewList(hc.titleText);
            console.log(hc.titleText);
        }
        function clearCompleted() {
            homeService.clearCompleted();
        }
    }

}());


