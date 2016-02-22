(function  () {
  angular.module('jobs')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['JobService', '$state'];

  function HomeController (JobService, $state) {
    var vm = this;

    var PAGE = 1;
    var SIZE = 10;

    vm.jobs = [];
    vm.page = 0;
    vm.size = 0;
    vm.total = 0;

    vm.filters = [];
    vm.tags = [];

    vm.loadMore = loadMore;
    vm.changeFilter = changeFilter;
    vm.changeTag = changeTag;
    vm.viewJobDetail = viewJobDetail;

    function loadMore (e) {
      e.preventDefault();

      if (vm.total > vm.jobs.length) {
        return loadJobs( (vm.page + 1) , SIZE);
      }
    }

    function loadJobs (page, size) {
      JobService.get({
        page: page || PAGE,
        size: size || SIZE,
        types: vm.filters.join(','),
        tags: vm.tags.join(',')
      }).$promise
        .then(function (response) {
          vm.jobs = vm.jobs.concat(response.items);
          vm.page = response._metadata.page;
          vm.size = response._metadata.size;
          vm.total = response._metadata.total;
        });
    }

    function changeFilter (jobType) {
      var i = vm.filters.indexOf(jobType);

      if (~i) {
        vm.filters.splice(i, 1);
      } else {
        vm.filters.push(jobType);
      }

      loadJobs();
      vm.jobs = [];
    }

    function changeTag (tag) {
      var i = vm.tags.indexOf(tag);

      if (~i) {
        vm.tags.splice(i, 1);
      } else {
        vm.tags.push(tag);
      }

      loadJobs();
      vm.jobs = [];
    }

    function viewJobDetail (id) {
      if (!id) return;

      $state.go('jobs-detail', {id: id})
    }

    loadJobs();
  }
})();
