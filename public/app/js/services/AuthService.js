(function  () {
  angular.module('jobs')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['appSettings', '$http', '$q', '$timeout', '$state', '$location'];

  function AuthService (appSettings, $http, $q, $timeout, $state, $location) {

  	var _token = null;

  	function login(credentials) {
  		var defeered = $q.defer();

  		$http.post(appSettings.authUrl + 'login', credentials)
  			.then(function (response) {
  				_token = response.data.token;

  				defeered.resolve();
  			})
  			.catch(defeered.reject);

  		return defeered.promise;
  	}

  	function isAuthenticated() {
      return _token;
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
