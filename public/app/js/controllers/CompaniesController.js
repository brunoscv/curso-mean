(function  () {
  'use strict';

  angular.module('jobs')
    .controller('CompaniesController', CompaniesController);

  CompaniesController.$inject = ['CompanyService', '$state'];

  function CompaniesController (CompanyService, $state) {
    var vm = this;

    if(!$state.params.id) {
      return redirect();
    }

    CompanyService.get({_id : $state.params.id}).$promise
      .then(function  (response) {
        if(!response || response.err) return redirect();

        vm.company = response;

        return CompanyService.getJobs({_id : $state.params.id}).$promise;
      })
      .then(function (response) {
        vm.company.jobs = response.items;
      });

    function redirect () {
      $state.go('home');
    }
  }

})();
