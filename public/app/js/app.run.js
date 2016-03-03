(function  () {
  angular.module('jobs')
  .run(Run);

  Run.$inject = ['$rootScope', 'SecurityService'];

  function Run($rootScope, SecurityService){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      var authorization = toState.authorization;

      console.log(arguments)

      if(!SecurityService.isAuthenticated() && authorization) {
        console.log('need auth');
        SecurityService.authorize();
      }
    });
  }
})();
