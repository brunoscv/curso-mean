(function  () {
  angular.module('jobs')
  .config(Config);

  Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Config($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        views : {
          '' : {
            templateUrl: 'app/partials/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
          },
          'footer' : {
            templateUrl: 'app/partials/footer.html'
          }
        }
      })
      .state('jobs-detail', {
        url: '/jobs/:id',
        views: {
          '' : {
            templateUrl: 'app/partials/job-description.html',
            controller: 'JobsController',
            controllerAs: 'vm'
          },
          'header' : {
            templateUrl: 'app/partials/header.html'
          },
          'footer' : {
            templateUrl: 'app/partials/footer.html'
          }
        }
      })
      .state('company-detail', {
        url: '/companies/:id',
        views: {
          '' : {
            templateUrl: 'app/partials/company-description.html',
            controller: 'CompaniesController',
            controllerAs: 'vm'
          },
          'header' : {
            templateUrl: 'app/partials/header.html'
          },
          'footer' : {
            templateUrl: 'app/partials/footer.html'
          }
        }
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
