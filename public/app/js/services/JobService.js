(function  () {
  angular.module('jobs')
    .factory('JobService', JobService);

  JobService.$inject = ['$http'];

  function JobService ($http) {

    function list (query) {
      return $http.get('/api/jobs' + (query || ''));
    }

    function byId (query) {
      return $http.get('/api/jobs' + (query || ''));
    }

    function create (query) {
      return $http.get('/api/jobs' + (query || ''));
    }

    function update (query) {
      return $http.get('/api/jobs' + (query || ''));
    }

    function remove (query) {
      return $http.get('/api/jobs' + (query || ''));
    }

    return {
      list : list
    }
  }

})();
