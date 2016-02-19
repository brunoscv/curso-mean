(function  () {
  angular.module('jobs')
    .factory('CompanyService', CompanyService);

  CompanyService.$inject = ['$resource'];

  function CompanyService ($resource) {
    return $resource('/api/companies/:_id', { _id: '@_id'});
  }

})();
