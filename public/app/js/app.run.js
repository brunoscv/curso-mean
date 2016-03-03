(function  () {
  angular.module('jobs')
  .run(Run);

  Run.$inject = ['$rootScope', 'AuthService'];

  function Run($rootScope, AuthService){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      var authorization = toState.authorization;

      if(!AuthService.isAuthenticated() && authorization) {
        AuthService.authorize(toState.name);
      }
    });
  }
})();
