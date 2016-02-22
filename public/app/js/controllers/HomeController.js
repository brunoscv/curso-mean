(function  () {
  angular.module('jobs')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['JobService'];

  function HomeController (JobService) {
    var vm = this;

    JobService.get({ page: 1, size: 10}).$promise
      .then(function (response) {
        vm.jobs = response.items;
      });
  }
})();
