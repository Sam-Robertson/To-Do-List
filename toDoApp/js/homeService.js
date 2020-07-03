(function(){
    'use strict';

    angular.module('basicApp')
        .service('homeService', homeService);

    homeService.$inject = ["$filter", "$state"];

    function homeService($filter, $state) {



        var hs = this;

        hs.myFullList = [];
        hs.Lists = ["Main List"];


        hs.clearText = clearText;
        hs.getCompletedTasks = getCompletedTasks;
        hs.getActiveTasks = getActiveTasks;
        hs.addNewActive = addNewActive;
        hs.makeNewList = makeNewList;
        hs.clearCompleted = clearCompleted;

        return hs;

        // define functions

        function clearText() {
            hs.sometext = '';
            return hs.sometext;
        }
        function getCompletedTasks(){
            return $filter('filter')(hs.myFullList, {finished: true});
        }
        function getActiveTasks() {
            return $filter('filter')(hs.myFullList, {finished: false});

        }
        function addNewActive(newTask, index) {
            hs.myFullList.push({name:newTask, finished: false, index: index});
        }
        function makeNewList(titleText) {
            hs.Lists.push(titleText);
            
        }
        function clearCompleted() {
               hs.myFullList = getActiveTasks();
            console.log("inside clear completed");
            console.log(getActiveTasks());

        }
    }

}());


// I had an idea: use a filter and a key on the object to make different lists without the need for multiple arrays