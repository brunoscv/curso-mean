(function  () {

  angular.module('jobs')
    .factory('AuthHttpInterceptor', AuthHttpInterceptor);

  AuthHttpInterceptor.$inject = ['TokenHandler'];

  function AuthHttpInterceptor(TokenHandler) {

    function request(config) {
      config.header = config.header || {};

      if (TokenHandler.get()) {
        config.headers['x-access-token'] = TokenHandler.get();
      }

      return config;
    }

    return {
      request : request
    }
  };

  angular.module('jobs')
    .config(httpConfig);

  httpConfig.$inject = ['$httpProvider'];

  function httpConfig($httpProvider) {
    $httpProvider.interceptors.push('AuthHttpInterceptor');
  }

})();
