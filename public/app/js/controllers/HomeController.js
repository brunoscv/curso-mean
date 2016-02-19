(function  () {
  angular.module('jobs')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['CompanyService'];

  function HomeController (JobService) {
    var vm = this;

    JobService.query({ page: 1, size: 10}).$promise
      .then(function (response) {
        vm.jobs = response.data;
      });
  }
})();
