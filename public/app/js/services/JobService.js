(function  () {
  angular.module('jobs')
    .factory('JobService', JobService);

  JobService.$inject = ['appSettings', '$resource'];

  function JobService (appSettings, $resource) {
    return $resource(appSettings.apiUrl + 'jobs/:_id', { _id: '@_id'});
  }

})();
