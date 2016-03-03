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

    vm.submitCompany = function () {
      CompanyService.save(vm.company);
    }
    
  }
})();
