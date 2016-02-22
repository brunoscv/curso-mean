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
      .state('jobs-detail', {
        url: '/jobs/:id',
        templateUrl: 'app/partials/job-description.html',
        controller: 'JobsController',
        controllerAs: 'vm'
      })
      .state('company-detail', {
        url: '/companies/:id',
        templateUrl: 'app/partials/company-description.html',
        controller: 'CompaniesController',
        controllerAs: 'vm'
      })
      .state('post-job', {
        url: '/post-job',
        templateUrl: 'app/partials/post-job.html',
        controller: 'PostJobController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/partials/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('create-company', {
        url: '/create-company',
        templateUrl: 'app/partials/create-company.html',
        controller: 'CreateCompanyController',
        controllerAs: 'vm'
      });
  }
})();
