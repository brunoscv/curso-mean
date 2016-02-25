(function  () {
  angular.module('jobs')
    .factory('CompanyService', CompanyService);

  CompanyService.$inject = ['appSettings', '$resource'];

  function CompanyService (appSettings, $resource) {
    return $resource(appSettings.apiUrl + 'companies/:_id', { _id: '@_id'}, {
      getJobs: {
        method: 'GET',
        url: appSettings.apiUrl + 'companies/:_id/jobs'
      }
    });
  }

})();
