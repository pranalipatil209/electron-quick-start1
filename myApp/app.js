angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'first.html',
                controller: 'demoCntrl',
                onEnter: function () {
                    console.log('here');
                }
            })
            .state('test',{
                url:'/test',
                templateUrl: 'test.html'
            })


    });
