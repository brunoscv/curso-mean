(function  () {
  angular.module('jobs')
    .controller('PostJobController', PostJobController);

  PostJobController.$inject = ['CompanyService', '$state'];

  function PostJobController (CompanyService, $state) {
    var vm = this;

    vm.company = {
      name : null,
      description : null,
      remote : false,
      tags : null,
    };
    
  }
})();
