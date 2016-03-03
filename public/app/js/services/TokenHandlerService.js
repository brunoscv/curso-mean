(function  () {
  angular.module('jobs')
  .factory('TokenHandler', TokenHandler);

  // TODO : Use sessionStorage

  function TokenHandler(){
    var _token = null;

    function getToken() {
      return _token;
    }

    function setToken(token) {
      _token = token;
    }

    return {
      get: getToken,
      set: setToken
    };
  }
    
})();
