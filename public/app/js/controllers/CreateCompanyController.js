(function  () {
  angular.module('jobs')
    .controller('CreateCompanyController', CreateCompanyController);

  CreateCompanyController.$inject = ['CompanyService', '$state'];

  function CreateCompanyController (CompanyService, $state) {
    var vm = this;

    vm.company = {
      name : null,
      companyLogo : null,
      website : null,
      email : null,
      password : null
    };

    // CompanyService.get({_id : $state.params.id}).$promise
    //   .then(function  (response) {
    //     if(!response || response.err) return redirect();

    //     vm.job = response;
    //   });
  }
})();
