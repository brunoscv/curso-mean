(function  () {
  angular.module('jobs')
    .controller('PostJobController', PostJobController);

  PostJobController.$inject = ['JobService', '$state'];

  function PostJobController (JobService, $state) {
    var vm = this;

    vm.jobTypes = [
      'Full Time',
      'Estágio',
      'Freela'
    ];

    vm.job = {
      name : null,
      location : null,
      description : null,
      remote : false,
      type : null,
      tags : null,
    };

    vm.submitJob = function () {
      JobService.save(vm.job);
    }
    
  }
})();
