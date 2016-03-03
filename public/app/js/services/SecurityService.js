(function  () {
  angular.module('jobs')
    .factory('SecurityService', SecurityService);

  SecurityService.$inject = ['appSettings', '$state'];

  function SecurityService (appSettings, $state) {
    var _token = null;

    function isAuthenticated() {
      return _token;
    }

    function authorize() {
      return $state.go('login');
    }

    return {
      isAuthenticated : isAuthenticated,
      authorize : authorize
    }
  }

})();
