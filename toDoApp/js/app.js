(function(){
    'use strict';

    angular.module('basicApp', [
        "ui.router"
    ])

    .config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            // define all app states (pages)
            $stateProvider
                .state("home", {
                    url: "/home",
                    template: "<home-controller></home-controller>",
                    params: {
                        index: null
                    }
                })
                .state("about", {
                    url: "/about",
                    templateUrl: "toDoApp/templates/about.html"
                })
                .state("active", {
                    url: "/active",
                    template: "<active-component></active-component>"

                })
                .state("completed", {
                    url: "/completed",
                    template: "<completed-component></completed-component>"

                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise("/home?index=0");
        }]);

}());
