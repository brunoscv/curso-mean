(function  () {
  angular.module('jobs')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['JobService'];

  function HomeController (JobService) {
    var vm = this;

    var PAGE = 1;
    var SIZE = 10;

    vm.jobs = [];
    vm.page = 0;
    vm.size = 0;
    vm.amount = 0;

    vm.loadMore = loadMore;

    function loadMore (e) {
      e.preventDefault();

      if (vm.amount > vm.jobs.length) {
        return loadJobs( (vm.page + 1) , SIZE);
      }
    }

    function loadJobs (page, size) {
      JobService.get({ page: page || PAGE, size: size || SIZE}).$promise
        .then(function (response) {
          vm.jobs = vm.jobs.concat(response.items);
          vm.page = response._metadata.page;
          vm.size = response._metadata.size;
          vm.amount = response._metadata.total;
        });
    }

    loadJobs();
  }
})();
