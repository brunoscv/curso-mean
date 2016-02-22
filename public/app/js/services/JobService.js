(function  () {
  angular.module('jobs')
    .factory('JobService', JobService);

  JobService.$inject = ['$resource'];

  function JobService ($resource) {
    return $resource('/api/jobs/:_id', { _id: '@_id'});
  }

})();
