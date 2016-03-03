(function  () {
  angular.module('jobs')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['appSettings', '$http', '$q', '$timeout', '$state', '$location', 'TokenHandler'];

  function AuthService (appSettings, $http, $q, $timeout, $state, $location, TokenHandler) {

  	function login(credentials) {
  		var defeered = $q.defer();

  		$http.post(appSettings.authUrl + 'login', credentials)
  			.then(function (response) {
  				TokenHandler.set(response.data.token);
  				defeered.resolve();
  			})
  			.catch(defeered.reject);

  		return defeered.promise;
  	}

  	function isAuthenticated() {
      return TokenHandler.get();
    }

    function authorize(url) {

      $timeout(function () {
        $state.go('login');
        if (url) $location.search({redirect : url});
      });
    }

  	return {
  		login : login,
  		isAuthenticated : isAuthenticated,
  		authorize : authorize
  	}
  }

})();
