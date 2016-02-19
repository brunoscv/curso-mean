(function  () {
  angular.module('jobs')
  .config(Config);

  Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/partials/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .state('jobs', {
      url: '/jobs',
      templateUrl: 'app/partials/jobs.html',
      controller: 'JobsController',
      controllerAs: 'vm'
    });
  }
})();
